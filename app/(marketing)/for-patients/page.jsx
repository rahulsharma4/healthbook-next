import { ForPatientsPageContent } from "@/components/marketing/ForPatientsPageContent";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/for-patients",
  title: "For patients — health records app & patient portal",
  description:
    "HealthBook for patients: your complete health history in one place—track medical records, book appointments, share with doctors, and stay informed with notifications, access control, and prescription visibility in a friendly patient portal.",
  keywords: [
    "health records app",
    "patient portal",
    "personal health record",
    "book doctor appointment online",
    "share medical records with doctor",
    "prescription tracking app",
    "patient health timeline",
  ],
  socialImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "HealthBook — patient health records and portal",
    type: "image/png",
  },
});

export default function ForPatientsPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/for-patients",
          title: "HealthBook for Patients",
          description:
            "HealthBook for patients: your complete health history in one place—track medical records, book appointments, share with doctors, and stay informed with notifications, access control, and prescription visibility in a friendly patient portal.",
        })}
      />
      <ForPatientsPageContent />
    </>
  );
}
