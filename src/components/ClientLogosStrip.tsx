import Image from "next/image";

type ClientLogo = {
  name: string;
  src: string;
  alt: string;
};

const LOGOS: ClientLogo[] = [
  { name: "Microsoft", src: "/images/clients/microsoft.webp", alt: "Microsoft" },
  { name: "Amazon", src: "/images/clients/amazon.webp", alt: "Amazon" },
  { name: "Intel", src: "/images/clients/intel.webp", alt: "Intel" },
  { name: "Adobe", src: "/images/clients/adobe.webp", alt: "Adobe" },
  { name: "Tata Chemicals", src: "/images/clients/tata-chemicals.webp", alt: "Tata Chemicals" },
  { name: "Johnson & Johnson", src: "/images/clients/johnson-and-johnson.webp", alt: "Johnson & Johnson" },
  { name: "Godrej", src: "/images/clients/godrej.webp", alt: "Godrej" },
  { name: "Visa", src: "/images/clients/visa.webp", alt: "Visa" },
  { name: "ABB", src: "/images/clients/abb.webp", alt: "ABB" },
  { name: "Emerson", src: "/images/clients/emerson.webp", alt: "Emerson" },
  { name: "Aditya Birla Group", src: "/images/clients/aditya-birla.webp", alt: "Aditya Birla Group" },
  { name: "Autodesk", src: "/images/clients/autodesk.webp", alt: "Autodesk" },
  { name: "Cummins", src: "/images/clients/cummins.png", alt: "Cummins" },
  { name: "Kellogg's", src: "/images/clients/kelloggs.webp", alt: "Kellogg's" },
  { name: "NIIT", src: "/images/clients/niit.webp", alt: "NIIT" },
  { name: "TVS", src: "/images/clients/tvs.webp", alt: "TVS" },
  { name: "Uber", src: "/images/clients/uber.svg", alt: "Uber" },
  { name: "Boston Consulting Group", src: "/images/clients/boston-consulting.webp", alt: "Boston Consulting Group" },
  { name: "KPMG", src: "/images/clients/kpmg.webp", alt: "KPMG" },
  { name: "Sandvik", src: "/images/clients/sandvik.webp", alt: "Sandvik" },
  { name: "Taylor & Francis", src: "/images/clients/taylor-francis.webp", alt: "Taylor & Francis" },
  { name: "Greystar", src: "/images/clients/greystar.webp", alt: "Greystar" },
  { name: "Regeneron", src: "/images/clients/regeneron.webp", alt: "Regeneron" },
  { name: "Dayforce", src: "/images/clients/dayforce.webp", alt: "Dayforce" },
];

const MARQUEE_CSS = `
@keyframes client-marquee {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}
.client-marquee-track {
  animation: client-marquee 60s linear infinite;
  will-change: transform;
}
.client-marquee:hover .client-marquee-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .client-marquee-track { animation: none; }
}
`;

export function ClientLogosStrip() {
  return (
    <div className="mt-12 md:mt-16">
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />

      <p
        className="mx-auto max-w-3xl text-center text-[12px] uppercase tracking-[0.16em]"
        style={{
          color: "#6B7280",
          fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
          fontWeight: 600,
        }}
      >
        Trusted by leading enterprises worldwide
      </p>

      <div
        className="client-marquee group relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
        aria-label="Client logos"
      >
        <div className="client-marquee-track flex w-max items-center gap-12 py-4 md:gap-16">
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex h-12 w-[140px] shrink-0 items-center justify-center md:h-14 md:w-[160px]"
              aria-hidden={idx >= LOGOS.length ? "true" : undefined}
            >
              <Image
                src={logo.src}
                alt={idx >= LOGOS.length ? "" : logo.alt}
                width={160}
                height={56}
                sizes="160px"
                className="max-h-full w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
