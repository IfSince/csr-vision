import { graphql, navigate } from 'gatsby'
import { SiteLayout } from '../../components/layout/site-layout.js'
import { SmoothScroll } from '../../components/smooth-scroll.js'
import { Seo } from '../../components/seo.js'
import { HeaderWrapper } from '../../components/layout/wrapper/header-wrapper.js'
import { H1 } from '../../components/typography/h1.js'
import { ContentWrapper } from '../../components/layout/wrapper/content-wrapper.js'
import { LargeText } from '../../components/typography/large-text.js'
import { Footer } from '../../components/footer/footer.js'

const BlogPost = ({ data, children }) => {
  console.log(data)
  const { title, date } = data.mdx.frontmatter

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
          <HeaderWrapper spacingType="header" className="mt-40 border-t-0 py-0 pb-36 md:py-0 md:pb-[10.5rem] xl:mt-60">
            <H1>{ title }</H1>
          </HeaderWrapper>

          <ContentWrapper className="w-full">
            <div className="grid grid-rows-1 2xl:grid-cols-10">
              <div className="font-medium 2xl:col-start-1">
                { date }
              </div>

              <div className="2xl:col-span-5 2xl:col-start-5">
                <LargeText>{ children }</LargeText>
              </div>
            </div>
          </ContentWrapper>
        </main>

        <Footer items={ navItems }/>
      </SmoothScroll>
    </SiteLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`

export default BlogPost

export const Head = ({ data }) => <Seo title={ data.mdx.frontmatter.title.toLowerCase() }/>