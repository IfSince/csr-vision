import { BlogPreview } from './blog-preview.js'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

export const BlogPreviews = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: { date: DESC }}) {
        nodes {
          id
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            slug
            image_alt
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)


  const blogs = data.allMdx.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    slug: node.frontmatter.slug,
    image_alt: node.frontmatter.image_alt,
    image: getImage(node.frontmatter.image)
  }))

  return <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:w-fit sm:grid-cols-2 lg:grid-cols-3">
    {
      blogs.map(blog => <BlogPreview { ...blog } key={ blog.id }/>)
    }
  </div>
}
