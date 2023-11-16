import { Seo } from '../components/seo.js'
import { HeaderSection } from '../components/layout/header-section.js'
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
* Header und Mobile Burger Menü (?)
* Finalisieren und Responsivität von About Us Horizontal Scroll Animation
* Double Border bei About Us fixen
* Video Bereich ausbauen und Video einbinden
*/

const INITIAL_DELAY = 0

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
    <header></header>

    <main className="relative">
      <m.div className="absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-black text-white"
             initial={ { y: 0 } }
             animate={ { y: '-100%' } }
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
            <span>responsibility</span>
          </H1>

          <div className="flex flex-col">
            <DefaultText className="mb-14 max-w-sm self-start font-medium lg:self-end xl:max-w-md">
              CSR.vision hilft Unternehmen dabei, CSR als Chance zu begreifen.
              Durch Komplexitätsreduktion, Kuratieren und crossmediale Aufbereitung verwandeln wir CSR Berichte, die sonst nur von Analysten und Stakeholdern
              gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden begeistern wird.
            </DefaultText>

            <ScrollButton className="self-center xl:self-end"/>
          </div>
        </HorizontalWrapper>
      </section>

      <HeaderSection title="our csr vision" description="CSR als Chance begreifen und in die DNA ihrer Kommunikation integrieren"/>

      <ContentSection className="flex w-full flex-col items-center">
        <Attributes attributes={ ATTRIBUTE_CONFIG }/>
      </ContentSection>

      <ContentSection className="grid w-fit grid-cols-1 grid-rows-2 gap-4 text-white sm:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:w-fit"
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

      <HeaderSection title="who we are" description="a hard-designing team of professionals spanning generations x to z" variant="reversed"/>

      {/* <HorizontalScrollCarousel className="pb-24 pl-[28rem] md:pb-40"> */ }
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */ }
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */ }
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */ }
      {/*   <TeamMember role="Web Dev - UI/UX" name="Leon Laade"/> */ }
      {/* </HorizontalScrollCarousel> */ }

      <ContentSection title="Working together to create something cool." variant="dark">
        This is a video placeholder
      </ContentSection>

      <HeaderSection title="interested?" description="Show us your project and we'll find a way."/>
    </main>

    <footer></footer>
  </LazyMotion>

export default IndexPage

export const Head = () => <Seo title="Home"/>
