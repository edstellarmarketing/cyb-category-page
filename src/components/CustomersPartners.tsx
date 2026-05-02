import Image from "next/image";
import { ClientLogosStrip } from "@/components/ClientLogosStrip";
import { ArrowRightIcon } from "@/components/icons";
import type { CustomerCard } from "@/types/content";

type TrainingLocation = { label: string; x: number; y: number };

const TRAINING_LOCATIONS: TrainingLocation[] = [
  { label: "Casablanca, Morocco", x: 47, y: 32 },
  { label: "Cairo, Egypt", x: 56, y: 32 },
  { label: "Lagos, Nigeria", x: 49.5, y: 52 },
  { label: "Nairobi, Kenya", x: 58, y: 56 },
  { label: "Johannesburg, South Africa", x: 56, y: 75 },
  { label: "Cape Town, South Africa", x: 54.5, y: 81 },
  { label: "Madrid, Spain", x: 47.5, y: 28 },
  { label: "Rome, Italy", x: 51, y: 30 },
  { label: "Amsterdam, Netherlands", x: 49.5, y: 23 },
  { label: "Zurich, Switzerland", x: 50, y: 26 },
  { label: "Warsaw, Poland", x: 53, y: 23 },
  { label: "Stockholm, Sweden", x: 52, y: 17 },
  { label: "Oslo, Norway", x: 50, y: 17 },
  { label: "Beijing, China", x: 80, y: 28 },
  { label: "Shanghai, China", x: 81, y: 33 },
  { label: "Taipei, Taiwan", x: 82, y: 38 },
  { label: "Sydney, Australia", x: 87.5, y: 80 },
  { label: "Melbourne, Australia", x: 85.5, y: 82 },
];

const TILES: CustomerCard[] = [
  {
    title: "Trusted by enterprise security teams",
    description:
      "From Fortune 500 banks to global SaaS leaders, Edstellar trains in-house cyber teams across 100+ countries.",
    image: "/images/cyber/customers-enterprise.jpg",
    imageAlt: "Enterprise customers",
    href: "#",
  },
  {
    title: "Accredited by the bodies that matter",
    description:
      "(ISC)², ISACA, EC-Council, CompTIA, PECB, AXELOS, official partner status across the credentials your team needs.",
    image: "/images/cyber/customers-partners.jpg",
    imageAlt: "Accreditation partners",
    href: "#",
  },
];

export function CustomersPartners() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Trusted by security teams worldwide
        </h2>
        <p
          className="mt-4 max-w-3xl text-[17px] leading-[1.35] sm:text-[19px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          7,500+ vetted trainers, 2,000+ skills covered, and official partner
          status with the major cybersecurity certification bodies.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TILES.map((tile) => (
            <a
              key={tile.title}
              href="#contact"
              className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-xl md:flex-row"
            >
              <div className="relative aspect-[5/3] flex-1 overflow-hidden bg-[#0c0c0c] md:aspect-auto md:min-h-[320px]">
                <Image
                  src={tile.image}
                  alt={tile.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-4 p-8 md:p-10">
                <h3
                  className="text-[24px] leading-[1.2] text-black sm:text-[28px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  {tile.title}
                </h3>
                <p
                  className="text-[16px] leading-[1.4] text-black sm:text-[18px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {tile.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-[14px] uppercase tracking-wider text-[#6366F1]">
                  Learn more <ArrowRightIcon width={18} height={18} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 md:mt-20">
          <p
            className="mx-auto max-w-3xl text-center text-[15px] leading-[1.55] sm:text-[17px]"
            style={{
              color: "#374151",
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Edstellar&apos;s trainer network now spans six continents and 100+
            countries, from enterprise hubs in North America and Western Europe
            to fast-growing markets across Africa, the Middle East, and
            Asia-Pacific. Wherever your security teams operate, we deliver
            in-region, in-language, and aligned to local compliance regimes.
          </p>

          <div className="relative mx-auto mt-8 w-full max-w-full md:max-w-[80%]">
            <Image
              src="/images/Global-Location.png"
              alt="Countries where Edstellar has delivered cybersecurity training"
              width={1175}
              height={579}
              sizes="(max-width: 767px) 100vw, 80vw"
              className="h-auto w-full"
              style={{ filter: "hue-rotate(35deg) saturate(1.25) brightness(1.05)" }}
              priority={false}
            />
            {TRAINING_LOCATIONS.map((loc) => (
              <span
                key={`${loc.label}-${loc.x}-${loc.y}`}
                title={loc.label}
                aria-label={loc.label}
                className="pointer-events-none absolute block rounded-full"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                  width: "0.7%",
                  aspectRatio: "1 / 1",
                  minWidth: "4px",
                  minHeight: "4px",
                  backgroundColor: "rgb(197, 232, 38)",
                  transform: "translate(-50%, -50%)",
                  boxShadow:
                    "0 0 0 1px rgba(197,232,38,0.3), 0 0 6px rgba(197,232,38,0.6)",
                }}
              />
            ))}
          </div>

          <ClientLogosStrip />
        </div>
      </div>
    </section>
  );
}
