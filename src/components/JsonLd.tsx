/**
 * Emits one or more JSON-LD blocks as inline <script> tags. Rendered directly
 * in the React tree (not via Helmet) so they are reliably captured during
 * prerender and re-render on client navigation. JSON-LD is valid anywhere in
 * the document, so body placement is fine for search engines.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
