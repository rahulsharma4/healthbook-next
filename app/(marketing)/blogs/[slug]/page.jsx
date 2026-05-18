import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

import { Container } from "@/components/Container";
import { fetchPublishedBlogBySlug, fetchPublishedBlogList } from "@/lib/blogsPublic";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalWebPageJsonLd } from "@/lib/schema";
import { transitionBase } from "@/lib/ui";

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(d);
  } catch {
    return "";
  }
}

function coverSrc(url) {
  const u = String(url || "").trim();
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  return absoluteUrl(u.startsWith("/") ? u : `/${u}`);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = typeof slug === "string" ? slug : "";
  let post = null;
  try {
    post = await fetchPublishedBlogBySlug(s);
  } catch {
    post = null;
  }

  if (!post) {
    return buildPageMetadata({
      path: `/blogs/${encodeURIComponent(s)}`,
      title: "Article not found",
      description: "This article is unavailable or not published.",
      robots: { index: false, follow: false },
    });
  }

  const path = `/blogs/${post.slug}`;
  const description =
    String(post.excerpt || "").trim().slice(0, 160) ||
    "HealthBook article on care coordination and healthcare software.";
  const imageUrl = String(post.coverImageUrl || "").trim();
  const coverAlt = String(post.coverImageAlt || "").trim() || post.title;

  return buildPageMetadata({
    path,
    title: post.title,
    description,
    keywords: Array.isArray(post.tags) ? post.tags : [],
    ...(imageUrl
      ? {
          socialImage: {
            url: imageUrl.startsWith("http") ? imageUrl : absoluteUrl(imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`),
            alt: coverAlt,
          },
        }
      : {}),
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const s = typeof slug === "string" ? slug : "";

  let post = null;
  let recentPayload = { items: [] };
  try {
    post = await fetchPublishedBlogBySlug(s);
  } catch {
    post = null;
  }
  try {
    recentPayload = await fetchPublishedBlogList({ page: 1, limit: 8 });
  } catch {
    recentPayload = { items: [] };
  }

  if (!post) notFound();

  const dateLabel = formatDate(post.publishedAt || post.createdAt);
  const path = `/blogs/${post.slug}`;
  const safeHtml = DOMPurify.sanitize(String(post.content || ""), {
    ADD_ATTR: ["target", "rel", "class", "style", "src", "alt", "width", "height"],
  });
  const coverAlt = String(post.coverImageAlt || "").trim() || post.title;
  const recentItems = (Array.isArray(recentPayload.items) ? recentPayload.items : [])
    .filter((x) => x?.slug && x.slug !== post.slug)
    .slice(0, 5);

  return (
    <>
      <JsonLd
        data={medicalWebPageJsonLd({
          path,
          title: `${post.title} | HealthBook Blog`,
          description: String(post.excerpt || "").trim() || "HealthBook article.",
        })}
      />
      <article className="pb-20 sm:pb-28">
        <div className="border-b border-slate-200/90 bg-white/90 pb-10 pt-16 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80 sm:pt-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <Link
                href="/blogs"
                className={
                  "inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-100 " +
                  transitionBase
                }
              >
                ← All articles
              </Link>
              {dateLabel ? (
                <time
                  dateTime={post.publishedAt || post.createdAt}
                  className="mt-6 block text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                >
                  {dateLabel}
                </time>
              ) : null}
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-slate-900 dark:text-white sm:text-5xl">
                {post.title}
              </h1>
              {post.excerpt ? (
                <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
              ) : null}
              {(post.categories || []).length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.categories.map((c) => (
                    <span
                      key={String(c._id || c.slug)}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-200"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              ) : null}
              {(post.tags || []).length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Container>
        </div>

        {post.coverImageUrl ? (
          <Container className="mt-10 max-w-6xl">
            {/* eslint-disable-next-line @next/next/no-img-element -- admin-provided arbitrary URLs */}
            <img
              src={post.coverImageUrl}
              alt={coverAlt}
              className="max-h-[min(520px,70vh)] w-full rounded-2xl object-cover shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10"
            />
          </Container>
        ) : null}

        <Container className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="blog-post-scope min-w-0">
              {post.customCss ? (
                <style dangerouslySetInnerHTML={{ __html: String(post.customCss || "") }} />
              ) : null}
              <div
                className="blog-post-body prose-blog max-w-none text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 [&_a]:text-indigo-600 [&_img]:max-w-full [&_img]:rounded-xl dark:[&_a]:text-indigo-400"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />
            </div>
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/60">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Recent posts</div>
                <ul className="mt-4 space-y-4">
                  {recentItems.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blogs/${encodeURIComponent(r.slug)}`}
                        className={
                          "group flex gap-3 text-sm font-semibold text-slate-900 transition hover:text-indigo-700 dark:text-white dark:hover:text-indigo-300 " +
                          transitionBase
                        }
                      >
                        {r.coverImageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element -- CMS-provided URLs
                          <img
                            src={coverSrc(r.coverImageUrl)}
                            alt=""
                            className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-slate-900/5 dark:ring-white/10"
                          />
                        ) : (
                          <span className="h-14 w-14 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800" aria-hidden />
                        )}
                        <span className="min-w-0">
                          <span className="line-clamp-2">{r.title}</span>
                          <span className="mt-1 block font-mono text-[11px] font-normal text-slate-500 dark:text-slate-400">
                            /{r.slug}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {recentItems.length === 0 ? (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">More articles coming soon.</p>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}
