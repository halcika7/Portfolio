const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  projectRoot: `${__dirname}/src`,
});

module.exports = {
  siteMetadata: {
    title: `Haris Beslic Portfolio`,
    description: `Haris Beslic Portfolio Web app.`,
    author: `@harisbeslic`,
    siteUrl: 'https://harisbeslic.netlify.com',
    image: '/images/portfolio.png',
    twitterUsername: '@BeslicHaris',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hb.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-ts-config`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://harisbeslic.netlify.com',
        sitemap: 'https://harisbeslic.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true,
        args: `?render=explicit`,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
  ],
};
