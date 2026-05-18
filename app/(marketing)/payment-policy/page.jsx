import { MarketingArticle } from "@/components/marketing/MarketingArticle";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

export const metadata = buildPageMetadata({
  path: "/payment-policy",
  title: "Payment & cancellation policy",
  description:
    "Payment rules for booking, in-person clinic payments, cancellations, no-shows, and refunds in HealthBook.",
  keywords: ["payment policy", "refund policy", "cancellation policy", "no-show", "clinic payment"],
});

export default function PaymentPolicyPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/payment-policy",
          title: "HealthBook Payment & Cancellation Policy",
          description:
            "Payment rules for booking, in-person clinic payments, cancellations, no-shows, and refunds in HealthBook.",
        })}
      />
      <MarketingArticle
        kicker="Legal"
        title="Payment & cancellation policy"
        subtitle="Clear rules for booking payments, clinic payments, cancellations, and no‑shows."
      >
        <h2>How payments work</h2>
        <p>
          HealthBook may collect payments at booking time depending on the appointment type and clinic configuration. You will
          always see a full breakup before confirming payment.
        </p>
        <h3>Online appointments</h3>
        <p>Payment is collected at booking time. Your booking is confirmed after payment verification.</p>
        <h3>In‑person appointments (when prepay is off)</h3>
        <p>
          HealthBook collects a non‑refundable platform fee online. The doctor&apos;s full consultation fee is paid at the
          clinic.
        </p>

        <h2>Cancellations & refunds</h2>
        <ul>
          <li>
            <strong>Doctor cancels / rejects:</strong> 100% refund is issued automatically (if you paid online).
          </li>
          <li>
            <strong>Patient cancels (more than 6 hours before):</strong> Refund excludes the platform fee (non‑refundable).
          </li>
          <li>
            <strong>Patient cancels (6 hours to 1 hour before):</strong> Refund is 50% of the amount excluding platform fee.
          </li>
          <li>
            <strong>Patient cancels (less than 1 hour) or no‑show:</strong> No refund.
          </li>
        </ul>

        <p className="text-sm text-slate-600">
          Note: This page describes default rules. Clinics or the platform may update policies for safety, compliance, or
          operational reasons.
        </p>
      </MarketingArticle>
    </>
  );
}

