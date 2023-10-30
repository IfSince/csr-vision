import { useMetadata } from '../hooks/use-metadata.js'
import { Helmet } from 'react-helmet'

export const Seo = ({ title, description, slug = '', children }) => {
  const siteMetadata = useMetadata()

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet htmlAttributes={ { lang: 'de' } } titleTemplate={ `%s - ${ siteMetadata.title }` }>
      <title>{ title }</title>
      <meta name="description" content={ metaDescription }/>
      <meta name="keywords" content={ siteMetadata.keywords }/>
      <meta name="image" content={ siteMetadata.image }/>
      <meta charSet="UTF-8"/>
      <link rel="canonical" href={ `${ siteMetadata.siteUrl }${ slug }` }/>

      <meta property="og:title" content={ title }/>
      <meta property="og:description" content={ metaDescription }/>
      <meta property="og:image" content={ siteMetadata.siteUrl }/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={ `${ siteMetadata.siteUrl }${ slug }` }/>
      <meta property="og:site_name" content={ siteMetadata.title }/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={ title }/>
      <meta name="twitter:url" content={ siteMetadata.siteUrl }/>
      <meta name="twitter:description" content={ metaDescription }/>
      <meta name="twitter:image" content={ siteMetadata.image }/>
      <meta name="twitter:creator" content={ siteMetadata.author || '' }/>
      { children }
    </Helmet>
  )
}