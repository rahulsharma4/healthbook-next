import { ImageResponse } from "next/og";

import { HealthBookOgImageRoot } from "@/lib/og-markup";

export const runtime = "edge";

export const alt = "HealthBook — healthcare coordination for patients and clinics";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<HealthBookOgImageRoot />, {
    ...size,
  });
}
