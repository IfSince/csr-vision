import { H1 } from '../components/typography/h1.js'
import { Seo } from '../components/seo.js'
import { IconButton } from '../components/button/icon-button.js'
import 'material-icons/iconfont/material-icons.css'

const IndexPage = () => {
  return (
    <>
      <header></header>

      <main className="relative">
        <div className="flex h-screen flex-col items-end">
          <div className="w-full grow-9999 bg-green-800 rounded-b-6xl"></div>
          <div className="flex w-full flex-col mt-8 px-6 pb-10 md:px-10 xl:flex-row xl:justify-between">
            <H1 className="mb-14 flex flex-col xl:mb-0">
              <span>design</span>
              <span>responsibility.</span>
            </H1>
            <div className="flex flex-col">
              <span className="mb-14 max-w-sm self-start leading-[1.15em] md:self-end xl:max-w-md">
                Maybe so ne kurze Beschreibung von unserer Vision? Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              </span>
              <IconButton icon="south" className="self-center md:self-end"/>
            </div>
          </div>
        </div>

      </main>

      <footer></footer>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>
