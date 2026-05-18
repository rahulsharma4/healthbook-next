import { Inter, Sora } from "next/font/google";

import { AuthProvider } from "@/context/AuthContext";
import { getMetadataBase } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/schema";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const defaultDescription =
  "HealthBook is HIPAA-ready healthcare software: book visits, share records with consent, and message your care team from one premium workspace for patients, doctors, and clinics.";

const defaultKeywords = [
  "HealthBook",
  "healthcare software",
  "patient portal",
  "doctor appointments",
  "medical records",
  "telehealth",
  "clinical collaboration",
  "HIPAA-ready",
];

export const metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "HealthBook — The calm command center for modern care",
    template: "%s | HealthBook",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: "HealthBook" }],
  creator: "HealthBook",
  publisher: "HealthBook",
  applicationName: "HealthBook",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "HealthBook",
    title: "HealthBook — The calm command center for modern care",
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HealthBook — healthcare coordination for patients and clinics",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthBook — The calm command center for modern care",
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/icon-mark.svg", type: "image/svg+xml" }],
    shortcut: "/icon-mark.svg",
    apple: [{ url: "/icon-mark.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-full`}>
        <JsonLd data={organizationJsonLd()} />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
