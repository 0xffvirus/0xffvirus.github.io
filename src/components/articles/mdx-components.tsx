import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl md:text-3xl font-serif italic text-white mt-14 mb-5"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-xl md:text-2xl font-serif italic text-white mt-10 mb-4"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="font-serif-body text-[17px] md:text-lg leading-[1.75] text-[#d4d4d4] my-6" {...props} />
  ),
  a: ({ href = "#", children, ...rest }: ComponentPropsWithoutRef<"a">) => {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-4 decoration-[#444] hover:decoration-white hover:text-[#aaa] transition-colors duration-200"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-white underline underline-offset-4 decoration-[#444] hover:decoration-white hover:text-[#aaa] transition-colors duration-200"
      >
        {children}
      </Link>
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="font-serif-body text-[17px] md:text-lg leading-[1.75] text-[#d4d4d4] my-6 pl-6 list-disc marker:text-[#555] space-y-2" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="font-serif-body text-[17px] md:text-lg leading-[1.75] text-[#d4d4d4] my-6 pl-6 list-decimal marker:text-[#555] space-y-2" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="font-serif-body italic text-[#999] border-l-2 border-[#333] pl-5 my-8"
      {...props}
    />
  ),
  hr: () => <hr className="border-0 border-t border-[#1a1a1a] my-12" />,
  img: ({ src = "", alt = "" }: ComponentPropsWithoutRef<"img">) => (
    <figure className="my-10">
      <div className="border border-[#1a1a1a] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      {alt ? (
        <figcaption className="text-[#666] text-xs font-sans italic mt-3 text-center">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre dir="ltr" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const hasLang = typeof props.className === "string" && props.className.includes("language-");
    if (hasLang) {
      return <code dir="ltr" {...props} />;
    }
    return (
      <code
        dir="ltr"
        className="font-mono text-[0.9em] bg-[#1a1a1a] text-white px-1.5 py-0.5 inline-block align-baseline"
        {...props}
      />
    );
  },
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
};
