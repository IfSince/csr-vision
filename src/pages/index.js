import { Seo } from '../components/seo.js'
import { HeaderSection } from '../components/layout/header-section.js'
import { domAnimation, LazyMotion, m, useScroll } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { H1 } from '../components/typography/h1.js'
import { ScrollButton } from '../components/button/scroll-button.js'
import { DefaultText } from '../components/typography/default-text.js'
import { Attributes } from '../components/layout/attributes.js'
import { ContentSection } from '../components/layout/content-section.js'
import { Card } from '../components/cards/card.js'
import { Header } from '../components/header/header.js'
import { TeamMember } from '../components/cards/team-member.js'
import { SmoothScroll } from '../components/layout/smooth-scroll.js'
import { ButtonTemplate } from '../components/button/button-template.js'
import { useRef, useState } from 'react'
import { scrollToTarget } from '../util/scroll-to-target.js'
import { Footer } from '../components/footer/footer.js'
import { Cursor } from '../components/cursor.js'
import { VideoPlayer } from '../components/video-player.js'
import DummyVideo from '../videos/video.mp4'


/* TODO
* Hero Section cooler (z. B. Slider)
* Header schöner machen
*/

const INITIAL_DELAY = 0

const ATTRIBUTES = [
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

const IndexPage = () => {
  const { scrollY } = useScroll()

  const ourVisionSectionRef = useRef(null)
  const aboutUsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const navItems = [
    { index: 0, text: 'home', mobileOnly: true, onClick: () => window.scrollTo({ top: 0 }) },
    { index: 1, text: 'our vision', onClick: () => scrollToTarget(ourVisionSectionRef, scrollY) },
    { index: 2, text: 'about us', onClick: () => scrollToTarget(aboutUsSectionRef, scrollY) },
    { index: 3, text: 'contact', onClick: () => scrollToTarget(contactSectionRef, scrollY) },
  ]

  const ref = useRef(null)

  const [cursorElement, setCursorElement] = useState(<></>)
  const [cursorVariant, setCursorVariant] = useState('default')

  const updateCursor = (element, variant) => {
    element && setCursorElement(element)
    variant && setCursorVariant(variant)
  }

  return (
    <div ref={ ref }>
      <LazyMotion features={ domAnimation } strict>
        <Cursor containerRef={ ref }
                cursorVariant={ cursorVariant }
                cursorElement={ cursorElement }/>

        <Header items={ navItems }/>

        <SmoothScroll>
          <main className="relative">
            <section className="mb-16 flex h-screen flex-col items-end pb-10 md:mb-24">
              <div className="w-full overflow-hidden rounded-b-2xl bg-green-800 grow-9999 md:rounded-b-3xl lg:rounded-b-4xl xl:rounded-b-5xl">
                <m.div className="h-full w-full">
                  <StaticImage className="h-full w-full" src="../images/hero/hero_1.png" alt="Person working in the woods" loading="eager"/>
                </m.div>
              </div>

              <div className="mt-6 flex w-full flex-col gap-x-24 pb-10 horizontal-spacing lg:flex-row lg:justify-between xl:pb-0">
                <H1 className="flex flex-col mb-[0.4em] lg:mb-0">
                  <span>design</span>
                  <span>responsibility</span>
                </H1>

                <div className="flex flex-col">
                  <DefaultText className="mt-1 max-w-xs self-start sm:max-w-sm md:self-end xl:max-w-md">
                    CSR.vision hilft Unternehmen dabei, CSR als Chance zu begreifen.
                    Durch Reduzierung der Komplexität, Kuratieren und crossmediale Aufbereitung verwandeln wir CSR Berichte, die sonst nur von Analysten und
                    Stakeholdern gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden begeistern wird.
                  </DefaultText>

                  <ScrollButton className="mt-auto hidden self-end xl:flex" onClick={ () => scrollToTarget(ourVisionSectionRef, scrollY, 'smooth') }/>
                </div>
              </div>

              <div className="flex w-full justify-center">
                <ScrollButton className="mt-auto xl:hidden" onClick={ () => scrollToTarget(ourVisionSectionRef, scrollY, 'smooth') }/>
              </div>
            </section>

            <div ref={ ourVisionSectionRef }>
              <HeaderSection title="our csr vision"
                             subText="CSR als Chance begreifen und in die DNA ihrer Kommunikation integrieren"/>

              <ContentSection className="flex w-full flex-col items-center">
                <Attributes attributes={ ATTRIBUTES }/>
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

            </div>

            <div ref={ aboutUsSectionRef }>
              <HeaderSection title="who we are"
                             subText="a hard-designing team of professionals spanning generations x to z"
                             variant="reversed"/>

              <ContentSection className="flex justify-end" subSection={ true }>
                <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:w-fit sm:grid-cols-2 lg:grid-cols-3">
                  <TeamMember className="col-start-1 col-end-1"
                              role="Project Lead"
                              name="Lukas">
                    <StaticImage className="h-full w-full" src="../images/team-members/Lukas.png" alt="Lukas"/>
                  </TeamMember>

                  <TeamMember className="lg:col-start-2 lg:col-end-2"
                              role="Co. Lead"
                              name="Kai">
                    <StaticImage className="h-full w-full" src="../images/team-members/Kai.png" alt="Kai"/>
                  </TeamMember>

                  <TeamMember className="lg:col-start-3 lg:col-end-3"
                              role="Member"
                              name="Leon">
                    <StaticImage className="h-full w-full" src="../images/team-members/Leon.png" alt="Leon"/>
                  </TeamMember>

                  <TeamMember className="lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2"
                              role="Member"
                              name="Ben">
                    <StaticImage className="h-full w-full" src="../images/team-members/Ben.png" alt="Ben"/>
                  </TeamMember>

                  <TeamMember className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2"
                              role="Member"
                              name="Jan">
                    <StaticImage className="h-full w-full" src="../images/team-members/Jan.png" alt="Jan"/>
                  </TeamMember>
                </div>
              </ContentSection>


              <ContentSection title="Working together to create something cool." variant="dark">
                <VideoPlayer updateCursor={ updateCursor } src={ DummyVideo } type="video/mp4"/>
              </ContentSection>
            </div>

            <div ref={ contactSectionRef }>
              <HeaderSection title="interested?"
                             subText="Show us your project and we'll find a way."
                             subElement={
                               <ButtonTemplate>
                                 <a className="block w-56 rounded-full font-medium tracking-tight z-1 py-2.5 md:w-64 md:py-3 lg:w-80 xl:w-[24rem]"
                                    href="mailto:abc@example.com">
                                   Contact us
                                 </a>
                               </ButtonTemplate>
                             }/>
            </div>
          </main>

          <Footer items={ navItems }/>
        </SmoothScroll>

      </LazyMotion>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>
