import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const SPECIALTIES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    area: "Cybersecurity",
    count: "1,200+ trainers",
    topics: ["CISSP", "CEH", "SOC", "ISO 27001", "Pen Testing", "Cloud Security"],
    color: "#6366F1",
    href: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    area: "Cloud & DevOps",
    count: "950+ trainers",
    topics: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD"],
    color: "#0369a1",
    href: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    area: "Leadership & Management",
    count: "800+ trainers",
    topics: ["Executive Coaching", "Agile", "PMP", "Change Mgmt", "Negotiation"],
    color: "#7c3aed",
    href: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    area: "Data & AI",
    count: "700+ trainers",
    topics: ["Python", "ML Ops", "Power BI", "Generative AI", "SQL", "LLMs"],
    color: "#b45309",
    href: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    area: "IT & Infrastructure",
    count: "600+ trainers",
    topics: ["ITIL", "VMware", "Networking", "Linux", "MCSA", "CompTIA A+"],
    color: "#15803d",
    href: "#",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    area: "Compliance & GRC",
    count: "450+ trainers",
    topics: ["ISO 27001", "GDPR", "SOX", "HIPAA", "NIST", "PCI-DSS"],
    color: "#be185d",
    href: "#",
  },
];

export function TrainersBySpecialty() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="eds-page-center">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#6366F1] font-[family:var(--font-medium)] text-xs tracking-widest uppercase mb-3">Browse by Specialty</p>
          <h2 className="font-[family:var(--font-light)] text-[#0c0c0c] text-3xl lg:text-4xl leading-tight mb-4">
            Find the right trainer for every skill domain
          </h2>
          <p className="text-[#666] text-base">
            Our trainer network covers 60+ skill domains. Every specialist is matched to your team's exact requirements before deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALTIES.map((s) => (
            <Link key={s.area} href={s.href}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-[#e4e5e6] hover:border-transparent hover:shadow-xl hover:shadow-black/6 transition-all duration-300 overflow-hidden bg-white">
              {/* Hover bg accent */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${s.color}08 0%, transparent 60%)` }} />

              {/* Icon */}
              <div className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: `${s.color}12`, color: s.color }}>
                {s.icon}
              </div>

              {/* Text */}
              <div className="relative">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-[family:var(--font-medium)] text-[#0c0c0c] text-base">{s.area}</h3>
                  <ArrowRightIcon className="w-4 h-4 text-[#ccc] group-hover:text-[#6366F1] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-xs font-[family:var(--font-medium)] mb-3" style={{ color: s.color }}>{s.count}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.topics.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-[#f5f5f5] text-[#555]">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
