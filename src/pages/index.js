import { Seo } from '../components/seo.js'
import 'material-icons/iconfont/material-icons.css'
import { HeaderSection } from '../components/layout/header-section.js'
import { HeaderSectionReversed } from '../components/layout/header-section-reversed.js'
import { RouteButton } from '../components/button/route-button.js'
import { H3 } from '../components/typography/h3.js'
import { Card } from '../components/cards/card.js'
import { TeamMember } from '../components/cards/team-member.js'
import { HorizontalScrollCarousel } from '../components/layout/horizontal-scroll-carousel.js'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { H1 } from '../components/typography/h1.js'
import { IconButton } from '../components/button/icon-button.js'
import { DefaultText } from '../components/typography/default-text.js'
import { AttributeWrapper } from '../components/layout/attribute-wrapper.js'
import { TextReveal } from '../components/animations/text-reveal.js'


/* TODO
* Cards abrunden
* Header und Mobile Burger Menü (?)
* Animations mit Framer Motion ausprobieren
* Clean-up
* Finalisieren und Responsivität von About Us Horizontal Scroll Animation
* Double Border bei About Us fixen
* Video Bereich ausbauen und Video einbinden
*/

const INITIAL_DELAY = 0

const IndexPage = () => {
  return (
    <>
      <header></header>

      <main className="relative">
        <motion.div className="absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-black text-white max-h-[-webkit-fill-available]"
                    initial={ { y: 0 } }
                    animate={ { y: '-100%', transitionEnd: { display: 'none' } } }
                    transition={ { delay: INITIAL_DELAY, duration: 0.75, ease: [.28, .37, .12, .92] } }>
          Hier wäre noch platz für ne coole Intro Animation, vllt unser Logo was sich animiert zusammensetzt oder sowas.
        </motion.div>

        <section className="mb-40 flex h-screen flex-col items-end max-h-[-webkit-fill-available]">
          <motion.div className="w-full overflow-hidden rounded-b-3xl bg-green-800 grow-9999 lg:rounded-b-4xl xl:rounded-b-6xl">
            <motion.div className="h-full w-full"
                        initial={ { scale: 1.15 } }
                        animate={ { scale: 1 } }
                        transition={ { delay: INITIAL_DELAY - 0.05, duration: 1.8, ease: [.12, .5, .28, 1] } }
            >
              <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Person working in the woods"/>
            </motion.div>
          </motion.div>
          <div className="mt-8 flex w-full flex-col pb-10 horizontal-spacing xl:flex-row xl:justify-between">
            <H1 className="mb-10 flex flex-col md:mb-14 xl:mb-0">
              <TextReveal text="design" delay={ INITIAL_DELAY + 0.55 }/>
              <TextReveal text="responsibility." delay={ INITIAL_DELAY + 0.55 }/>
            </H1>

            <div className="flex flex-col">
              <DefaultText className="mb-14 max-w-sm self-start lg:self-end xl:max-w-md">
                <TextReveal text="Maybe so ne kurze Beschreibung von unserer Vision? Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                  At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet," delay={ INITIAL_DELAY + 1 }/>
              </DefaultText>


              <IconButton icon="south" className="self-center xl:self-end"/>
            </div>
          </div>
        </section>

        <HeaderSection title="our vision" description="We want to elevate you to the next level."/>

        <section className="flex flex-col items-center horizontal-spacing content-vertical-spacing">
          <AttributeWrapper/>
          <RouteButton description="See more" route="lorem"/>
        </section>

        <section className="bg-black content-vertical-spacing">
          <div className="border-b border-white pb-16 horizontal-spacing">
            <H3 className="max-w-sm text-white sm:max-w-md xl:max-w-2xl">
              <TextReveal text="Working together to create something cool."/>
            </H3>
          </div>

          <div className="mt-4 grid w-fit grid-cols-1 grid-rows-2 gap-4 text-white horizontal-spacing sm:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:w-fit">
            <Card className=""
                  title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

            <Card className=""
                  title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

            <Card className="xl:col-start-2 xl:col-end-2 xl:row-start-2 xl:row-end-2"
                  title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

            <Card className="xl:col-start-3 xl:col-end-3 xl:row-start-2 xl:row-end-2"
                  title="Design"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>
          </div>
        </section>

        <HeaderSectionReversed title="who we are" description="Keine Ahnung tolles Team dies das lorem Ipsum dolor sit"/>

        <HorizontalScrollCarousel className="pb-24 pl-[28rem] md:pb-40">
          <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/>
          <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/>
          <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/>
          <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/>
        </HorizontalScrollCarousel>

        <section className="bg-black content-vertical-spacing">
          <div className="border-b border-white pb-16 horizontal-spacing">
            <H3 className="max-w-sm text-white sm:max-w-md xl:max-w-2xl">
              <TextReveal text="Working together to create something cool."/>
            </H3>
          </div>

          <div className="mt-4 text-white horizontal-spacing">
            This is a video placeholder
          </div>
        </section>

        <HeaderSection title="interested?" description="Show us your project and we'll find a way."/>

      </main>

      <footer></footer>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>
