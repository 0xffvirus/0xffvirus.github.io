"use client";

import { useI18n } from "@/contexts/LanguageContext";

export function Marquee() {
  const { content } = useI18n();
  const items = content.marquee;

  const repeatedItems = [...items, ...items, ...items];
  const joined = repeatedItems.join(" • ");

  return (
    <section className="border-b border-[#1a1a1a] py-3 overflow-hidden">
      <div className="relative">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          <span className="text-[#333] text-xs uppercase tracking-[0.2em] font-sans px-4">
            {joined}
          </span>
          <span className="text-[#333] text-xs uppercase tracking-[0.2em] font-sans px-4">
            {joined}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
