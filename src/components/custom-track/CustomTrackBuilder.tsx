"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import type {
  Delivery,
  Duration,
  Gap,
  GeneratedTrack,
  Maturity,
  Role,
  Sector,
  Stack,
  SurveyAnswers,
  TeamSize,
} from "@/lib/track-generator/types";

const NAVY = "#1B1D52";
const ACCENT = "#6366F1";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";
const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";
const FONT_REGULAR = "'Riona Sans Regular', Helvetica, Arial, sans-serif";
const FONT_MEDIUM = "'Riona Sans Medium', Helvetica, Arial, sans-serif";
const FONT_BOLD = "'Riona Sans Bold', Helvetica, Arial, sans-serif";

export const TRACK_PREFILL_EVENT = "eds-prefill-track";
export const TRACK_OPEN_EVENT = "eds-open-custom-track";

type StepId =
  | "maturity"
  | "roles"
  | "stack"
  | "sector"
  | "gaps"
  | "duration"
  | "delivery"
  | "teamSize"
  | "lead";

type State = {
  step: StepId;
  history: StepId[];
  answers: Partial<SurveyAnswers>;
  phase: "idle" | "survey" | "generating" | "ready" | "error";
  track: GeneratedTrack | null;
  errorMsg: string | null;
};

type Action =
  | { type: "start" }
  | { type: "answer"; key: keyof SurveyAnswers; value: SurveyAnswers[keyof SurveyAnswers] }
  | { type: "next" }
  | { type: "back" }
  | { type: "submit-start" }
  | { type: "submit-success"; track: GeneratedTrack }
  | { type: "submit-error"; msg: string }
  | { type: "retake" };

const initial: State = {
  step: "maturity",
  history: [],
  answers: {},
  phase: "idle",
  track: null,
  errorMsg: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "start":
      return { ...initial, phase: "survey" };
    case "answer":
      return { ...state, answers: { ...state.answers, [action.key]: action.value } };
    case "next": {
      const next = nextStep(state.step, state.answers);
      if (next === null) return state; // submit happens elsewhere
      return { ...state, step: next, history: [...state.history, state.step] };
    }
    case "back": {
      const prev = state.history[state.history.length - 1];
      if (!prev) return state;
      return { ...state, step: prev, history: state.history.slice(0, -1) };
    }
    case "submit-start":
      return { ...state, phase: "generating", errorMsg: null };
    case "submit-success":
      return { ...state, phase: "ready", track: action.track };
    case "submit-error":
      return { ...state, phase: "error", errorMsg: action.msg };
    case "retake":
      return { ...initial, phase: "survey", answers: state.answers };
  }
}

const STEP_ORDER_BASE: StepId[] = [
  "maturity",
  "roles",
  "stack",
  "sector",
  "gaps",
  "duration",
  "delivery",
  "lead",
];

function nextStep(current: StepId, answers: Partial<SurveyAnswers>): StepId | null {
  // Insert teamSize conditionally after delivery if a manager role was picked
  const order = [...STEP_ORDER_BASE];
  if (answers.roles?.includes("manager") || answers.roles?.includes("detection-eng")) {
    order.splice(order.indexOf("lead"), 0, "teamSize");
  }
  const idx = order.indexOf(current);
  if (idx === -1 || idx === order.length - 1) return null;
  return order[idx + 1];
}

function isLastSurveyStep(current: StepId, answers: Partial<SurveyAnswers>): boolean {
  return nextStep(current, answers) === null;
}

function totalSteps(answers: Partial<SurveyAnswers>): number {
  let count = STEP_ORDER_BASE.length;
  if (answers.roles?.includes("manager") || answers.roles?.includes("detection-eng")) count += 1;
  return count;
}

function currentStepNumber(state: State): number {
  return state.history.length + 1;
}

export function CustomTrackBuilder() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [open, setOpen] = useState(false);

  // Listen for the global "open custom track" event
  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      // Reset to idle whenever the modal is reopened
      dispatch({ type: "start" });
    };
    window.addEventListener(TRACK_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(TRACK_OPEN_EVENT, onOpen);
  }, []);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Body scroll lock while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close after the result CTA fires the prefill event (handoff to contact form)
  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener(TRACK_PREFILL_EVENT, handler);
    return () => window.removeEventListener(TRACK_PREFILL_EVENT, handler);
  }, [open]);

  // Submit when the user advances past the lead step
  const handleNext = async () => {
    if (!isLastSurveyStep(state.step, state.answers)) {
      dispatch({ type: "next" });
      return;
    }
    // Final submit
    const required: Array<keyof SurveyAnswers> = [
      "maturity",
      "roles",
      "stack",
      "sector",
      "gaps",
      "delivery",
    ];
    for (const k of required) {
      if (state.answers[k] === undefined || (Array.isArray(state.answers[k]) && (state.answers[k] as unknown[]).length === 0)) {
        dispatch({ type: "submit-error", msg: `Missing ${k}.` });
        return;
      }
    }
    const payload: SurveyAnswers = {
      maturity: state.answers.maturity!,
      roles: state.answers.roles!,
      stack: state.answers.stack!,
      sector: state.answers.sector!,
      gaps: state.answers.gaps ?? [],
      duration: state.answers.duration ?? null,
      delivery: state.answers.delivery!,
      teamSize: state.answers.teamSize,
      leadName: state.answers.leadName,
      leadEmail: state.answers.leadEmail,
      leadCompany: state.answers.leadCompany,
    };

    dispatch({ type: "submit-start" });
    try {
      const res = await fetch("/api/generate-track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        dispatch({ type: "submit-error", msg: `Server returned ${res.status}` });
        return;
      }
      const track = (await res.json()) as GeneratedTrack;
      dispatch({ type: "submit-success", track });
    } catch (e) {
      dispatch({ type: "submit-error", msg: e instanceof Error ? e.message : "Network error" });
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Custom SOC track builder"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-6 sm:py-10 md:py-14"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl"
        style={{ border: `1px solid ${BORDER}` }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close custom track builder"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1B1D52] transition-colors hover:bg-gray-100"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="px-6 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-12">
          <div>
            <p
              className="text-[12px] uppercase tracking-[0.18em]"
              style={{ color: ACCENT, fontFamily: FONT_BOLD, fontWeight: 700 }}
            >
              Custom Track Builder · ~60 seconds
            </p>
            <h2
              className="mt-2 text-[24px] leading-[1.15] sm:text-[28px] lg:text-[32px]"
              style={{ color: NAVY, fontFamily: FONT_LIGHT }}
            >
              Build a SOC track shaped to your team
            </h2>
            <p
              className="mt-3 text-[14.5px] leading-[1.6] sm:text-[16px]"
              style={{ color: BODY, fontFamily: FONT_LIGHT }}
            >
              Different stack, sector, gap, or shorter window? Answer a few
              questions and we&apos;ll compose a track shaped to you, drawing
              from core SOC skills plus connected skills like leadership,
              comms, and cloud SOC.
            </p>
          </div>

          <div className="mt-6">
            {state.phase === "idle" && <IdleCard onStart={() => dispatch({ type: "start" })} />}
            {state.phase === "survey" && (
              <SurveyCard
                state={state}
                onAnswer={(key, value) =>
                  dispatch({
                    type: "answer",
                    key,
                    value: value as SurveyAnswers[keyof SurveyAnswers],
                  })
                }
                onBack={() => dispatch({ type: "back" })}
                onNext={handleNext}
              />
            )}
            {state.phase === "generating" && <GeneratingCard />}
            {state.phase === "ready" && state.track && (
              <ResultCard
                track={state.track}
                answers={state.answers as SurveyAnswers}
                onRetake={() => dispatch({ type: "retake" })}
              />
            )}
            {state.phase === "error" && (
              <ErrorCard
                msg={state.errorMsg ?? "Unknown error"}
                onRetry={() => {
                  dispatch({ type: "submit-start" });
                  void handleNext();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Idle ────────────────────── */

function IdleCard({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <p
        className="text-[16px] leading-[1.55] sm:text-[17px]"
        style={{ color: BODY, fontFamily: FONT_LIGHT }}
      >
        7 short questions about your stack, sector, team and gaps. We&apos;ll show
        you a recommended track in seconds.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: NAVY, fontFamily: FONT_BOLD, fontWeight: 600 }}
      >
        Build my custom track
      </button>
      <p
        className="text-[12px]"
        style={{ color: MUTED, fontFamily: FONT_LIGHT }}
      >
        No login. The track is generated for review; request it from Edstellar to receive the formal scope.
      </p>
    </div>
  );
}

/* ────────────────────── Survey ────────────────────── */

function SurveyCard({
  state,
  onAnswer,
  onBack,
  onNext,
}: {
  state: State;
  onAnswer: (key: keyof SurveyAnswers, value: SurveyAnswers[keyof SurveyAnswers]) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const total = totalSteps(state.answers);
  const current = currentStepNumber(state);
  const canAdvance = isStepAnswered(state.step, state.answers);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center justify-between">
          <p
            className="text-[12px] uppercase tracking-[0.14em]"
            style={{ color: MUTED, fontFamily: FONT_MEDIUM }}
          >
            Question {current} of {total}
          </p>
          {state.history.length > 0 && (
            <button
              type="button"
              onClick={onBack}
              className="text-[12px] uppercase tracking-[0.12em] hover:underline"
              style={{ color: ACCENT, fontFamily: FONT_MEDIUM }}
            >
              ← Back
            </button>
          )}
        </div>
        <div className="mt-3 h-1 rounded-full" style={{ backgroundColor: "#E5E7EB" }}>
          <div
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: `${(current / total) * 100}%`,
              backgroundColor: ACCENT,
            }}
          />
        </div>
      </div>

      <StepRenderer step={state.step} answers={state.answers} onAnswer={onAnswer} />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          disabled={!canAdvance}
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          style={{ backgroundColor: NAVY, fontFamily: FONT_BOLD, fontWeight: 600 }}
        >
          {isLastSurveyStep(state.step, state.answers) ? "Generate my track" : "Next"}
        </button>
      </div>
    </div>
  );
}

function isStepAnswered(step: StepId, a: Partial<SurveyAnswers>): boolean {
  switch (step) {
    case "maturity":
      return !!a.maturity;
    case "roles":
      if (!Array.isArray(a.roles) || a.roles.length === 0) return false;
      if (a.roles.includes("other") && !(a.rolesOther ?? "").trim()) return false;
      return true;
    case "stack":
      if (!a.stack) return false;
      if (a.stack === "other" && !(a.stackOther ?? "").trim()) return false;
      return true;
    case "sector":
      if (!a.sector) return false;
      if (a.sector === "other" && !(a.sectorOther ?? "").trim()) return false;
      return true;
    case "gaps":
      // Gaps is optional unless "other" is picked, in which case the text must be filled.
      if (Array.isArray(a.gaps) && a.gaps.includes("other") && !(a.gapsOther ?? "").trim()) return false;
      return true;
    case "duration":
      return a.duration !== undefined;
    case "delivery":
      if (!a.delivery) return false;
      if (a.delivery === "other" && !(a.deliveryOther ?? "").trim()) return false;
      return true;
    case "teamSize":
      if (!a.teamSize) return false;
      if (a.teamSize === "other" && !(a.teamSizeOther ?? "").trim()) return false;
      return true;
    case "lead":
      return true; // optional
  }
}

/* ────────────────────── Step renderer ────────────────────── */

function StepRenderer({
  step,
  answers,
  onAnswer,
}: {
  step: StepId;
  answers: Partial<SurveyAnswers>;
  onAnswer: (key: keyof SurveyAnswers, value: SurveyAnswers[keyof SurveyAnswers]) => void;
}) {
  switch (step) {
    case "maturity":
      return (
        <SingleSelect
          label="Where is your SOC today?"
          value={answers.maturity}
          options={[
            { value: "none", label: "We don't have a SOC yet" },
            { value: "new", label: "New SOC, still finding our feet" },
            { value: "operating", label: "Operating SOC, looking to level up" },
            { value: "mature", label: "Mature SOC, moving to detection-engineering" },
          ]}
          onChange={(v) => onAnswer("maturity", v as Maturity)}
        />
      );
    case "roles":
      return (
        <MultiSelect
          label="What roles is this track for?"
          help="Pick all that apply. Use Other to type in a role we missed."
          values={answers.roles ?? []}
          options={[
            { value: "l1", label: "L1 triage" },
            { value: "l2", label: "L2 detection" },
            { value: "l3", label: "L3 hunter" },
            { value: "ir", label: "IR responder" },
            { value: "manager", label: "SOC manager" },
            { value: "detection-eng", label: "Detection engineer" },
            { value: "cloud-soc", label: "Cloud SOC" },
          ]}
          onChange={(vs) => onAnswer("roles", vs as Role[])}
          otherEnabled
          otherText={answers.rolesOther ?? ""}
          onOtherChange={(s) => onAnswer("rolesOther", s)}
          otherPlaceholder="e.g., MDR liaison, security data engineer"
        />
      );
    case "stack":
      return (
        <SingleSelect
          label="What's your primary SIEM / detection stack?"
          value={answers.stack}
          options={[
            { value: "splunk", label: "Splunk" },
            { value: "sentinel", label: "Microsoft Sentinel" },
            { value: "chronicle", label: "Google Chronicle" },
            { value: "qradar", label: "IBM QRadar" },
            { value: "elk", label: "Elastic Stack" },
          ]}
          onChange={(v) => onAnswer("stack", v as Stack)}
          otherEnabled
          otherValue="other"
          otherText={answers.stackOther ?? ""}
          onOtherChange={(s) => onAnswer("stackOther", s)}
          otherPlaceholder="e.g., Sumo Logic, Devo, Exabeam"
        />
      );
    case "sector":
      return (
        <SingleSelect
          label="What sector are you in?"
          value={answers.sector}
          options={[
            { value: "bfsi", label: "Banking & financial services" },
            { value: "healthcare", label: "Healthcare & pharma" },
            { value: "mfg", label: "Manufacturing" },
            { value: "saas", label: "SaaS / tech" },
            { value: "gov", label: "Government" },
            { value: "energy", label: "Energy & utilities" },
            { value: "retail", label: "Retail & e-commerce" },
            { value: "telecom", label: "Telecom" },
          ]}
          onChange={(v) => onAnswer("sector", v as Sector)}
          otherEnabled
          otherValue="other"
          otherText={answers.sectorOther ?? ""}
          onOtherChange={(s) => onAnswer("sectorOther", s)}
          otherPlaceholder="e.g., logistics, hospitality, education"
        />
      );
    case "gaps":
      return (
        <MultiSelect
          label="What's the biggest gap on your team right now?"
          help="Pick all that apply, or skip if you're not sure. Use Other to describe a gap we missed."
          values={answers.gaps ?? []}
          options={[
            { value: "tooling", label: "Hands-on tooling fluency" },
            { value: "hunting", label: "Threat hunting maturity" },
            { value: "ir-coord", label: "IR coordination" },
            { value: "leadership-reporting", label: "Reporting to leadership" },
            { value: "comms", label: "Cross-team comms" },
            { value: "docs", label: "Documentation discipline" },
            { value: "burnout", label: "Burnout & retention" },
          ]}
          onChange={(vs) => onAnswer("gaps", vs as Gap[])}
          otherEnabled
          otherText={answers.gapsOther ?? ""}
          onOtherChange={(s) => onAnswer("gapsOther", s)}
          otherPlaceholder="Tell us in your own words"
        />
      );
    case "duration":
      return (
        <SingleSelect
          label="How long do you have for the programme?"
          value={answers.duration}
          options={[
            { value: 4, label: "4 weeks" },
            { value: 8, label: "8 weeks" },
            { value: 12, label: "12 weeks" },
            { value: 16, label: "16 weeks" },
            { value: 26, label: "26 weeks" },
            { value: null, label: "Flexible" },
          ]}
          onChange={(v) => onAnswer("duration", v as Duration)}
        />
      );
    case "delivery":
      return (
        <SingleSelect
          label="Delivery preference?"
          value={answers.delivery}
          options={[
            { value: "vilt", label: "Live virtual instructor-led" },
            { value: "on-site", label: "On-site at our facility" },
            { value: "blended", label: "Blended: live + labs" },
          ]}
          onChange={(v) => onAnswer("delivery", v as Delivery)}
          otherEnabled
          otherValue="other"
          otherText={answers.deliveryOther ?? ""}
          onOtherChange={(s) => onAnswer("deliveryOther", s)}
          otherPlaceholder="e.g., async-first, train-the-trainer"
        />
      );
    case "teamSize":
      return (
        <SingleSelect
          label="How big is your team?"
          value={answers.teamSize}
          options={[
            { value: "1-5", label: "1–5 people" },
            { value: "6-15", label: "6–15 people" },
            { value: "16-50", label: "16–50 people" },
            { value: "50+", label: "More than 50" },
          ]}
          onChange={(v) => onAnswer("teamSize", v as TeamSize)}
          otherEnabled
          otherValue="other"
          otherText={answers.teamSizeOther ?? ""}
          onOtherChange={(s) => onAnswer("teamSizeOther", s)}
          otherPlaceholder="e.g., 5 in-house + 30 vendor"
        />
      );
    case "lead":
      return (
        <LeadStep
          name={answers.leadName ?? ""}
          email={answers.leadEmail ?? ""}
          company={answers.leadCompany ?? ""}
          onChange={(field, value) => {
            const key =
              field === "name"
                ? "leadName"
                : field === "email"
                  ? "leadEmail"
                  : "leadCompany";
            onAnswer(key as keyof SurveyAnswers, value as SurveyAnswers[keyof SurveyAnswers]);
          }}
        />
      );
  }
}

/* ────────────────────── Step UIs ────────────────────── */

function SingleSelect<T extends string | number | null>({
  label,
  value,
  options,
  onChange,
  otherEnabled,
  otherValue,
  otherText,
  onOtherChange,
  otherPlaceholder,
}: {
  label: string;
  value: T | undefined;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  otherEnabled?: boolean;
  otherValue?: T; // value used when "Other" is picked (e.g., "other")
  otherText?: string;
  onOtherChange?: (s: string) => void;
  otherPlaceholder?: string;
}) {
  const showOtherInput = otherEnabled && value === otherValue;
  return (
    <fieldset className="flex flex-col gap-3">
      <legend
        className="text-[18px] sm:text-[20px]"
        style={{ color: NAVY, fontFamily: FONT_REGULAR }}
      >
        {label}
      </legend>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const selected = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              onClick={() => onChange(o.value)}
              className="text-left rounded-lg border px-4 py-3 text-[14px] transition-colors"
              style={{
                borderColor: selected ? ACCENT : BORDER,
                backgroundColor: selected ? "rgba(99,102,241,0.08)" : "white",
                color: selected ? NAVY : BODY,
                fontFamily: FONT_REGULAR,
              }}
            >
              {o.label}
            </button>
          );
        })}
        {otherEnabled && otherValue !== undefined && (
          <button
            key="__other__"
            type="button"
            onClick={() => onChange(otherValue)}
            className="text-left rounded-lg border px-4 py-3 text-[14px] transition-colors"
            style={{
              borderColor: showOtherInput ? ACCENT : BORDER,
              backgroundColor: showOtherInput ? "rgba(99,102,241,0.08)" : "white",
              color: showOtherInput ? NAVY : BODY,
              fontFamily: FONT_REGULAR,
            }}
          >
            Other (specify)
          </button>
        )}
      </div>
      {showOtherInput && (
        <input
          type="text"
          autoFocus
          value={otherText ?? ""}
          onChange={(e) => onOtherChange?.(e.target.value)}
          placeholder={otherPlaceholder ?? "Type your answer"}
          className="rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
          style={{ borderColor: BORDER, color: BODY, fontFamily: FONT_REGULAR }}
        />
      )}
    </fieldset>
  );
}

function MultiSelect<T extends string>({
  label,
  help,
  values,
  options,
  onChange,
  otherEnabled,
  otherText,
  onOtherChange,
  otherPlaceholder,
}: {
  label: string;
  help?: string;
  values: T[];
  options: { value: T; label: string }[];
  onChange: (vs: T[]) => void;
  otherEnabled?: boolean;
  otherText?: string;
  onOtherChange?: (s: string) => void;
  otherPlaceholder?: string;
}) {
  const OTHER = "other" as T;
  const toggle = (v: T) => {
    if (values.includes(v)) onChange(values.filter((x) => x !== v));
    else onChange([...values, v]);
  };
  const otherSelected = otherEnabled && values.includes(OTHER);
  return (
    <fieldset className="flex flex-col gap-3">
      <legend
        className="text-[18px] sm:text-[20px]"
        style={{ color: NAVY, fontFamily: FONT_REGULAR }}
      >
        {label}
      </legend>
      {help && (
        <p
          className="-mt-1 text-[13px]"
          style={{ color: MUTED, fontFamily: FONT_LIGHT }}
        >
          {help}
        </p>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const selected = values.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => toggle(o.value)}
              className="flex items-center gap-3 text-left rounded-lg border px-4 py-3 text-[14px] transition-colors"
              style={{
                borderColor: selected ? ACCENT : BORDER,
                backgroundColor: selected ? "rgba(99,102,241,0.08)" : "white",
                color: selected ? NAVY : BODY,
                fontFamily: FONT_REGULAR,
              }}
            >
              <span
                aria-hidden
                className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border"
                style={{
                  borderColor: selected ? ACCENT : BORDER,
                  backgroundColor: selected ? ACCENT : "transparent",
                  color: "white",
                  fontFamily: FONT_BOLD,
                  fontSize: 11,
                  lineHeight: 1,
                }}
              >
                {selected ? "✓" : ""}
              </span>
              {o.label}
            </button>
          );
        })}
        {otherEnabled && (
          <button
            key="__other__"
            type="button"
            onClick={() => toggle(OTHER)}
            className="flex items-center gap-3 text-left rounded-lg border px-4 py-3 text-[14px] transition-colors"
            style={{
              borderColor: otherSelected ? ACCENT : BORDER,
              backgroundColor: otherSelected ? "rgba(99,102,241,0.08)" : "white",
              color: otherSelected ? NAVY : BODY,
              fontFamily: FONT_REGULAR,
            }}
          >
            <span
              aria-hidden
              className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border"
              style={{
                borderColor: otherSelected ? ACCENT : BORDER,
                backgroundColor: otherSelected ? ACCENT : "transparent",
                color: "white",
                fontFamily: FONT_BOLD,
                fontSize: 11,
                lineHeight: 1,
              }}
            >
              {otherSelected ? "✓" : ""}
            </span>
            Other (specify)
          </button>
        )}
      </div>
      {otherSelected && (
        <input
          type="text"
          autoFocus
          value={otherText ?? ""}
          onChange={(e) => onOtherChange?.(e.target.value)}
          placeholder={otherPlaceholder ?? "Type your answer"}
          className="rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
          style={{ borderColor: BORDER, color: BODY, fontFamily: FONT_REGULAR }}
        />
      )}
    </fieldset>
  );
}

function LeadStep({
  name,
  email,
  company,
  onChange,
}: {
  name: string;
  email: string;
  company: string;
  onChange: (field: "name" | "email" | "company", value: string) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend
        className="text-[18px] sm:text-[20px]"
        style={{ color: NAVY, fontFamily: FONT_REGULAR }}
      >
        Optional: who&apos;s this for?
      </legend>
      <p className="text-[13px]" style={{ color: MUTED, fontFamily: FONT_LIGHT }}>
        Fill these in if you&apos;d like the track ready to send to a colleague.
        You can skip this — the track is fully visible either way.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => onChange("name", e.target.value)}
          className="rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2"
          style={{ borderColor: BORDER, color: BODY }}
        />
        <input
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => onChange("email", e.target.value)}
          className="rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2"
          style={{ borderColor: BORDER, color: BODY }}
        />
        <input
          type="text"
          placeholder="Company name"
          value={company}
          onChange={(e) => onChange("company", e.target.value)}
          className="sm:col-span-2 rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2"
          style={{ borderColor: BORDER, color: BODY }}
        />
      </div>
    </fieldset>
  );
}

/* ────────────────────── Generating + Result + Error ────────────────────── */

function GeneratingCard() {
  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <div
        aria-hidden
        className="h-10 w-10 animate-spin rounded-full border-2 border-t-transparent"
        style={{ borderColor: ACCENT, borderTopColor: "transparent" }}
      />
      <p style={{ color: BODY, fontFamily: FONT_LIGHT }}>
        Composing your custom SOC track…
      </p>
    </div>
  );
}

function ErrorCard({ msg, onRetry }: { msg: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <p style={{ color: BODY, fontFamily: FONT_LIGHT }}>
        We hit a snag generating the track: <em>{msg}</em>
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-[13px] uppercase tracking-[0.12em] transition-colors hover:bg-gray-50"
        style={{ borderColor: BORDER, color: NAVY, fontFamily: FONT_MEDIUM }}
      >
        Try again
      </button>
    </div>
  );
}

function ResultCard({
  track,
  answers,
  onRetake,
}: {
  track: GeneratedTrack;
  answers: SurveyAnswers;
  onRetake: () => void;
}) {
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
    // Dispatch the prefill event so the contact form can pick up the payload
    window.dispatchEvent(
      new CustomEvent(TRACK_PREFILL_EVENT, {
        detail: { surveyAnswers: answers, generatedTrack: track },
      }),
    );
    // Anchor scroll to the contact form
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = useMemo(
    () => [
      { label: "Weeks", value: String(track.totals.weeks) },
      { label: "Modules", value: String(track.totals.moduleCount) },
      { label: "Hours", value: String(track.totals.hours) },
      { label: "Delivery", value: shortDelivery(answers.delivery) },
    ],
    [track.totals, answers.delivery],
  );

  return (
    <div className="flex flex-col gap-7">
      <div>
        <p
          className="text-[12px] uppercase tracking-[0.18em]"
          style={{ color: ACCENT, fontFamily: FONT_BOLD, fontWeight: 700 }}
        >
          Your custom SOC analyst track
        </p>
        <h3
          className="mt-2 text-[24px] leading-[1.15] sm:text-[28px] lg:text-[32px]"
          style={{ color: NAVY, fontFamily: FONT_LIGHT }}
        >
          {track.headline}
        </h3>
        <p
          className="mt-3 text-[15px] leading-[1.6]"
          style={{ color: BODY, fontFamily: FONT_LIGHT }}
        >
          {track.summary}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}` }}>
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col px-5 py-4"
            style={{ borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
          >
            <p
              className="leading-none"
              style={{
                color: NAVY,
                fontFamily: FONT_BOLD,
                fontWeight: 700,
                fontSize: 26,
                margin: 0,
              }}
            >
              {s.value}
            </p>
            <p
              className="mt-2"
              style={{
                color: MUTED,
                fontFamily: FONT_MEDIUM,
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {track.stages.map((stage) => (
          <div key={stage.label}>
            <p
              className="text-[14px] uppercase tracking-[0.12em]"
              style={{ color: NAVY, fontFamily: FONT_BOLD, fontWeight: 700 }}
            >
              {stage.label}
              <span className="ml-2 normal-case tracking-normal" style={{ color: MUTED, fontWeight: 400 }}>
                · {stage.weeks} weeks
              </span>
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {stage.modules.map((m) => (
                <li
                  key={m.id}
                  className="rounded-lg border p-4"
                  style={{ borderColor: BORDER, backgroundColor: "white" }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p style={{ color: NAVY, fontFamily: FONT_REGULAR, fontSize: 16, margin: 0 }}>
                      {m.title}
                    </p>
                    <p
                      className="rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-[0.12em]"
                      style={{
                        color: kindColor(m.kind),
                        backgroundColor: kindBg(m.kind),
                        fontFamily: FONT_MEDIUM,
                      }}
                    >
                      {m.kind} · {m.hours}h
                    </p>
                  </div>
                  <p
                    className="mt-2 text-[13.5px] leading-[1.55]"
                    style={{ color: BODY, fontFamily: FONT_LIGHT }}
                  >
                    {m.rationale}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {track.caveats.length > 0 && (
        <div
          className="rounded-lg border-l-4 px-4 py-3"
          style={{ borderColor: LIME, backgroundColor: "#FAFAF6" }}
        >
          {track.caveats.map((c, i) => (
            <p key={i} className="text-[13.5px]" style={{ color: BODY, fontFamily: FONT_LIGHT, margin: i ? "8px 0 0" : 0 }}>
              {c}
            </p>
          ))}
        </div>
      )}

      {/* Gate strip */}
      <div
        className="rounded-xl border-l-4 p-5"
        style={{ borderColor: ACCENT, backgroundColor: "#F5F6FE" }}
      >
        <p
          className="text-[14px] leading-[1.55]"
          style={{ color: BODY, fontFamily: FONT_LIGHT, margin: 0 }}
        >
          This is a generated preview, reviewed and refined by a curriculum architect before scope is confirmed.
        </p>
        <button
          type="button"
          onClick={handleRequest}
          className="mt-4 inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: NAVY, fontFamily: FONT_BOLD, fontWeight: 600 }}
        >
          {requested ? "Track sent to form below ↓" : "Request this custom track from Edstellar"}
        </button>
        <p
          className="mt-3 text-[12px]"
          style={{ color: MUTED, fontFamily: FONT_LIGHT, margin: "12px 0 0" }}
        >
          We&apos;ll reply within one business day with the formal programme document, costing, and a kickoff date.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onRetake}
          className="text-[13px] uppercase tracking-[0.12em] hover:underline"
          style={{ color: ACCENT, fontFamily: FONT_MEDIUM }}
        >
          ← Tweak my answers
        </button>
        <p className="text-[12px]" style={{ color: MUTED, fontFamily: FONT_LIGHT }}>
          Track ID: <code style={{ fontFamily: "monospace" }}>{track.trackId.slice(0, 8)}</code>
          {track.servedFromFallback && " · standard fallback"}
        </p>
      </div>
    </div>
  );
}

function kindColor(k: GeneratedTrack["stages"][number]["modules"][number]["kind"]): string {
  switch (k) {
    case "core":
      return "#1B1D52";
    case "adjacent":
      return "#0E7490";
    case "soft":
      return "#9333EA";
  }
}
function kindBg(k: GeneratedTrack["stages"][number]["modules"][number]["kind"]): string {
  switch (k) {
    case "core":
      return "#EEF2FF";
    case "adjacent":
      return "#ECFEFF";
    case "soft":
      return "#FAF5FF";
  }
}

function shortDelivery(d: SurveyAnswers["delivery"]): string {
  switch (d) {
    case "vilt":
      return "Virtual ILT";
    case "on-site":
      return "On-site";
    case "blended":
      return "Blended";
    case "other":
      return "Custom";
  }
}

/* Suppress unused-import warning */
export const __useEffect_check = useEffect;
