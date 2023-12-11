const { theme } = require('./tailwind.config.js')

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'csr vision',
    description: 'csr vision - designing responsibility',
    author: 'Leon Laade',
    siteUrl: 'https://csr.vision/',
    image: 'src/images/logo-variants/icon.svg',
    keywords: 'Design, Nachhaltigkeit, Komplexitätsreduktion',
  },
  flags: {
    DEV_SSR: true,
  },
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-adapter-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'csr vision',
        short_name: 'csr vision',
        start_url: '/',
        background_color: theme.colors.white,
        theme_color: theme.colors.green['800'],
        display: 'standalone',
        icon: 'src/images/logo-variants/icon.svg',
      },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${ __dirname }/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          sm: '(max-width: 640px)',
          md: '(max-width: 768px)',
          lg: '(max-width: 1024px)',
        },
      },
    },
  ],
}