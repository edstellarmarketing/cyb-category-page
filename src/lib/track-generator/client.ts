import { CATALOG, getModuleById } from "./catalog";
import type {
  CatalogModule,
  GeneratedTrack,
  Role,
  SurveyAnswers,
} from "./types";

/**
 * Anthropic client stub.
 *
 * Today this implements a deterministic local generator so the v3 page is fully
 * clickable without an API key. The shape of the output mirrors what the real
 * Claude Sonnet 4.6 call should produce per the prompt in prompt.ts.
 *
 * To swap in the real call:
 *   1. Set ANTHROPIC_API_KEY in the server environment.
 *   2. npm i @anthropic-ai/sdk
 *   3. Replace the body of generateTrackFromAnthropic below with the SDK call,
 *      using SYSTEM_PROMPT + CATALOG_PROMPT as cached blocks (cache_control)
 *      and buildUserPrompt(answers) as the user message.
 *   4. Parse the JSON response and return it as GeneratedTrack.
 */
export async function generateTrackFromAnthropic(
  answers: SurveyAnswers,
  trackId: string,
): Promise<GeneratedTrack> {
  // ─── REAL CALL GOES HERE ─────────────────────────────────────────────────
  // const Anthropic = (await import("@anthropic-ai/sdk")).default;
  // const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  // const resp = await client.messages.create({
  //   model: "claude-sonnet-4-6",
  //   max_tokens: 2048,
  //   system: [
  //     { type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
  //     { type: "text", text: CATALOG_PROMPT, cache_control: { type: "ephemeral" } },
  //   ],
  //   messages: [{ role: "user", content: buildUserPrompt(answers) }],
  // });
  // return JSON.parse((resp.content[0] as { text: string }).text);
  // ─────────────────────────────────────────────────────────────────────────

  // Local deterministic stub that scores the catalog and returns a shaped track.
  return localStub(answers, trackId);
}

function localStub(answers: SurveyAnswers, trackId: string): GeneratedTrack {
  const targetCount = countForDuration(answers.duration);

  const scored = CATALOG.map((m) => ({
    module: m,
    score: scoreModule(m, answers),
  }));

  // Drop zero-signal modules unless we'd otherwise fall short
  const positiveSignal = scored.filter((s) => s.score > 0);
  const lowFiller = scored.filter((s) => s.score === 0).slice(0, Math.max(0, targetCount - positiveSignal.length));
  const candidates = [...positiveSignal.sort((a, b) => b.score - a.score), ...lowFiller];

  // Force-include foundations when maturity is "none"
  if (answers.maturity === "none") {
    const foundations = scored.find((s) => s.module.id === "core-soc-fundamentals");
    if (foundations && !candidates.slice(0, targetCount).some((c) => c.module.id === foundations.module.id)) {
      candidates.unshift(foundations);
    }
  }

  // Pick top-N preserving constraints
  const picked: { module: CatalogModule; score: number }[] = [];
  const seen = new Set<string>();
  for (const c of candidates) {
    if (picked.length >= targetCount) break;
    if (seen.has(c.module.id)) continue;
    seen.add(c.module.id);
    picked.push(c);
  }

  // Enforce kind ratios
  const enforced = enforceKindRatios(picked, scored, answers, targetCount);

  // Sequence into stages
  const stages = sequenceIntoStages(enforced, answers);

  const caveats: string[] = [];
  if (answers.duration === 4 && answers.roles.length > 3) {
    caveats.push(
      `Trimmed to a 4-week window: covered the highest-leverage modules for the ${answers.roles.length} roles you selected.`,
    );
  }

  const totalHours = stages.reduce((s, st) => s + st.modules.reduce((sm, m) => sm + m.hours, 0), 0);
  const totalModules = stages.reduce((s, st) => s + st.modules.length, 0);
  const totalWeeks = stages.reduce((s, st) => s + st.weeks, 0);

  return {
    trackId,
    headline: buildHeadline(answers, totalWeeks),
    summary: buildSummary(answers, totalModules, totalHours),
    totals: {
      weeks: totalWeeks,
      moduleCount: totalModules,
      hours: totalHours,
      deliveryNote: deliveryNote(answers.delivery),
    },
    stages,
    caveats,
    servedFromFallback: false,
  };
}

function countForDuration(d: SurveyAnswers["duration"]): number {
  switch (d) {
    case 4:
      return 4;
    case 8:
      return 6;
    case 12:
      return 8;
    case 16:
      return 10;
    case 26:
      return 12;
    default:
      return 8;
  }
}

function scoreModule(m: CatalogModule, a: SurveyAnswers): number {
  let s = 0;
  if (m.kind === "core") s += 5;
  if (m.signals.roles && a.roles.some((r) => m.signals.roles!.includes(r))) {
    s += 4 * m.signals.roles.filter((r) => a.roles.includes(r)).length;
  }
  if (m.signals.stacks && m.signals.stacks.includes(a.stack)) s += 3;
  if (m.signals.gaps) {
    s += 3 * m.signals.gaps.filter((g) => a.gaps.includes(g)).length;
  }
  if (m.signals.sectors && m.signals.sectors.includes(a.sector)) s += 2;
  if (m.signals.maturity && m.signals.maturity.includes(a.maturity)) s += 1;
  return s;
}

function enforceKindRatios(
  picked: { module: CatalogModule; score: number }[],
  scored: { module: CatalogModule; score: number }[],
  a: SurveyAnswers,
  target: number,
): { module: CatalogModule; score: number }[] {
  const result = [...picked];
  const present = new Set(result.map((p) => p.module.id));

  // Soft requirement: gap-driven soft-skill module
  const needSoft = a.gaps.some((g) =>
    ["leadership-reporting", "comms", "docs", "burnout"].includes(g),
  );
  if (needSoft && !result.some((p) => p.module.kind === "soft")) {
    const soft = scored
      .filter((s) => s.module.kind === "soft" && !present.has(s.module.id))
      .sort((a2, b2) => b2.score - a2.score)[0];
    if (soft) {
      result.pop(); // drop the lowest-priority pick
      result.push(soft);
      present.add(soft.module.id);
    }
  }

  // Adjacent requirement: cloud-soc role or regulated sector
  const needAdjacent =
    a.roles.includes("cloud-soc" as Role) ||
    ["bfsi", "gov", "energy", "healthcare"].includes(a.sector);
  if (needAdjacent && !result.some((p) => p.module.kind === "adjacent")) {
    const adj = scored
      .filter((s) => s.module.kind === "adjacent" && !present.has(s.module.id))
      .sort((a2, b2) => b2.score - a2.score)[0];
    if (adj) {
      result.pop();
      result.push(adj);
      present.add(adj.module.id);
    }
  }

  return result.slice(0, target);
}

type StageLabel = "Foundations" | "Detection" | "Hunting" | "Respond & Optimize" | "Lead";
const STAGE_LABELS: StageLabel[] = ["Foundations", "Detection", "Hunting", "Respond & Optimize", "Lead"];

function sequenceIntoStages(
  picked: { module: CatalogModule; score: number }[],
  answers: SurveyAnswers,
): GeneratedTrack["stages"] {
  const buckets: Record<StageLabel, CatalogModule[]> = {
    Foundations: [],
    Detection: [],
    Hunting: [],
    "Respond & Optimize": [],
    Lead: [],
  };

  for (const { module: m } of picked) {
    if (m.id.includes("fundamentals") || m.id.includes("network")) {
      buckets.Foundations.push(m);
    } else if (m.id.includes("siem") || m.id.includes("mitre") || m.id.includes("identity") || m.id.includes("active-directory")) {
      buckets.Detection.push(m);
    } else if (m.id.includes("hunt")) {
      buckets.Hunting.push(m);
    } else if (m.id.includes("incident") || m.id.includes("forensics") || m.id.includes("soar")) {
      buckets["Respond & Optimize"].push(m);
    } else if (m.kind === "soft" || m.id.includes("scale") || m.id.includes("cloud-soc")) {
      buckets.Lead.push(m);
    } else {
      buckets.Detection.push(m);
    }
  }

  const totalWeeksTarget = answers.duration ?? 12;
  const nonEmptyStages = STAGE_LABELS.filter((k) => buckets[k].length > 0);

  return nonEmptyStages.map((label, idx) => {
    const modules = buckets[label];
    // Allocate weeks proportional to module count
    const weeks =
      idx === nonEmptyStages.length - 1
        ? totalWeeksTarget - nonEmptyStages.slice(0, -1).reduce((s, l) => s + Math.max(2, Math.ceil((buckets[l].length / picked.length) * totalWeeksTarget)), 0)
        : Math.max(2, Math.ceil((modules.length / picked.length) * totalWeeksTarget));

    return {
      label: `Stage ${idx + 1} · ${label}`,
      weeks: Math.max(1, weeks),
      modules: modules.map((m) => ({
        id: m.id,
        title: m.title,
        kind: m.kind,
        hours: pickHours(m),
        rationale: buildRationale(m, answers),
      })),
    };
  });
}

function pickHours(m: CatalogModule): number {
  const [, max] = m.hoursRange;
  return max;
}

function buildRationale(m: CatalogModule, a: SurveyAnswers): string {
  if (m.signals.stacks?.includes(a.stack) && a.stack !== "other") {
    return `Selected because your team runs ${prettyStack(a.stack)}.`;
  }
  if (m.signals.gaps?.some((g) => a.gaps.includes(g))) {
    const matched = m.signals.gaps.find((g) => a.gaps.includes(g))!;
    return `Selected to address the "${prettyGap(matched)}" gap you flagged.`;
  }
  if (m.signals.sectors?.includes(a.sector) && a.sector !== "other") {
    return `Selected for ${prettySector(a.sector)} regulatory and threat context.`;
  }
  if (m.signals.roles?.some((r) => a.roles.includes(r))) {
    const matched = m.signals.roles.find((r) => a.roles.includes(r))!;
    return `Foundational for the ${prettyRole(matched)} cohort you selected.`;
  }
  if (m.kind === "core") {
    return "Core SOC capability — anchors every track regardless of stack or sector.";
  }
  return `Included to round out the ${m.kind} skills your team needs.`;
}

function deliveryNote(d: SurveyAnswers["delivery"]): string {
  switch (d) {
    case "vilt":
      return "Live virtual instructor-led delivery";
    case "on-site":
      return "On-site delivery at your facility";
    case "blended":
      return "Blended delivery: live sessions plus hands-on labs";
    case "other":
      return "Custom delivery model";
  }
}

function buildHeadline(a: SurveyAnswers, weeks: number): string {
  const stack = a.stack === "other" ? "" : ` running ${prettyStack(a.stack)}`;
  const sector = a.sector === "other" ? "" : ` in ${prettySector(a.sector)}`;
  return `${weeks}-week custom SOC analyst track for a ${prettyMaturity(a.maturity)}${stack}${sector}`;
}

function buildSummary(a: SurveyAnswers, count: number, hours: number): string {
  const gapText = a.gaps.length > 0 ? ` with focus on ${prettyGap(a.gaps[0])}` : "";
  return `${count} modules, ${hours} hours of programme time, sequenced across Edstellar's standard stage progression${gapText}.`;
}

function prettyStack(s: SurveyAnswers["stack"]): string {
  return { splunk: "Splunk", sentinel: "Microsoft Sentinel", chronicle: "Google Chronicle", qradar: "QRadar", elk: "the Elastic Stack", other: "their existing stack" }[s];
}
function prettySector(s: SurveyAnswers["sector"]): string {
  return { bfsi: "BFSI", healthcare: "healthcare", mfg: "manufacturing", saas: "SaaS", gov: "government", energy: "energy", retail: "retail", telecom: "telecom", other: "your sector" }[s];
}
function prettyRole(r: Role): string {
  return { l1: "L1 triage", l2: "L2 detection", l3: "L3 hunter", ir: "IR responder", manager: "SOC manager", "detection-eng": "detection engineer", "cloud-soc": "cloud SOC", other: "custom role" }[r];
}
function prettyGap(g: SurveyAnswers["gaps"][number]): string {
  return { tooling: "hands-on tooling", hunting: "threat hunting maturity", "ir-coord": "IR coordination", "leadership-reporting": "reporting to leadership", comms: "cross-team comms", docs: "documentation discipline", burnout: "burnout & retention", other: "the gap you described" }[g];
}
function prettyMaturity(m: SurveyAnswers["maturity"]): string {
  return { none: "team standing up its first SOC", new: "new SOC", operating: "operating SOC", mature: "mature SOC moving to detection-engineering" }[m];
}

// Suppress unused-import warning for the helper
export const __module_lookup_check = getModuleById;
