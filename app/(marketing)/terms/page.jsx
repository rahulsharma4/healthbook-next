import { MarketingArticle } from "@/components/marketing/MarketingArticle";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/terms",
  title: "Terms of service",
  description:
    "Terms governing use of the HealthBook marketing site and applications — replace with jurisdiction-specific counsel-reviewed terms before launch.",
  keywords: ["terms of service", "acceptable use", "legal", "HealthBook agreement"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/terms",
          title: "HealthBook Terms of Service",
          description:
            "Terms governing use of the HealthBook marketing site and applications — replace with jurisdiction-specific counsel-reviewed terms before launch.",
        })}
      />
      <MarketingArticle
        kicker="Legal"
        title="Terms of service"
        subtitle="Placeholder terms for the marketing site and apps — swap for jurisdiction-appropriate agreements before inviting real users."
      >
        <p>
          These placeholder terms describe the agreement between you and HealthBook for using our marketing site and
          applications. Replace with jurisdiction-appropriate legal terms before production launch.
        </p>
        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the service, attempt unauthorized access, or use it in any way that violates applicable law.
        </p>
        <h2>Accounts</h2>
        <p>You are responsible for safeguarding credentials and for activity that occurs under your account.</p>
        <h2>Disclaimer</h2>
        <p>
          HealthBook is provided &quot;as is&quot; to the extent permitted by law. Nothing on this site constitutes medical
          advice.
        </p>
        <h2>Changes</h2>
        <p>We may update these terms from time to time; material changes will be communicated in a reasonable manner.</p>
      </MarketingArticle>
    </>
  );
}
