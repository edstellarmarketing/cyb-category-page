import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import type { NewsCard as NewsCardType } from "@/types/content";

export function NewsCard({ card }: { card: NewsCardType }) {
  return (
    <a
      href={card.href}
      className="eds-arrow-link group flex h-full flex-col overflow-hidden rounded-xl bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-[#0c0c0c]">
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6">
        <span
          className="text-[12px] uppercase tracking-wider text-[#6366F1] sm:text-[13px]"
          style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
        >
          {card.category}
        </span>
        <h3
          className="text-[20px] leading-[1.2] text-black sm:text-[22px]"
          style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
        >
          {card.title}
        </h3>
        <p
          className="text-[16px] leading-[1.35] text-black sm:text-[17px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          {card.description}
          <ArrowRightIcon className="ml-1 inline-block align-middle text-[#6366F1] eds-arrow" width={20} height={20} />
        </p>
      </div>
    </a>
  );
}
