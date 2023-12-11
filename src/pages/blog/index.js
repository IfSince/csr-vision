import { Seo } from '../../components/seo.js'
import { SmoothScroll } from '../../components/smooth-scroll.js'
import { SiteLayout } from '../../components/layout/site-layout.js'
import { graphql, navigate } from 'gatsby'
import { IconButton } from '../../components/buttons/icon-button.js'
import { HeaderWrapper } from '../../components/layout/wrapper/header-wrapper.js'
import { H1 } from '../../components/typography/h1.js'
import { TuneIcon } from '../../components/icons/tune-icon.js'
import { SortIcon } from '../../components/icons/sort-icon.js'
import { getImage } from 'gatsby-plugin-image'
import { BlogRow } from '../../components/blog/blog-row.js'
import { Footer } from '../../components/footer/footer.js'

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    slug: node.frontmatter.slug,
    image_alt: node.frontmatter.image_alt,
    image: getImage(node.frontmatter.image),
  }))

  const navItems = [
    { index: 0, text: 'home', mobileOnly: true, onClick: () => navigate('/') },
    { index: 1, text: 'csr vision', onClick: () => navigate('/') },
    { index: 2, text: 'who we are', onClick: () => navigate('/') },
    { index: 4, text: 'blog', onClick: () => navigate('/') },
    { index: 3, text: 'contact', onClick: () => navigate('/') },
  ]

  return (
    <SiteLayout navItems={ navItems }>

      <SmoothScroll>
        <main className="relative mb-40">
          <HeaderWrapper spacingType="header" className="mt-40 gap-y-20 border-0 py-0 pb-4 md:gap-y-24 md:py-0 md:pb-4 lg:gap-y-24 xl:mt-60">
            <H1>our blog</H1>

            <div className="flex w-full justify-end gap-4">
              <IconButton size="md-scaling">
                <TuneIcon/>
              </IconButton>
              <IconButton size="md-scaling">
                <SortIcon/>
              </IconButton>
            </div>
          </HeaderWrapper>

          {
            blogs.map(blog => <BlogRow { ...blog } key={ blog.id }/>)
          }
        </main>

        <Footer items={ navItems }/>
      </SmoothScroll>
    </SiteLayout>
  )
}

export const query = graphql`
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
`

export default BlogPage

export const Head = () => <Seo title="blog"/>