/**
 * Serves a WebP (with the original JPG as fallback) for blog imagery.
 * `<picture>` is `display: contents` (see index.css) so existing
 * `.X img` styles apply unchanged.
 */
export default function BlogImage({
  src,
  alt,
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}) {
  const webp = src.replace(/\.jpe?g$/i, '.webp');
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} loading={loading} />
    </picture>
  );
}
