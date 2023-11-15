import { Seo } from '../components/seo.js'
import { HeaderSection } from '../components/layout/header-section.js'
import { TeamMember } from '../components/cards/team-member.js'
import { HorizontalScrollCarousel } from '../components/layout/horizontal-scroll-carousel.js'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { H1 } from '../components/typography/h1.js'
import { ScrollButton } from '../components/button/scroll-button.js'
import { DefaultText } from '../components/typography/default-text.js'
import { Attributes } from '../components/layout/attributes.js'
import { ContentSection } from '../components/layout/content-section.js'
import { HorizontalWrapper } from '../components/layout/horizontal-wrapper.js'
import { Card } from '../components/cards/card.js'


/* TODO
* Cards abrunden
* Header und Mobile Burger Menü (?)
* Clean-up
* Finalisieren und Responsivität von About Us Horizontal Scroll Animation
* Double Border bei About Us fixen
* Video Bereich ausbauen und Video einbinden
*/

const INITIAL_DELAY = 0

const ATTRIBUTE_CONFIG = [
  {
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam.',
  },
  {
    title: 'Analyse',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam.',
  },
  {
    title: 'Work',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam.',
  },
]

const IndexPage = () =>
  <LazyMotion features={ domAnimation } strict>
    <header></header>

    <main className="relative">
      <m.div className="absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-black text-white"
                  initial={ { y: 0 } }
                  animate={ { y: '-100%', transitionEnd: { display: 'none' } } }
                  transition={ { delay: INITIAL_DELAY, duration: 0.75, ease: [.28, .37, .12, .92] } }/>

      <section className="mb-40 flex h-screen flex-col items-end">
        <div className="w-full overflow-hidden rounded-b-3xl bg-green-800 grow-9999 lg:rounded-b-4xl xl:rounded-b-6xl">
          <m.div className="h-full w-full"
                 initial={ { scale: 1.15 } }
                 animate={ { scale: 1 } }
                 transition={ { delay: INITIAL_DELAY - 0.05, duration: 1.8, ease: [.12, .5, .28, 1] } }>
            <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Person working in the woods"/>
          </m.div>
        </div>

        <HorizontalWrapper className="mt-8 flex w-full flex-col pb-10 xl:flex-row xl:justify-between">
          <H1 className="mb-10 flex flex-col md:mb-14 xl:mb-0">
            <span>design</span>
            <span>responsibility.</span>
          </H1>

          <div className="flex flex-col">
            <DefaultText className="mb-14 max-w-sm self-start lg:self-end xl:max-w-md">
              <span>Maybe so ne kurze Beschreibung von unserer Vision? Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
              At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</span>
            </DefaultText>

            <ScrollButton className="self-center xl:self-end"/>
          </div>
        </HorizontalWrapper>
      </section>

      <HeaderSection title="our vision" description="We want to elevate you to the next level."/>

      <ContentSection className="flex w-full flex-col items-center">
        <Attributes attributes={ ATTRIBUTE_CONFIG }/>
      </ContentSection>

      <ContentSection className="grid w-fit grid-cols-1 grid-rows-2 gap-4 text-white sm:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:w-fit"
                      title="Working together to create something cool."
                      variant="dark">
        <Card
          title="Low Code"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

        <Card
          title="Low Code"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

        <Card className="xl:col-start-2 xl:col-end-2 xl:row-start-2 xl:row-end-2"
              title="Low Code"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

        <Card className="xl:col-start-3 xl:col-end-3 xl:row-start-2 xl:row-end-2"
              title="Design"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>
      </ContentSection>

      <HeaderSection title="who we are" description="Keine Ahnung tolles Team dies das lorem Ipsum dolor sit" variant="reversed"/>

      {/* <HorizontalScrollCarousel className="pb-24 pl-[28rem] md:pb-40"> */}
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */}
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */}
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */}
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */}
      {/* </HorizontalScrollCarousel> */}

      <ContentSection title="Working together to create something cool." variant="dark">
        This is a video placeholder
      </ContentSection>

      <HeaderSection title="interested?" description="Show us your project and we'll find a way."/>
    </main>

    <footer></footer>
  </LazyMotion>

export default IndexPage

export const Head = () => <Seo title="Home"/>
