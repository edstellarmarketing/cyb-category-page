"use client";

import { useState, type ReactNode } from "react";
import { GoogleChecklistTab } from "./GoogleChecklistTab";
import { KeywordsTab } from "./KeywordsTab";
import { LaunchReadyTab } from "./LaunchReadyTab";

const NAVY = "#1B1D52";
const INDIGO = "#6366F1";
const BORDER = "#E3E6F0";
const GRAY = "#6B7280";

type Tab = "checklist" | "keywords" | "rules" | "launch";

const TAB_LABELS: Record<Tab, string> = {
  checklist: "Google Helpful Content Checklist",
  keywords: "Keywords to Target",
  rules: "Section Rules",
  launch: "Launch Ready Checklist",
};

export function CategoryPageTabs({ rulesContent }: { rulesContent: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("checklist");

  return (
    <div>
      {/* ── Tab bar ── */}
      <div
        className="sticky top-0 z-40 border-b bg-white shadow-sm"
        style={{ borderColor: BORDER }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-0">
            {(["checklist", "keywords", "rules", "launch"] as Tab[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className="relative px-6 py-4 text-[14px] transition-colors"
                  style={{
                    color: isActive ? NAVY : GRAY,
                    fontFamily: isActive
                      ? "'Riona Sans Regular', Helvetica, Arial, sans-serif"
                      : "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    borderBottom: isActive
                      ? `2px solid ${INDIGO}`
                      : "2px solid transparent",
                  }}
                >
                  {TAB_LABELS[tab]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab content ── */}
      {activeTab === "checklist" ? (
        <GoogleChecklistTab />
      ) : activeTab === "keywords" ? (
        <KeywordsTab />
      ) : activeTab === "launch" ? (
        <LaunchReadyTab />
      ) : (
        rulesContent
      )}
    </div>
  );
}
