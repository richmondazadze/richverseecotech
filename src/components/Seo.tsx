import { Helmet } from 'react-helmet-async';

const SITE = 'https://richverseecotech.com';
const OG_IMAGE = `${SITE}/og-image.jpg`;

type Props = {
  noindex?: boolean;
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  published?: string;
  modified?: string;
  section?: string;
  type?: 'website' | 'article';
};

/** Per-page metadata: title, description, canonical, Open Graph & Twitter cards. */
export default function Seo({ title, description, path = '', image = OG_IMAGE, imageAlt = 'Richverse Ecotech studio wordmark and Heritage emblem', type = 'website', published, modified, section, noindex = false }: Props) {
  const url = `${SITE}${path}`;
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      {published && <meta property="article:published_time" content={published} />}
      {modified && <meta property="article:modified_time" content={modified} />}
      {section && <meta property="article:section" content={section} />}
      <meta property="og:site_name" content="Richverse Ecotech" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={new URL(image, SITE).href} />
      <meta property="og:image:alt" content={imageAlt} />
      {image === OG_IMAGE && <meta property="og:image:width" content="1200" />}
      {image === OG_IMAGE && <meta property="og:image:height" content="630" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={new URL(image, SITE).href} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}
