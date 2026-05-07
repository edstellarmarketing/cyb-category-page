import { generateTrackFromAnthropic } from "./client";
import { buildFallbackTrack } from "./fallback";
import { validateAndNormalise, validateSurvey } from "./validate";
import type { GeneratedTrack, SurveyAnswers } from "./types";

/**
 * Top-level orchestrator: validate input → generate (LLM stub today) → validate output → fallback on failure.
 */
export async function generateTrack(answers: SurveyAnswers): Promise<GeneratedTrack> {
  const inputError = validateSurvey(answers);
  if (inputError) {
    return buildFallbackTrack(answers, makeTrackId());
  }

  const trackId = makeTrackId();

  try {
    const candidate = await generateTrackFromAnthropic(answers, trackId);
    const normalised = validateAndNormalise(candidate, answers);
    if (normalised) return normalised;
  } catch {
    // fall through to fallback
  }

  return buildFallbackTrack(answers, trackId);
}

function makeTrackId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `track_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Server-renders a markdown view of the generated track for sales emails / contact-form prefill.
 */
export function trackToMarkdown(track: GeneratedTrack, answers: SurveyAnswers): string {
  const lines: string[] = [];
  lines.push(`# ${track.headline}`);
  lines.push("");
  lines.push(track.summary);
  lines.push("");
  lines.push(
    `**${track.totals.weeks} weeks · ${track.totals.moduleCount} modules · ${track.totals.hours} hours · ${track.totals.deliveryNote}**`,
  );
  lines.push("");
  for (const stage of track.stages) {
    lines.push(`## ${stage.label} (${stage.weeks} weeks)`);
    for (const m of stage.modules) {
      lines.push(`- **${m.title}** (${m.hours}h) — ${m.rationale}`);
    }
    lines.push("");
  }
  if (track.caveats.length > 0) {
    lines.push("### Notes");
    for (const c of track.caveats) lines.push(`- ${c}`);
    lines.push("");
  }
  lines.push("---");
  lines.push("### Survey answers");
  lines.push(`- Maturity: ${answers.maturity}`);
  lines.push(`- Roles: ${answers.roles.join(", ")}`);
  lines.push(`- Stack: ${answers.stack}`);
  lines.push(`- Sector: ${answers.sector}`);
  lines.push(`- Gaps: ${answers.gaps.join(", ") || "(none flagged)"}`);
  lines.push(`- Duration: ${answers.duration ?? "flexible"}`);
  lines.push(`- Delivery: ${answers.delivery}`);
  if (answers.teamSize) lines.push(`- Team size: ${answers.teamSize}`);
  return lines.join("\n");
}
