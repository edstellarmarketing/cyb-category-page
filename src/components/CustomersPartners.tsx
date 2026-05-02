import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import type { CustomerCard } from "@/types/content";

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
      </div>
    </section>
  );
}
