import Head from "next/head";
import { BASE_URL } from "@/constants/environment";
import { HeadMetatagProps, defaultMetatag } from "./data";

const HeadMetatag = ({
  title,
  description = defaultMetatag.description,
  canonical,
  basicOnly = false,
}: HeadMetatagProps) => {
  const currentUrl = canonical || BASE_URL;
  const { image, locale, type, siteName } = defaultMetatag;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {!basicOnly && (
        <>
          {canonical && <link rel="canonical" href={canonical} />}
          <meta name="description" content={description} />

          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:url" content={currentUrl} />
          <meta property="og:type" content={type} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={currentUrl} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </>
      )}
    </Head>
  );
};

export default HeadMetatag;
