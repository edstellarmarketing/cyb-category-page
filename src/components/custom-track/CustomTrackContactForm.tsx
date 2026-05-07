"use client";

import { useEffect, useState } from "react";
import type { GeneratedTrack, SurveyAnswers } from "@/lib/track-generator/types";
import { TRACK_PREFILL_EVENT } from "./CustomTrackBuilder";

const NAVY = "#1B1D52";
const ACCENT = "#6366F1";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";
const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";
const FONT_MEDIUM = "'Riona Sans Medium', Helvetica, Arial, sans-serif";
const FONT_BOLD = "'Riona Sans Bold', Helvetica, Arial, sans-serif";

type Prefill = {
  surveyAnswers: SurveyAnswers;
  generatedTrack: GeneratedTrack;
};

export function CustomTrackContactForm() {
  const [prefill, setPrefill] = useState<Prefill | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Form state for visible fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("1 to 10 analysts");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Prefill>).detail;
      if (!detail) return;
      setPrefill(detail);
      // Pre-fill visible fields from survey lead step + answers
      if (detail.surveyAnswers.leadName) setName(detail.surveyAnswers.leadName);
      if (detail.surveyAnswers.leadEmail) setEmail(detail.surveyAnswers.leadEmail);
      if (detail.surveyAnswers.leadCompany) setCompany(detail.surveyAnswers.leadCompany);
      if (detail.surveyAnswers.teamSize) {
        const map: Record<string, string> = {
          "1-5": "1 to 10 analysts",
          "6-15": "11 to 50 analysts",
          "16-50": "11 to 50 analysts",
          "50+": "50+ analysts",
        };
        setTeamSize(map[detail.surveyAnswers.teamSize] ?? teamSize);
      }
      // Default message previewing the request
      setMessage(
        `I'd like to request the custom SOC analyst track generated on this page (track ID ${detail.generatedTrack.trackId.slice(0, 8)}). Please send the formal programme document and a costing.`,
      );
    };
    window.addEventListener(TRACK_PREFILL_EVENT, handler);
    return () => window.removeEventListener(TRACK_PREFILL_EVENT, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wiring yet — this is the demo path. In production, POST to the
    // contact endpoint with the hidden survey + track fields included.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20"
      style={{ backgroundColor: "#F7F8FC" }}
    >
      <div className="eds-page-center">
        <div
          className="mx-auto max-w-4xl rounded-2xl border bg-white p-8 shadow-sm sm:p-10"
          style={{ borderColor: BORDER }}
        >
          {prefill && !submitted && (
            <div
              className="mb-6 rounded-xl border-l-4 px-4 py-3"
              style={{ borderColor: LIME, backgroundColor: "#FAFAF6" }}
            >
              <p className="text-[12px] uppercase tracking-[0.14em]" style={{ color: NAVY, fontFamily: FONT_BOLD, fontWeight: 700 }}>
                Custom track attached
              </p>
              <p className="mt-1 text-[14px]" style={{ color: BODY, fontFamily: FONT_LIGHT }}>
                Track ID <code style={{ fontFamily: "monospace" }}>{prefill.generatedTrack.trackId.slice(0, 8)}</code>{" "}
                · {prefill.generatedTrack.totals.weeks} weeks · {prefill.generatedTrack.totals.moduleCount} modules ·{" "}
                {prefill.generatedTrack.totals.hours}h. Sales will receive the full track and your survey answers with this submission.
              </p>
            </div>
          )}

          <div className="text-center">
            <h2
              className="text-[28px] leading-[1.1] sm:text-[34px] lg:text-[40px]"
              style={{ color: NAVY, fontFamily: FONT_LIGHT }}
            >
              {prefill ? "Request your custom SOC track" : "Speak with an Edstellar SOC advisor"}
            </h2>
            <p
              className="mt-4 text-[15px] leading-[1.6] sm:text-[17px]"
              style={{ color: BODY, fontFamily: FONT_LIGHT }}
            >
              {prefill
                ? "We'll reply within one business day with the formal programme document, costing, and a kickoff date."
                : "Connect with our learning advisors to scope a customized instructor-led SOC analyst learning path for your team: virtual, on-site, or blended with labs."}
            </p>
          </div>

          {submitted ? (
            <ConfirmationCard prefill={prefill} />
          ) : (
            <form className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
              <Field label="Full name" required>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                  style={{ borderColor: BORDER, color: BODY }}
                />
              </Field>
              <Field label="Work email" required>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                  style={{ borderColor: BORDER, color: BODY }}
                />
              </Field>
              <Field label="Company name" required>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Corp"
                  className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                  style={{ borderColor: BORDER, color: BODY }}
                />
              </Field>
              <Field label="Team size">
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                  style={{ borderColor: BORDER, color: BODY }}
                >
                  <option>1 to 10 analysts</option>
                  <option>11 to 50 analysts</option>
                  <option>50+ analysts</option>
                </select>
              </Field>
              <Field label={prefill ? "Anything to add for the curriculum architect?" : "How can we help?"} className="md:col-span-2">
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your SOC maturity and training goals..."
                  className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                  style={{ borderColor: BORDER, color: BODY }}
                />
              </Field>

              {/* Hidden track payload — sales receives this on submit */}
              <input
                type="hidden"
                name="track_source"
                value={prefill ? "v3-custom-builder" : "v3-direct-contact"}
              />
              {prefill && (
                <>
                  <input type="hidden" name="track_id" value={prefill.generatedTrack.trackId} />
                  <input
                    type="hidden"
                    name="survey_answers"
                    value={JSON.stringify(prefill.surveyAnswers)}
                  />
                  <input
                    type="hidden"
                    name="generated_track_json"
                    value={JSON.stringify(prefill.generatedTrack)}
                  />
                </>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-lg px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                  style={{ backgroundColor: NAVY, fontFamily: FONT_BOLD, fontWeight: 600 }}
                >
                  {prefill ? "Request this custom track" : "Submit request"}
                </button>
                {prefill && (
                  <p
                    className="mt-3 text-center text-[12px]"
                    style={{ color: MUTED, fontFamily: FONT_LIGHT }}
                  >
                    The full track and your survey answers ride along with this submission so the architect can reproduce it.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className ?? ""}`}>
      <label
        className="text-[12px] uppercase tracking-[0.12em]"
        style={{ color: NAVY, fontFamily: FONT_MEDIUM, fontWeight: 600 }}
      >
        {label}
        {required && <span style={{ color: ACCENT }}> *</span>}
      </label>
      {children}
    </div>
  );
}

function ConfirmationCard({ prefill }: { prefill: Prefill | null }) {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border p-6 text-center" style={{ borderColor: BORDER, backgroundColor: "#F0FDF4" }}>
      <div
        aria-hidden
        className="inline-flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: LIME, color: NAVY, fontFamily: FONT_BOLD, fontSize: 22 }}
      >
        ✓
      </div>
      <h3 style={{ color: NAVY, fontFamily: FONT_BOLD, fontWeight: 700, fontSize: 22, margin: 0 }}>
        {prefill ? "Your custom track is on its way to a curriculum architect" : "We've got your request"}
      </h3>
      <p className="max-w-lg text-[14.5px] leading-[1.6]" style={{ color: BODY, fontFamily: FONT_LIGHT, margin: 0 }}>
        {prefill
          ? `A curriculum architect will reply within one business day with the formal programme document and a costing for track ${prefill.generatedTrack.trackId.slice(0, 8)}.`
          : "An advisor will reach out within one business day with next steps."}
      </p>
    </div>
  );
}
