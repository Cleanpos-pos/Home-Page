import type { Metadata } from "next";

export const SITE = "https://www.posso.co.uk";
export const PHONE = "0808 175 3956";
export const PHONE_HREF = "tel:+448081753956";

/* ------------------------------------------------------------------ */
/* Content model                                                       */
/* ------------------------------------------------------------------ */

export type Section =
  | {
      kind: "features";
      /** Small uppercase label above the heading, e.g. "6–8 WEEKS BEFORE" */
      kicker?: string;
      heading: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | {
      kind: "prose";
      kicker?: string;
      heading: string;
      paragraphs: string[];
    }
  | {
      kind: "table";
      heading: string;
      intro?: string;
      /** Rendered as a small note under the table — use for "last checked" dates */
      caption?: string;
      columns: string[];
      rows: string[][];
      /** Emphasise the first column as a row header */
      firstColIsHeader?: boolean;
    }
  | {
      kind: "callout";
      variant: "note" | "warning";
      title?: string;
      body: string;
    }
  | {
      kind: "links";
      heading: string;
      items: { label: string; href: string }[];
    };

export interface Faq {
  q: string;
  a: string;
}

export interface Guide {
  /** URL path without leading slash */
  slug: string;
  /** <title> — keep SHORT, the root layout template appends "| Posso" */
  title: string;
  metaDescription: string;
  /** Small uppercase label above the H1, rendered as the hero badge */
  eyebrow: string;
  h1: string;
  /**
   * Optional split of the H1 for the house split-gradient treatment:
   * [white-gradient lead, primary-gradient accent]. Must concatenate
   * (with a space) back to `h1`, which stays the canonical headline
   * used in the Article schema.
   */
  h1Split?: [string, string];
  /** One or two sentences under the H1 */
  standfirst: string;
  /** Three short proof points beside the CTA */
  highlights: string[];
  /** Breadcrumb label for this page */
  breadcrumb: string;
  sections: Section[];
  faqHeading?: string;
  faqs: Faq[];
  /** Optional short answer surfaced for AI extraction */
  quickAnswer?: string;
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

export function guideMetadata(guide: Guide): Metadata {
  const url = `${SITE}/${guide.slug}`;
  return {
    // Short title — the root layout appends "| Posso". Robots are inherited
    // from the root layout (do not redeclare, per docs/seo.md).
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | Posso UK`,
      description: guide.metaDescription,
      url,
      siteName: "Posso",
      type: "article",
      locale: "en_GB",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: guide.h1,
        },
      ],
    },
    // Explicit Twitter block — without it, sub-pages inherit the homepage's
    // twitter:title from the root layout (only `title` is templated).
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} | Posso UK`,
      description: guide.metaDescription,
      site: "@posso_uk",
      creator: "@posso_uk",
      images: ["/og-image.png"],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/*                                                                     */
/* FAQPage schema is NOT built here — <FAQSection> emits it            */
/* automatically (docs/seo.md §2). Emitting it again would duplicate.  */
/* ------------------------------------------------------------------ */

export function breadcrumbSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "ePOS Systems", item: `${SITE}/pos` },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.breadcrumb,
        item: `${SITE}/${guide.slug}`,
      },
    ],
  };
}

export function articleSchema(guide: Guide, isoDate: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/${guide.slug}` },
    dateModified: isoDate,
    // Reference the sitewide Organization emitted by the root layout
    // rather than duplicating it (docs/seo.md §2).
    publisher: { "@id": `${SITE}/#organization` },
  };
}
