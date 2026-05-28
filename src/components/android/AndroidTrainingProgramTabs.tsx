"use client";

import { useState } from "react";
import { AndroidSkillsGapPanel } from "@/components/android/AndroidSkillsGapPanel";
import { AndroidGlobalTrends } from "@/components/android/AndroidGlobalTrends";
import { AndroidRiskMitigationFlow } from "@/components/android/AndroidRiskMitigationFlow";

type TabId = "skills-gap" | "risk" | "trends";

const TABS: { id: TabId; label: string }[] = [
  { id: "skills-gap", label: "The Modern-Android Skills Gap" },
  { id: "risk", label: "Mobile Release Risk and App Reliability" },
  { id: "trends", label: "Android in the Global Mobile Economy" },
];

export function AndroidTrainingProgramTabs() {
  const [active, setActive] = useState<TabId>("skills-gap");

  return (
    <>
      <div
        className="border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E3E6F0" }}
      >
        <div className="eds-page-center">
          <div
            role="tablist"
            aria-label="Corporate Android training program views"
            className="flex snap-x snap-proximity gap-x-2 overflow-x-auto scroll-pl-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-x-4"
          >
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className="relative shrink-0 snap-start whitespace-nowrap px-3 py-5 text-[12px] uppercase tracking-[0.08em] transition-colors sm:px-5 sm:py-6 sm:text-[14px]"
                  style={{
                    color: isActive ? "#1B1D52" : "#6B7280",
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {tab.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-[3px] sm:inset-x-5"
                    style={{
                      backgroundColor: isActive ? "#1B1D52" : "transparent",
                      transition: "background-color .25s ease",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        key={active}
        className="animate-[ttp-fade_350ms_ease-out]"
      >
        {active === "skills-gap" && <AndroidSkillsGapPanel />}
        {active === "risk" && <AndroidRiskMitigationFlow />}
        {active === "trends" && <AndroidGlobalTrends />}
      </div>

      <style>{`
        @keyframes ttp-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
