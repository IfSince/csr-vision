import { H1 } from '../components/typography/h1.js'
import { Seo } from '../components/seo.js'

const IndexPage = () => {
  return (
    <main>
      <H1 className="flex flex-col">
        <span>design</span>
        <span>responsibility.</span>
      </H1>
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>
