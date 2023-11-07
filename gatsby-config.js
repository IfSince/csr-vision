const adapter = require("gatsby-adapter-netlify")

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  siteMetadata: {
    title: 'csr vision',
    description: 'Portfolio Seite für csr vision',
    author: 'Leon Laade',
    siteUrl: 'https://csr.vision/',
    image: 'src/images/logo-variants/icon.svg',
    keywords: 'csr, nachhaltigkeit',
  },
  flags: {
    DEV_SSR: true,
  },
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'csr vision',
        short_name: 'csr vision',
        start_url: '/',
        background_color: '#FAF9F6',
        theme_color: '#417C5E',
        display: 'standalone',
        icon: 'src/images/logo-variants/icon.svg',
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/',
      },
      __key: 'images',
    },
  ],
}