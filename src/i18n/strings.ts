export type Lang = "en" | "ar";

export const LANGS: Lang[] = ["en", "ar"];

type UIStrings = {
  nav: {
    projects: string;
    articles: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    home: string;
  };
  projects: {
    viewAll: string;
  };
  articles: {
    sectionLabel: string;
    empty: string;
    viewAll: string;
    writingHeading: string;
    writingTagline: string;
    back: string;
    metaPageTitle: string;
    metaDescription: string;
  };
  footer: {
    github: string;
    twitter: string;
    linkedin: string;
    cv: string;
    copy: (year: number, name: string) => string;
  };
  lang: {
    switchTo: string;
    switchToShort: string;
  };
  brand: {
    name: string;
  };
};

export const strings: Record<Lang, UIStrings> = {
  en: {
    nav: {
      projects: "Projects",
      articles: "Articles",
      getInTouch: "Get in touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Bahaa Najjar — Home",
    },
    projects: {
      viewAll: "View all projects →",
    },
    articles: {
      sectionLabel: "Articles",
      empty:
        "I'm working on writing about software engineering, game development, and things I learn along the way.",
      viewAll: "View all articles →",
      writingHeading: "Writing",
      writingTagline: "Essays, notes, and things I learn along the way.",
      back: "Back to articles",
      metaPageTitle: "Articles — Bahaa Najjar",
      metaDescription:
        "Essays and notes on software engineering, game development, and things learned along the way.",
    },
    footer: {
      github: "GitHub",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      cv: "CV",
      copy: (year, name) => `© ${year} ${name}`,
    },
    lang: {
      switchTo: "العربية",
      switchToShort: "ع",
    },
    brand: {
      name: "Bahaa Najjar",
    },
  },
  ar: {
    nav: {
      projects: "المشاريع",
      articles: "المقالات",
      getInTouch: "تواصل معي",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      home: "بهاء نجار — الرئيسية",
    },
    projects: {
      viewAll: "عرض كل المشاريع ←",
    },
    articles: {
      sectionLabel: "المقالات",
      empty:
        "أعمل على الكتابة حول هندسة البرمجيات وتطوير الألعاب وما أتعلّمه في الطريق.",
      viewAll: "عرض كل المقالات ←",
      writingHeading: "الكتابة",
      writingTagline: "مقالات وملاحظات وأشياء أتعلّمها في الطريق.",
      back: "العودة إلى المقالات",
      metaPageTitle: "المقالات — بهاء نجار",
      metaDescription:
        "مقالات وملاحظات حول هندسة البرمجيات وتطوير الألعاب وما أتعلّمه في الطريق.",
    },
    footer: {
      github: "GitHub",
      twitter: "Twitter",
      linkedin: "LinkedIn",
      cv: "السيرة الذاتية",
      copy: (year, name) => `© ${year} ${name}`,
    },
    lang: {
      switchTo: "English",
      switchToShort: "EN",
    },
    brand: {
      name: "Bahaa Najjar",
    },
  },
};
