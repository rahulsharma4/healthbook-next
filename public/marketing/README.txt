Marketing imagery sources
-------------------------
• Role pages (`/for-patients`, `/for-doctors`) and `/features` deep dives now load curated photos from Unsplash via `next/image` (see `lib/marketingPhotos.js`). `next.config.mjs` allows `images.unsplash.com`.

• Optional local WebP pipeline: `npm run generate:marketing-webp` (requires devDependency `sharp`) can still produce `feature-*.webp`, `doctor-dashboard-mock.webp`, `patient-timeline-mock.webp` if you switch `imageSrc` back to `/marketing/...` paths.
