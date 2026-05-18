import { AboutPageContent } from "@/components/marketing/AboutPageContent";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/about",
  title: "About HealthBook — mission, vision & our story",
  description:
    "Learn about HealthBook: our mission to end healthcare chaos with one calm workspace, how the HealthBook system unifies patients and clinics, and our vision for trustworthy digital healthcare.",
  keywords: [
    "HealthBook mission",
    "HealthBook company",
    "about HealthBook",
    "healthcare software mission",
    "patient-centered health platform",
    "digital healthcare vision",
    "clinical continuity software",
    "healthcare startup story",
  ],
  socialImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "About HealthBook — mission and team",
    type: "image/png",
  },
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/about",
          title: "About HealthBook",
          description:
            "Learn about HealthBook: our mission to end healthcare chaos with one calm workspace, how the HealthBook system unifies patients and clinics, and our vision for trustworthy digital healthcare.",
        })}
      />
      <AboutPageContent />
    </>
  );
}
