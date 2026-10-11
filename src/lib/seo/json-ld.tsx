interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
export const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://markets-ye.vercel.app/#organization",
      name: "أسعار اليمن",
      alternateName: [
        "أسعار اليمن اليوم",
        "أسعار المنتجات في اليمن",
        "أسعار السلع في اليمن",
        "دليل أسعار اليمن",
        "أسعار السوق اليمني",
        "Markets YE",
      ],
      url: "https://markets-ye.vercel.app/",
      description:
        "منصة لمتابعة أسعار المنتجات والسلع في اليمن ومقارنة الأسعار حسب المدينة والفئة.",
      logo: {
        "@type": "ImageObject",
        "@id": "https://markets-ye.vercel.app/#logo",
        url: "https://markets-ye.vercel.app/favicons/web-app-manifest-512x512.png",
        contentUrl:
          "https://markets-ye.vercel.app/favicons/web-app-manifest-512x512.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://markets-ye.vercel.app/#website",
      url: "https://markets-ye.vercel.app/",
      name: "أسعار اليمن",
      alternateName: [
        "أسعار اليمن اليوم",
        "أسعار المنتجات في اليمن",
        "أسعار السلع في اليمن",
        "دليل أسعار اليمن",
        "أسعار السوق اليمني",
      ],
      description:
        "تعرف على أسعار المنتجات والسلع في اليمن اليوم، وقارن الأسعار حسب المدينة والفئة، وابحث عن سعر أي منتج في صنعاء أو تعز أو عدن من مكان واحد.",
      inLanguage: "ar",
      publisher: {
        "@id": "https://markets-ye.vercel.app/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://markets-ye.vercel.app/prices?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://markets-ye.vercel.app/#webpage",
      url: "https://markets-ye.vercel.app/",
      name: "أسعار اليمن اليوم للمنتجات والسلع",
      description:
        "تعرف على أسعار المنتجات والسلع في اليمن اليوم، وقارن الأسعار حسب المدينة والفئة، وابحث عن سعر أي منتج في صنعاء أو تعز أو عدن من مكان واحد.",
      isPartOf: {
        "@id": "https://markets-ye.vercel.app/#website",
      },
      about: {
        "@id": "https://markets-ye.vercel.app/#organization",
      },
      breadcrumb: {
        "@id": "https://markets-ye.vercel.app/#breadcrumb",
      },
      inLanguage: "ar",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://markets-ye.vercel.app/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://markets-ye.vercel.app/",
        },
      ],
    },
  ],
};
