import { SITE_NAME, SITE_URL } from "../constants";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}
export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}

const ALTERNATE_NAMES = ["دليل اليمن", "أسعار اليمن"];
const SITE_DESCRIPTION =
  "تعرف على أسعار المنتجات والسلع في اليمن اليوم، وقارن الأسعار حسب المدينة والفئة، وابحث عن سعر أي منتج في صنعاء أو تعز أو عدن من مكان واحد.";

export const JsonLdWebsite = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAMES,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/favicons/web-app-manifest-512x512.png`,
        contentUrl: `${SITE_URL}/favicons/web-app-manifest-512x512.png`,
        caption: SITE_NAME,
        width: 512,
        height: 512,
      },
      image: {
        "@id": `${SITE_URL}/#logo`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAMES,
      description: SITE_DESCRIPTION,
      inLanguage: "ar",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/prices?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: `${SITE_NAME} | أسعار المنتجات والسلع في اليمن اليوم`,
      description: SITE_DESCRIPTION,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      primaryImageOfPage: {
        "@id": `${SITE_URL}/#logo`,
      },
      breadcrumb: {
        "@id": `${SITE_URL}/#breadcrumb`,
      },
      inLanguage: "ar",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: `${SITE_URL}/`,
        },
      ],
    },
  ],
};
