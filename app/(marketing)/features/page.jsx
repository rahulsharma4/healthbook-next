import { FeaturesPageContent } from "@/components/marketing/FeaturesPageContent";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/features",
  title: "Features — medical records, appointments, messaging & analytics",
  description:
    "HealthBook features: digital medical records, online appointment scheduling, HIPAA-style secure messaging, role-based access, smart notifications, and healthcare analytics—in one premium SaaS workspace.",
  keywords: [
    "digital medical records software",
    "online appointment scheduling healthcare",
    "secure patient messaging platform",
    "healthcare access control RBAC",
    "clinical notification system",
    "healthcare operations analytics",
    "EHR features",
    "patient portal features",
    "HIPAA-ready healthcare SaaS",
  ],
  socialImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "HealthBook — features for digital health coordination",
    type: "image/png",
  },
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/features",
          title: "HealthBook Features",
          description:
            "HealthBook features: digital medical records, online appointment scheduling, HIPAA-style secure messaging, role-based access, smart notifications, and healthcare analytics—in one premium SaaS workspace.",
        })}
      />
      <FeaturesPageContent />
    </>
  );
}
