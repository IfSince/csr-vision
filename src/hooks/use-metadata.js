import { graphql, useStaticQuery } from 'gatsby'

export const useMetadata = () => {
  const { site } = useStaticQuery(graphql`
        query {
          site {
              metadata {
                  title
                  description
                  author
                  siteUrl
                  image
                  keywords
              }
          }
      }
  `)

  return site.metadata
}