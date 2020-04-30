import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  description?: string;
  lang?: string | undefined;
  meta?: any[];
  title: string;
}

function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title,
}: SEOProps): JSX.Element {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'google-site-verification',
          content: 'hnJZ6F_bd4hww5Dy-xx1LS7FEyIntrrzvyZv6LDu_r8',
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        },
        {
          property: `og:image:width`,
          content: `400`,
        },
        {
          property: `og:image:height`,
          content: `300`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        },
      ].concat(meta)}
    />
  );
}

export default React.memo(SEO);
