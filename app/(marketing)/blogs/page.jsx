import Link from "next/link";

import { Container } from "@/components/Container";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { fetchPublishedBlogList } from "@/lib/blogsPublic";
import { buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";
import { transitionBase } from "@/lib/ui";

export const metadata = buildPageMetadata({
  path: "/blogs",
  title: "Blog — insights on care coordination & HealthBook",
  description:
    "Read HealthBook updates on patient portals, secure messaging, appointments, and privacy-conscious healthcare software — written by our team.",
  keywords: ["HealthBook blog", "healthcare software news", "patient portal tips", "clinical workflow"],
});

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format(d);
  } catch {
    return "";
  }
}

export default async function BlogsPage({ searchParams }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp?.page) || 1);
  const q = typeof sp?.q === "string" ? sp.q : "";

  let payload = { items: [], page: 1, limit: 12, total: 0 };
  let errorMessage = "";
  try {
    payload = await fetchPublishedBlogList({ page, limit: 12, q });
  } catch (e) {
    errorMessage = e instanceof Error ? e.message : "Something went wrong.";
  }

  const { items, total, limit } = payload;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  const qs = new URLSearchParams();
  if (q.trim()) qs.set("q", q.trim());

  function hrefForPage(p) {
    const next = new URLSearchParams(qs);
    if (p > 1) next.set("page", String(p));
    const s = next.toString();
    return s ? `/blogs?${s}` : "/blogs";
  }

  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path: "/blogs",
          title: "HealthBook Blog",
          description:
            "Updates on care coordination, privacy-first healthcare software, and how teams use HealthBook.",
        })}
      />
      <MarketingPageHeader
        kicker="Blog"
        title="Ideas for calmer care coordination"
        description="Long-form updates on shipped capabilities—appointments, consent sharing, messaging, reminders, analytics, and governance—plus privacy-minded workflow guides for patients and clinics. Only published articles appear here."
      />

      <Container className="pb-20 sm:pb-24">
        <form
          method="get"
          action="/blogs"
          className="mx-auto mb-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-end"
        >
          <label className="block flex-1 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
            Search
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Title, topic, tag…"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[15px] text-slate-900 shadow-sm outline-none ring-indigo-500/0 transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>
          <button
            type="submit"
            className={
              "inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 " +
              transitionBase
            }
          >
            Search
          </button>
        </form>

        {errorMessage ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-center text-sm font-semibold text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-100">
            {errorMessage}
          </div>
        ) : null}

        {!errorMessage && items.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border-2 border-dashed border-slate-200 bg-white px-8 py-12 text-center dark:border-slate-700 dark:bg-slate-950/40">
            <p className="font-heading text-lg font-semibold text-slate-900 dark:text-white">No posts yet</p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              When we publish articles, they’ll show up here. Check back soon.
            </p>
          </div>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((post) => {
            const href = `/blogs/${encodeURIComponent(post.slug)}`;
            const dateLabel = formatDate(post.publishedAt || post.createdAt);
            return (
              <article
                key={post.slug}
                className={
                  "group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_40px_-18px_rgba(15,23,42,0.22)] dark:border-slate-800 dark:bg-slate-950/60 dark:shadow-black/40 " +
                  transitionBase +
                  " hover:-translate-y-0.5 hover:border-indigo-300/60 hover:shadow-[0_18px_50px_-18px_rgba(79,70,229,0.35)] dark:hover:border-indigo-500/40"
                }
              >
                <Link href={href} className="relative block aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                  {post.coverImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element -- admin-provided arbitrary URLs
                    <img
                      src={post.coverImageUrl}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-linear-to-br from-indigo-500/15 via-slate-100 to-cyan-500/10 text-sm font-semibold text-slate-500 dark:from-indigo-500/10 dark:via-slate-900 dark:to-cyan-500/10 dark:text-slate-500">
                      HealthBook
                    </div>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {dateLabel ? (
                    <time dateTime={post.publishedAt || post.createdAt} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {dateLabel}
                    </time>
                  ) : null}
                  <h2 className="mt-2 font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    <Link href={href} className={transitionBase + " hover:text-indigo-700 dark:hover:text-indigo-300"}>
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? (
                    <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                  ) : (
                    <div className="flex-1" />
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(post.tags || []).slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={href}
                    className={
                      "mt-5 inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-100 " +
                      transitionBase
                    }
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {!errorMessage && totalPages > 1 ? (
          <nav className="mt-12 flex items-center justify-center gap-4 text-sm font-semibold" aria-label="Pagination">
            {prevPage ? (
              <Link
                href={hrefForPage(prevPage)}
                className={transitionBase + " rounded-full border border-slate-200 px-4 py-2 text-slate-700 hover:border-indigo-300 hover:text-indigo-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-500"}
              >
                Previous
              </Link>
            ) : (
              <span className="rounded-full px-4 py-2 text-slate-400 dark:text-slate-600">Previous</span>
            )}
            <span className="text-slate-600 dark:text-slate-400">
              Page {page} of {totalPages}
            </span>
            {nextPage ? (
              <Link
                href={hrefForPage(nextPage)}
                className={transitionBase + " rounded-full border border-slate-200 px-4 py-2 text-slate-700 hover:border-indigo-300 hover:text-indigo-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-500"}
              >
                Next
              </Link>
            ) : (
              <span className="rounded-full px-4 py-2 text-slate-400 dark:text-slate-600">Next</span>
            )}
          </nav>
        ) : null}
      </Container>
    </>
  );
}
