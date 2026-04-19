"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/LanguageContext";

export function Footer() {
  const { social, t } = useI18n();
  const currentYear = new Date().getFullYear();
  const linkClass =
    "text-[#777] text-[10px] uppercase tracking-[0.1em] font-sans hover:text-white transition-colors duration-200";

  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <a
            href={`mailto:${social.email}`}
            className="text-[#666] text-[13px] font-sans hover:text-white transition-colors duration-200"
          >
            {social.email}
          </a>

          <div className="flex gap-6">
            <Link href={social.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t.footer.github}
            </Link>
            <Link href={social.twitter} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t.footer.twitter}
            </Link>
            <Link href={social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t.footer.linkedin}
            </Link>
            <Link href={social.cv} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t.footer.cv}
            </Link>
          </div>
        </div>

        <p className="text-[#333] text-[11px] font-sans text-center mt-8">
          {t.footer.copy(currentYear, t.brand.name)}
        </p>
      </div>
    </footer>
  );
}
