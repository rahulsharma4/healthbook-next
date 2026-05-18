/**
 * Server component that injects JSON-LD structured data.
 * @param {{ data: any }} props
 */
export function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      // JSON-LD requires raw JSON string in the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

