import type { SVGProps } from "react";

const baseProps = (extra?: SVGProps<SVGSVGElement>): SVGProps<SVGSVGElement> => ({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  ...extra,
});

/** Animated chevron-right CTA used in cards, banner, and learn-more buttons */
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

/** Up-arrow used in the floating scroll-to-top button */
export function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

/** Magnifying glass used in the header */
export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

/** Globe / language switcher used in the header */
export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 010 18" />
      <path d="M12 3a13.5 13.5 0 000 18" />
    </svg>
  );
}

/** Hamburger / mobile menu */
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/** MediaTek logo wordmark, orange italic-style */
export function MediaTekLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 130 16" width={130} height={16} fill="#6366F1" aria-label="MediaTek">
      <text x="0" y="13" fontFamily="'Riona Sans Bold', Helvetica, Arial, sans-serif" fontSize="14" fontStyle="italic" fontWeight="800" fill="#6366F1" letterSpacing="0.5">
        MEDIATEK
      </text>
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.56 9.88V14.9H7.9V12h2.55V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v6.98A10 10 0 0022 12z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 11.01-4.13 2.06 2.06 0 01-.01 4.13zM7.12 20.45H3.55V9h3.57z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 01-1.38-.9 3.71 3.71 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.94c-3.14 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 00-.83-1.27 3.4 3.4 0 00-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.5 4.11 15.14 4.1 12 4.1zm0 3.32a4.58 4.58 0 110 9.16 4.58 4.58 0 010-9.16zm0 7.55a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm5.83-7.74a1.07 1.07 0 11-2.14 0 1.07 1.07 0 012.14 0z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24">
      <path d="M21.6 7.2a2.4 2.4 0 00-1.7-1.7C18.4 5 12 5 12 5s-6.4 0-7.9.5A2.4 2.4 0 002.4 7.2 25 25 0 002 12c0 1.6.13 3.2.4 4.8.18.84.84 1.5 1.7 1.7 1.5.5 7.9.5 7.9.5s6.4 0 7.9-.5a2.4 2.4 0 001.7-1.7c.27-1.6.4-3.2.4-4.8 0-1.6-.13-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2L10 15.2z" />
    </svg>
  );
}

export function ThreadsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 24 24">
      <path d="M12.18 22h-.01c-3.27-.02-5.79-1.1-7.49-3.21C3.16 17 2.4 14.41 2.36 11.51v-.02c.04-2.9.8-5.49 2.32-7.28C6.38 2.1 8.9 1.02 12.17 1h.02c2.51.02 4.6.66 6.21 1.92 1.52 1.18 2.6 2.87 3.18 4.99l-1.91.54c-1-3.62-3.55-5.46-7.49-5.49-2.6.02-4.57.84-5.85 2.43-1.2 1.5-1.82 3.66-1.85 6.45.03 2.78.65 4.95 1.85 6.44 1.28 1.59 3.25 2.41 5.85 2.43 2.34-.02 3.89-.57 5.18-1.83 1.47-1.45 1.45-3.22.97-4.3-.28-.63-.79-1.16-1.48-1.55-.17 1.21-.55 2.18-1.13 2.92-.78.99-1.89 1.53-3.32 1.6-1.08.06-2.13-.2-2.94-.73-.96-.62-1.52-1.58-1.58-2.7-.06-1.09.37-2.09 1.21-2.83.8-.7 1.93-1.11 3.27-1.18.99-.05 1.91.04 2.76.27a4.06 4.06 0 00-.42-.93c-.45-.71-1.16-1.07-2.1-1.08h-.04c-.76 0-1.79.21-2.45 1.18l-1.59-1.07c.88-1.31 2.32-2.03 4.05-2.03h.05c2.88.02 4.6 1.79 4.77 4.85.1.04.2.09.29.13 1.34.63 2.32 1.59 2.84 2.78.72 1.66.79 4.36-1.4 6.55-1.67 1.66-3.71 2.41-6.61 2.43h0zm.96-9.31c-.31 0-.62.01-.94.03-1.69.09-2.74.87-2.65 2.07.09 1.27 1.51 1.86 2.86 1.79 1.25-.07 2.86-.55 3.13-3.7-.69-.15-1.45-.2-2.4-.2z" />
    </svg>
  );
}

/** Decorative MediaTek brand mark used in hero card overlays */
export function MediaTekMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps(props)} viewBox="0 0 60 60">
      <rect x="2" y="2" width="56" height="56" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
