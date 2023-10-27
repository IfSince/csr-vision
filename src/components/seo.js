import { useMetadata } from '../hooks/use-metadata.js'
import { Helmet } from 'react-helmet'

export const Seo = ({ title, description, slug = '', children }) => {
  const metadata = useMetadata()

  const metaDescription = description || metadata.description

  return (
    <Helmet htmlAttributes={ { lang: 'de' } } titleTemplate={ `%s - ${ metadata.title }` }>
      <title>{ title }</title>
      <meta name="description" content={ metaDescription }/>
      <meta name="keywords" content={ metadata.keywords }/>
      <meta name="image" content={ metadata.image }/>
      <meta charSet="UTF-8"/>
      <link rel="canonical" href={ `${ metadata.siteUrl }${ slug }` }/>

      <meta property="og:title" content={ title }/>
      <meta property="og:description" content={ metaDescription }/>
      <meta property="og:image" content={ metadata.siteUrl }/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={ `${ metadata.siteUrl }${ slug }` }/>
      <meta property="og:site_name" content={ metadata.title }/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={ title }/>
      <meta name="twitter:url" content={ metadata.siteUrl }/>
      <meta name="twitter:description" content={ metaDescription }/>
      <meta name="twitter:image" content={ metadata.image }/>
      <meta name="twitter:creator" content={ metadata.author || `` }/>
      { children }
    </Helmet>
  )
}