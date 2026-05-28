"use client";

import { TRACK_OPEN_EVENT } from "./CustomTrackBuilder";

const NAVY = "#1B1D52";
const LIME = "#C5E826";

/**
 * Button that opens the custom-track modal. Renders a small pulsing accent dot
 * + a soft glow ring so the user notices it sits next to the standard
 * "Download full curriculum PDF" CTA.
 */
export function CustomTrackTriggerButton({
  variant = "primary",
  label,
  className,
}: {
  variant?: "primary" | "outline";
  label?: string;
  className?: string;
}) {
  const text = label ?? "Build a custom track";

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent(TRACK_OPEN_EVENT));
  };

  if (variant === "outline") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`group relative inline-flex items-center gap-3 rounded-full border-2 px-5 py-2.5 text-[12.5px] uppercase tracking-[0.1em] transition-colors hover:bg-[#F7F8FC] sm:text-[13.5px] ${className ?? ""}`}
        style={{
          borderColor: NAVY,
          color: NAVY,
          fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
          fontWeight: 600,
          boxShadow: `0 0 0 4px rgba(197, 232, 38, 0.18)`,
        }}
      >
        <PulseDot />
        {text}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-3 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px] ${className ?? ""}`}
      style={{
        backgroundColor: NAVY,
        fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
        fontWeight: 600,
        boxShadow: `0 0 0 4px rgba(197, 232, 38, 0.22)`,
      }}
    >
      <PulseDot />
      {text}
      <span
        className="ml-1 hidden rounded-full px-1.5 py-0.5 text-[9px] uppercase tracking-[0.18em] sm:inline-block"
        style={{
          backgroundColor: LIME,
          color: NAVY,
          fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
          fontWeight: 700,
        }}
      >
        New
      </span>
    </button>
  );
}

function PulseDot() {
  return (
    <span aria-hidden className="relative inline-flex h-3 w-3 shrink-0">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full"
        style={{ backgroundColor: LIME, opacity: 0.7 }}
      />
      <span
        className="relative inline-flex h-3 w-3 rounded-full"
        style={{ backgroundColor: LIME }}
      />
    </span>
  );
}
