import { ForDoctorsPageContent } from "@/components/marketing/ForDoctorsPageContent";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/for-doctors",
  title: "For doctors — clinic management & doctor software",
  description:
    "HealthBook for doctors: manage patients, write digital prescriptions, access longitudinal history, and run clinic analytics—availability, search, and record versioning in one trusted workspace.",
  keywords: [
    "doctor software",
    "clinic management",
    "digital prescription software",
    "doctor dashboard",
    "EHR for small clinics",
    "patient scheduling for doctors",
    "medical record versioning",
    "healthcare analytics for physicians",
  ],
  socialImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "HealthBook — doctor software and clinic management",
    type: "image/png",
  },
});

export default function ForDoctorsPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/for-doctors",
          title: "HealthBook for Doctors",
          description:
            "HealthBook for doctors: manage patients, write digital prescriptions, access longitudinal history, and run clinic analytics—availability, search, and record versioning in one trusted workspace.",
        })}
      />
      <ForDoctorsPageContent />
    </>
  );
}
