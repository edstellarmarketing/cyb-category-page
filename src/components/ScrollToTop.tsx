"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#0c0c0c] text-white shadow-lg transition-colors hover:bg-[#6366F1]"
    >
      <ArrowUpIcon width={22} height={22} />
    </button>
  );
}
