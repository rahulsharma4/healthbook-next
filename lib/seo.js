import { getSiteUrl } from "@/lib/site";

const SITE_NAME = "HealthBook";

/** Baseline keywords merged into every public page. */
const CORE_KEYWORDS = [
  "HealthBook",
  "healthcare software",
  "patient portal",
  "doctor appointments",
  "medical records",
  "telehealth",
  "health IT",
];

function normalizePath(path) {
  if (!path || path === "/") return "/";
  const p = path.startsWith("/") ? path : `/${path}`;
  return p.replace(/\/+$/, "") || "/";
}

export function absoluteUrl(path) {
  const base = getSiteUrl().replace(/\/+$/, "");
  const pathNorm = normalizePath(path);
  if (pathNorm === "/") return `${base}/`;
  return `${base}${pathNorm}`;
}

export function getMetadataBase() {
  return new URL(`${getSiteUrl().replace(/\/+$/, "")}/`);
}

/**
 * @param {object} opts
 * @param {string} opts.path - URL path e.g. "/features"
 * @param {string} opts.title - Short title segment (layout template adds "| HealthBook" where applicable)
 * @param {string} opts.description
 * @param {string[]} [opts.keywords]
 * @param {import("next").Metadata["robots"]} [opts.robots]
 * @param {{ url: string, width?: number, height?: number, alt?: string, type?: string }} [opts.socialImage] - OG / Twitter card image (path or absolute URL)
 */
export function buildPageMetadata({ path, title, description, keywords = [], robots, socialImage }) {
  const pathNorm = normalizePath(path);
  const mergedKeywords = [...new Set([...CORE_KEYWORDS, ...keywords])];

  const imageUrl =
    socialImage?.url != null
      ? String(socialImage.url).startsWith("http")
        ? socialImage.url
        : absoluteUrl(socialImage.url.startsWith("/") ? socialImage.url : `/${socialImage.url}`)
      : null;

  /** @type {import("next").Metadata} */
  const meta = {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: pathNorm,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(pathNorm),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                width: socialImage?.width ?? 1200,
                height: socialImage?.height ?? 630,
                alt: socialImage?.alt ?? `${SITE_NAME} — ${title}`,
                type: socialImage?.type,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };

  if (robots !== undefined) {
    meta.robots = robots;
  }

  return meta;
}
