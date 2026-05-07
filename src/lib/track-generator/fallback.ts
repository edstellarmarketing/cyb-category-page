import type { GeneratedTrack, SurveyAnswers } from "./types";

/**
 * The static curated track served when the LLM call fails or returns invalid output.
 * Mirrors the v2 5-stage 26-week SOC analyst path.
 */
export function buildFallbackTrack(
  answers: SurveyAnswers,
  trackId: string,
): GeneratedTrack {
  return {
    trackId,
    headline: "Standard 26-week SOC analyst track (curated by Edstellar)",
    summary:
      "We could not generate a custom track right now. This is our standard SOC analyst learning path — a curriculum architect will build the custom version with you when you submit the form.",
    totals: {
      weeks: 26,
      moduleCount: 5,
      hours: 104,
      deliveryNote: deliveryNote(answers.delivery),
    },
    stages: [
      {
        label: "Stage 1 · Foundations & Networking",
        weeks: 4,
        modules: [
          {
            id: "core-soc-fundamentals",
            title: "SOC fundamentals & build-vs-buy",
            kind: "core",
            hours: 16,
            rationale: "Anchors every track in shared SOC vocabulary and the operating model.",
          },
          {
            id: "core-network-fundamentals",
            title: "Network fundamentals for SOC analysts",
            kind: "core",
            hours: 16,
            rationale: "TCP/IP, packet analysis and Linux basics every triage analyst needs.",
          },
        ],
      },
      {
        label: "Stage 2 · SIEM & Log Analysis",
        weeks: 6,
        modules: [
          {
            id: "core-siem-splunk",
            title: "Splunk SPL for detection engineers",
            kind: "core",
            hours: 24,
            rationale: "Production-grade SIEM mastery — the engine of every SOC.",
          },
        ],
      },
      {
        label: "Stage 3 · Detection & Hunting",
        weeks: 6,
        modules: [
          {
            id: "core-mitre-attack",
            title: "MITRE ATT&CK navigation and gap analysis",
            kind: "core",
            hours: 16,
            rationale: "Map detections to attacker behaviour, identify gaps, prioritise hunts.",
          },
        ],
      },
      {
        label: "Stage 4 · Incident Response",
        weeks: 6,
        modules: [
          {
            id: "core-incident-response",
            title: "NIST 800-61 incident response in practice",
            kind: "core",
            hours: 16,
            rationale: "Run-the-room IR drills against real-world ransomware and BEC scenarios.",
          },
        ],
      },
      {
        label: "Stage 5 · Lead & Optimize",
        weeks: 4,
        modules: [
          {
            id: "core-detection-engineering-at-scale",
            title: "Detection engineering at scale",
            kind: "core",
            hours: 16,
            rationale: "Detection-as-code and lifecycle management for senior detection engineers.",
          },
        ],
      },
    ],
    caveats: ["Standard track shown. Submit the form to scope a custom version with a curriculum architect."],
    servedFromFallback: true,
  };
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
