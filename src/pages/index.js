import { H1 } from '../components/typography/h1.js'
import { Seo } from '../components/seo.js'
import { IconButton } from '../components/button/icon-button.js'
import 'material-icons/iconfont/material-icons.css'
import { AnimatedHeader } from '../components/animations/animated-header.js'
import { HeaderSection } from '../components/layout/header-section.js'
import { HeaderSectionReversed } from '../components/layout/header-section-reversed.js'
import { Card } from '../components/cards/card.js'
import { RouteButton } from '../components/button/route-button.js'
import { DefaultText } from '../components/typography/default-text.js'

const IndexPage = () => {
  return (
    <>
      <header></header>

      <main className="relative">
        <section className="flex h-screen flex-col items-end">
          <div className="w-full bg-green-800 grow-9999 rounded-b-6xl"></div>
          <div className="mt-8 flex w-full flex-col pb-10 horizontal-spacing xl:flex-row xl:justify-between">
            <H1 className="mb-14 flex flex-col xl:mb-0">
              <AnimatedHeader title="design"/>
              <AnimatedHeader title="responsibility."/>
            </H1>
            <div className="flex flex-col">
              <DefaultText className="mb-14 max-w-sm self-start md:self-end xl:max-w-md">
                Maybe so ne kurze Beschreibung von unserer Vision? Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              </DefaultText>
              <IconButton icon="south" className="self-center md:self-end"/>
            </div>
          </div>
        </section>

        <HeaderSection title="our vision" description="We want to elevate you to the next level."/>

        <section className="flex flex-col items-center content-spacing">
          <div className="flex w-full flex-col items-center justify-between max-w-8xl lg:flex-row">
            <Card title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

            <Card title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

            <Card title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>
          </div>
          <RouteButton description="See more" route="lorem"/>
        </section>

        <HeaderSectionReversed title="who we are" description="We want to elevate you to the next level."/>
      </main>

      <footer></footer>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>
