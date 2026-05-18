import { Headphones, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/Container";
import { ContactForm } from "@/components/marketing/ContactForm";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { glassPanel, transitionBase } from "@/lib/ui";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";

const SUPPORT_EMAIL = "support@healthbook.example";
const GENERAL_EMAIL = "hello@healthbook.example";

export const metadata = buildPageMetadata({
  path: "/contact",
  title: "Contact HealthBook — sales, support & business inquiries",
  description:
    "Contact HealthBook for healthcare software sales, product support, partnerships, and security reviews. Reach our business team by email or send a secure message from this page.",
  keywords: [
    "contact HealthBook",
    "HealthBook business inquiry",
    "healthcare software support",
    "healthcare SaaS contact",
    "local healthcare technology company",
    "clinic software sales contact",
    "patient portal vendor contact",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/contact",
          title: "Contact HealthBook",
          description:
            "Contact HealthBook for healthcare software sales, product support, partnerships, and security reviews. Reach our business team by email or send a secure message from this page.",
        })}
      />
      <MarketingPageHeader
        kicker="Contact"
        title="Let’s design your next chapter of care"
        description="Ask about deployments, integrations, security reviews, or how HealthBook’s patient portal, clinician workspace, and admin console work together—messages land in our secured inquiry queue for thoughtful follow-up."
      />
      <section className="relative pb-24 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[min(100%,56rem)] -translate-x-1/2 translate-y-1/3 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/8 to-cyan-500/10 blur-3xl dark:from-indigo-500/14 dark:via-fuchsia-500/10 dark:to-cyan-500/12"
        />
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="flex flex-col gap-6 lg:col-span-5">
              <div className={glassPanel + " p-8 " + transitionBase + " hover:shadow-[var(--hb-shadow-hover)]"}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">Email</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      General business, partnerships, and press.
                    </p>
                    <a
                      href={`mailto:${GENERAL_EMAIL}`}
                      className="mt-3 inline-block text-sm font-semibold text-indigo-600 underline-offset-2 hover:text-indigo-500 hover:underline dark:text-indigo-400"
                    >
                      {GENERAL_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className={glassPanel + " p-8 " + transitionBase + " hover:shadow-[var(--hb-shadow-hover)]"}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20">
                    <Headphones className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">Support</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      Account access, billing, and technical help for existing customers.
                    </p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="mt-3 inline-block text-sm font-semibold text-indigo-600 underline-offset-2 hover:text-indigo-500 hover:underline dark:text-indigo-400"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                      Monday–Friday, 9:00–17:00 (placeholder hours — adjust for your region).
                    </p>
                  </div>
                </div>
              </div>

              <p className="rounded-2xl border border-amber-200/70 bg-amber-50/80 px-5 py-4 text-xs leading-relaxed text-amber-950 backdrop-blur-sm dark:border-amber-500/25 dark:bg-amber-950/35 dark:text-amber-100">
                For clinical emergencies or urgent health concerns, contact your provider or local emergency services. HealthBook is
                not a substitute for medical advice.
              </p>
            </aside>
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <div
              className={
                glassPanel +
                " overflow-hidden " +
                transitionBase +
                " hover:shadow-[var(--hb-shadow-hover)]"
              }
            >
              <div className="flex items-center gap-2 border-b border-slate-200/80 px-6 py-4 dark:border-slate-700/80">
                <MapPin className="h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden />
                <h2 className="font-heading text-base font-semibold text-slate-900 dark:text-white">Location map</h2>
              </div>
              <div
                className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100/90 via-indigo-50/50 to-cyan-50/60 px-6 py-14 text-center dark:from-slate-900/80 dark:via-indigo-950/30 dark:to-slate-900/80 sm:min-h-[280px]"
                role="img"
                aria-label="Map placeholder — remote-first team, no single street address"
              >
                <div className="rounded-2xl border border-dashed border-slate-300/90 bg-white/70 px-6 py-8 shadow-inner dark:border-slate-600 dark:bg-slate-950/40">
                  <MapPin className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-500" aria-hidden />
                  <p className="mt-3 max-w-sm text-sm font-medium text-slate-700 dark:text-slate-300">Map placeholder</p>
                  <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    Remote-first team across North America and beyond. Embed Google Maps or your office address here when you have a
                    public location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
