import { Helmet } from 'react-helmet-async';

const SITE = 'https://richverseecotech.com';
const OG_IMAGE = `${SITE}/og-image.jpg`;

type Props = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
};

/** Per-page metadata: title, description, canonical, Open Graph & Twitter cards. */
export default function Seo({ title, description, path = '', image = OG_IMAGE, type = 'website' }: Props) {
  const url = `${SITE}${path}`;
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Richverseecotech" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
