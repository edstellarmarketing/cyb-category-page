import { CATALOG, getModuleById } from "./catalog";
import type { GeneratedTrack, SurveyAnswers } from "./types";

/**
 * Validates a candidate generated track against the catalog and the survey rules.
 * Returns a normalised track or null if it cannot be repaired.
 */
export function validateAndNormalise(
  candidate: GeneratedTrack,
  answers: SurveyAnswers,
): GeneratedTrack | null {
  if (!candidate || !Array.isArray(candidate.stages)) return null;

  const cleanedStages = candidate.stages
    .map((stage) => {
      const cleanedModules = stage.modules
        .map((m) => {
          const source = getModuleById(m.id);
          if (!source) return null;
          // Clamp hours to the catalog range
          const [min, max] = source.hoursRange;
          const hours = Math.max(min, Math.min(max, m.hours || min));
          return {
            id: m.id,
            title: m.title || source.title,
            kind: source.kind,
            hours,
            rationale: m.rationale || `Selected to fit your ${describeAnswers(answers)}.`,
          };
        })
        .filter(Boolean) as GeneratedTrack["stages"][number]["modules"];
      return {
        label: stage.label,
        weeks: stage.weeks,
        modules: cleanedModules,
      };
    })
    .filter((s) => s.modules.length > 0);

  if (cleanedStages.length === 0) return null;

  const allModules = cleanedStages.flatMap((s) => s.modules);
  if (allModules.length === 0) return null;

  // Recompute totals from authoritative module hours
  const moduleCount = allModules.length;
  const hours = allModules.reduce((sum, m) => sum + m.hours, 0);
  const weeks = cleanedStages.reduce((sum, s) => sum + s.weeks, 0);

  // Soft check: at least 60% of modules must be core. If violated, log a caveat.
  const coreCount = allModules.filter((m) => m.kind === "core").length;
  const coreRatio = coreCount / moduleCount;
  const caveats = [...(candidate.caveats || [])];
  if (coreRatio < 0.6) {
    caveats.push("Best-effort selection: some core modules were trimmed to fit your duration.");
  }

  return {
    ...candidate,
    totals: {
      ...candidate.totals,
      weeks,
      moduleCount,
      hours,
    },
    stages: cleanedStages,
    caveats,
    servedFromFallback: false,
  };
}

function describeAnswers(a: SurveyAnswers): string {
  const parts: string[] = [];
  if (a.stack !== "other") parts.push(a.stack);
  if (a.sector !== "other") parts.push(a.sector);
  if (a.gaps.length > 0) parts.push(`${a.gaps[0]} gap`);
  return parts.length ? parts.join(" / ") : "stated requirements";
}

/**
 * Quick sanity check on the survey payload before generating.
 * Returns null on success, an error message string on failure.
 */
export function validateSurvey(answers: unknown): string | null {
  if (!answers || typeof answers !== "object") return "Missing survey answers.";
  const a = answers as Partial<SurveyAnswers>;
  if (!a.maturity) return "maturity is required";
  if (!Array.isArray(a.roles) || a.roles.length === 0) return "roles is required";
  if (!a.stack) return "stack is required";
  if (!a.sector) return "sector is required";
  if (!Array.isArray(a.gaps)) return "gaps must be an array";
  if (!a.delivery) return "delivery is required";
  return null;
}

export const __catalog_ids = CATALOG.map((m) => m.id);
