import { Faq } from "@/components/landing/Faq";
import { FeaturesPreview } from "@/components/landing/FeaturesPreview";
import { GrowthCta } from "@/components/landing/GrowthCta";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { Testimonials } from "@/components/landing/Testimonials";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { Reveal } from "@/components/motion/Reveal";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/",
  title: "The calm command center for modern care",
  description:
    "HealthBook is HIPAA-ready healthcare software for patients and clinics: book visits, share records with consent, message securely, and run on one premium workspace — fewer portals, less stress, better continuity.",
  keywords: [
    "HIPAA-ready health app",
    "patient portal software",
    "doctor scheduling",
    "EHR workspace",
    "secure healthcare messaging",
    "clinical collaboration",
    "SaaS healthcare",
  ],
  socialImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "HealthBook — healthcare coordination for patients and clinics",
    type: "image/png",
  },
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/",
          title: "HealthBook — The calm command center for modern care",
          description:
            "HealthBook is HIPAA-ready healthcare software for patients and clinics: book visits, share records with consent, message securely, and run on one premium workspace — fewer portals, less stress, better continuity.",
        })}
      />
      <Hero />
      <Reveal>
        <TrustBadges />
      </Reveal>
      <Reveal delay={0.04}>
        <ProductPreview />
      </Reveal>
      <Reveal delay={0.06}>
        <FeaturesPreview />
      </Reveal>
      <Reveal delay={0.06}>
        <HowItWorks />
      </Reveal>
      <Reveal delay={0.08}>
        <Testimonials />
      </Reveal>
      <Reveal delay={0.1}>
        <Faq />
      </Reveal>
      <GrowthCta variant="band" />
    </>
  );
}
