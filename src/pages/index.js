import { H1 } from '../components/typography/h1.js'

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

export const Head = () => <title>Home Page</title>
