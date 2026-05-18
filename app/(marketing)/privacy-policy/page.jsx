import { MarketingArticle } from "@/components/marketing/MarketingArticle";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/privacy-policy",
  title: "Privacy policy",
  description:
    "Read how HealthBook approaches personal and health-related data: collection, use, retention, and your rights before production legal review.",
  keywords: ["privacy", "data protection", "health information", "GDPR", "health data rights"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/privacy-policy",
          title: "HealthBook Privacy Policy",
          description:
            "Read how HealthBook approaches personal and health-related data: collection, use, retention, and your rights before production legal review.",
        })}
      />
      <MarketingArticle
        kicker="Legal"
        title="Privacy policy"
        subtitle="How we think about data in a production-grade deployment — replace with counsel-reviewed text before launch."
      >
        <p>
          This placeholder privacy policy outlines how HealthBook would collect, use, and protect information in a production
          deployment. Replace this page with counsel-reviewed legal text before inviting real users.
        </p>
        <h2>Information we may process</h2>
        <p>
          Account details you provide (such as name and email), usage and audit logs required for security, and health-related
          content entered into the product as part of normal workflows.
        </p>
        <h2>How we use it</h2>
        <p>To operate the service, authenticate users, prevent abuse, meet legal obligations, and improve reliability.</p>
        <h2>Retention</h2>
        <p>Data is retained only as long as needed for these purposes or as required by law.</p>
        <h2>Your rights</h2>
        <p>
          Depending on jurisdiction, you may have rights to access, correct, export, or delete certain data. Contact us using the
          details on the Contact page.
        </p>
      </MarketingArticle>
    </>
  );
}
