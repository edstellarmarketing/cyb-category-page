"use client";

import { useState } from "react";

const FONT_BOLD = "'Riona Sans Bold', Helvetica, Arial, sans-serif";
const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";

export function CaseStudyDownloadButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print mt-8 inline-block w-fit cursor-pointer transition-opacity hover:opacity-90"
      style={{
        backgroundColor: "#6366F1",
        color: "#fff",
        padding: "8px 24px",
        borderRadius: 30,
        fontFamily: FONT_LIGHT,
        fontSize: 16,
        lineHeight: "22.768px",
        border: "none",
      }}
    >
      Download Case Study
    </button>
  );
}

export function CaseStudyCopyLink() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="no-print mt-8 inline-flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
      style={{
        backgroundColor: "transparent",
        color: "rgba(255,255,255,0.75)",
        padding: "8px 20px",
        borderRadius: 30,
        fontFamily: FONT_BOLD,
        fontSize: 13,
        lineHeight: "1.4",
        border: "1px solid rgba(255,255,255,0.3)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
      {copied ? "Link Copied!" : "Copy Share Link"}
    </button>
  );
}
