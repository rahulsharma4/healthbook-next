import { absoluteUrl } from "@/lib/seo";

const ORG_NAME = "HealthBook";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon-mark.svg"),
  };
}

/**
 * Schema.org supports MedicalWebPage as a specialized WebPage.
 * @param {{ path: string, title: string, description: string }} params
 */
export function medicalWebPageJsonLd({ path, title, description }) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: ORG_NAME,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: absoluteUrl("/"),
    },
  };
}

