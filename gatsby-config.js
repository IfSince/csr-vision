/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'csr vision',
    siteUrl: 'https://csr.vision/',
  },
  flags: {
    DEV_SSR: true,
  },
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
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