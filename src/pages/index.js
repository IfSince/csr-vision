import { Seo } from '../components/seo.js'
import { HeaderSection } from '../components/layout/header-section.js'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { H1 } from '../components/typography/h1.js'
import { ScrollButton } from '../components/button/scroll-button.js'
import { DefaultText } from '../components/typography/default-text.js'
import { Attributes } from '../components/layout/attributes.js'
import { ContentSection } from '../components/layout/content-section.js'
import { Card } from '../components/cards/card.js'
import { Header } from '../components/header/header.js'
import { TeamMember } from '../components/cards/team-member.js'
import { ImageHover } from '../components/animations/image-hover.js'


/* TODO
* Header und Mobile Burger Menü animieren mit Motion
* Video Bereich ausbauen und Video einbinden
*/

const INITIAL_DELAY = 0

const MENU_CONFIG = [
  { text: 'home', link: '/', mobileOnly: true },
  { text: 'our vision', link: '/#our-vision' },
  { text: 'about us', link: '/#about-us' },
  { text: 'contact', link: '/#contact' },
]

const ATTRIBUTE_CONFIG = [
  {
    title: 'Unternehmensimage',
    description: 'CSR-Reports zeigen, dass ein Unternehmen sich seiner sozialen und ökologischen Verantwortung bewusst ist.',
  },
  {
    title: 'Marktdifferenzierung',
    description: 'Ein starkes Engagement für CSR kann ein Unternehmen in starken Märkten von seinen Wettbewerbern abheben.',
  },
  {
    title: 'Langfristige Profitabilität',
    description: 'Unternehmen, die CSR ernst nehmen und dies in attraktiven Berichten transparent machen, sind langfristig profitabler.',
  },
]

const IndexPage = () =>
  <LazyMotion features={ domAnimation } strict>
    <Header items={ MENU_CONFIG }/>

    <main className="relative">
      <m.div className="absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-black text-white"
             initial={ { y: 0 } }
             animate={ { y: '-100%' } }
             transition={ { delay: INITIAL_DELAY, duration: 0.75, ease: [.28, .37, .12, .92] } }/>

      <section className="mb-16 flex h-screen flex-col items-end pt-20 pb-10 horizontal-spacing md:mb-24">
        <div className="w-full overflow-hidden rounded-2xl bg-green-800 grow-9999 md:rounded-3xl lg:rounded-4xl xl:rounded-5xl">
          <m.div className="h-full w-full"
                 initial={ { scale: 1.15 } }
                 animate={ { scale: 1 } }
                 transition={ { delay: INITIAL_DELAY - 0.05, duration: 1.8, ease: [.12, .5, .28, 1] } }>
            <ImageHover>
              <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Person working in the woods"/>
            </ImageHover>
          </m.div>
        </div>

        <div className="mt-6 flex w-full flex-col gap-x-24 pb-10 lg:flex-row lg:justify-between xl:pb-0">
          <H1 className="flex flex-col mb-[0.4em] lg:mb-0">
            <span>design</span>
            <span>responsibility</span>
          </H1>

          <div className="flex flex-col">
            <DefaultText className="mt-1 max-w-xs self-start sm:max-w-sm md:self-end xl:max-w-md xl:font-medium">
              CSR.vision hilft Unternehmen dabei, CSR als Chance zu begreifen.
              Durch Reduzierung der Komplexität, Kuratieren und crossmediale Aufbereitung verwandeln wir CSR Berichte, die sonst nur von Analysten und
              Stakeholdern gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden begeistern wird.
            </DefaultText>

            <ScrollButton className="mt-auto hidden self-end xl:flex"/>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <ScrollButton className="mt-auto xl:hidden"/>
        </div>
      </section>

      <HeaderSection id="our-vision"
                     title="our csr vision"
                     description="CSR als Chance begreifen und in die DNA ihrer Kommunikation integrieren"/>

      <ContentSection className="flex w-full flex-col items-center">
        <Attributes attributes={ ATTRIBUTE_CONFIG }/>
      </ContentSection>

      <ContentSection className="grid w-fit grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:w-fit"
                      title="Working together to design your cooperate social responsibility"
                      variant="dark">
        <Card
          title="Copy Writing"
          description="A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency."/>

        <Card
          title="Web Journeys"
          description="A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency."/>

        <Card className="xl:col-start-2 xl:col-end-2 xl:row-start-2 xl:row-end-2"
              title="Creative AI"
              description="A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency."/>

        <Card className="xl:col-start-3 xl:col-end-3 xl:row-start-2 xl:row-end-2"
              title="Movies & VFX"
              description="A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency."/>
      </ContentSection>

      <HeaderSection id="about-us"
                     title="who we are"
                     description="a hard-designing team of professionals spanning generations x to z" variant="reversed"/>

      <ContentSection className="flex justify-end" subSection={ true }>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:w-fit sm:grid-cols-2 lg:grid-cols-3">
          <TeamMember className="col-start-1 col-end-1"
                      role="Project Lead"
                      name="Lukas Ruszkowski">
            <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Lukas Ruszkowski"/>
          </TeamMember>

          <TeamMember className="lg:col-start-2 lg:col-end-2"
                      role="Co. Lead"
                      name="Kai Hitzer">
            <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Kai Hitzer"/>
          </TeamMember>

          <TeamMember className="lg:col-start-3 lg:col-end-3"
                      role="Member"
                      name="Leon Laade">
            <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Leon Laade"/>
          </TeamMember>

          <TeamMember className="lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2"
                      role="Member"
                      name="Ben Schmidt">
            <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Ben Schmidt"/>
          </TeamMember>

          <TeamMember className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2"
                      role="Member"
                      name="Jan Mueller">
            <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Jan Mueller"/>
          </TeamMember>
        </div>
      </ContentSection>


      <ContentSection title="Working together to create something cool." variant="dark">
        This is a video placeholder
      </ContentSection>

      <HeaderSection id="contact"
                     title="interested?"
                     description="Show us your project and we'll find a way."/>
    </main>
    <footer></footer>
  </LazyMotion>

export default IndexPage

export const Head = () => <Seo title="Home"/>
