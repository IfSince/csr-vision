import { H1 } from '../components/typography/h1.js'
import { Seo } from '../components/seo.js'
import { IconButton } from '../components/button/icon-button.js'
import 'material-icons/iconfont/material-icons.css'
import { AnimatedHeader } from '../components/animations/animated-header.js'
import { motion } from 'framer-motion'
import { HeaderSection } from '../components/layout/header-section.js'
import { HeaderSectionReversed } from '../components/layout/header-section-reversed.js'

const IndexPage = () => {
  return (
    <>
      <header></header>

      <main className="relative">
        <div className="flex h-screen flex-col items-end">
          <div className="w-full bg-green-800 grow-9999 rounded-b-6xl"></div>
          <div className="mt-8 flex w-full flex-col px-6 pb-10 md:px-10 xl:flex-row xl:justify-between">
            <H1 className="mb-14 flex flex-col xl:mb-0">
              <AnimatedHeader title="design"/>
              <AnimatedHeader title="responsibility."/>
            </H1>
            <div className="flex flex-col">
              <motion.span className="mb-14 max-w-sm self-start leading-[1.15em] md:self-end xl:max-w-md"
                           initial={ { opacity: 0, y: '1em' } }
                           whileInView={ { opacity: 1, y: 0 } }
                           transition={ {
                             delay: 0.9,
                             ease: [0.2, 0.65, 0.3, 0.9],
                           } }
              >
                Maybe so ne kurze Beschreibung von unserer Vision? Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              </motion.span>
              <IconButton icon="south" className="self-center md:self-end"/>
            </div>
          </div>
        </div>

        <HeaderSection title="our vision" description="We want to elevate you to the next level."/>

        <HeaderSectionReversed title="who we are" description="We want to elevate you to the next level."/>
      </main>

      <footer></footer>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>
