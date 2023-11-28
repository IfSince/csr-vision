import { Seo } from '../components/seo.js'
import { HeaderSection } from '../components/layout/header-section.js'
import { domAnimation, LazyMotion, useScroll } from 'framer-motion'
import { H1 } from '../components/typography/h1.js'
import { ScrollButton } from '../components/button/scroll-button.js'
import { DefaultText } from '../components/typography/default-text.js'
import { Attributes } from '../components/layout/attributes.js'
import { ContentSection } from '../components/layout/content-section.js'
import { Header } from '../components/header/header.js'
import { SmoothScroll } from '../components/layout/smooth-scroll.js'
import { ButtonTemplate } from '../components/button/button-template.js'
import { useRef } from 'react'
import { scrollToTarget } from '../util/scroll-to-target.js'
import { Footer } from '../components/footer/footer.js'
import { VideoPlayer } from '../components/video-player.js'
import DummyVideo from '../videos/video.mp4'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { IsMobileContext } from '../util/is-mobile-context.js'
import { CursorWrapper } from '../components/cursor/cursor-wrapper.js'
import { Cards } from '../components/layout/cards.js'
import { TeamMembers } from '../components/layout/team-members.js'
import HeroVideo from '../videos/hero_video_upscaled.mp4'


/* TODO
* Hero Section cooler (z. B. Slider)
*/

const IndexPage = () => {
  const breakpoints = useBreakpoint()

  const { scrollY } = useScroll()

  const ourVisionSectionRef = useRef(null)
  const aboutUsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const navItems = [
    { index: 0, text: 'home', mobileOnly: true, onClick: () => window.scrollTo({ top: 0 }) },
    { index: 1, text: 'csr vision', onClick: () => scrollToTarget(ourVisionSectionRef, scrollY) },
    { index: 2, text: 'who we are', onClick: () => scrollToTarget(aboutUsSectionRef, scrollY) },
    { index: 3, text: 'contact', onClick: () => scrollToTarget(contactSectionRef, scrollY) },
  ]

  return (
    <IsMobileContext.Provider value={ breakpoints.lg }>
      <LazyMotion features={ domAnimation } strict>
        <Header items={ navItems }/>

        <SmoothScroll>
          <main className="relative">
            <section className="mb-16 flex h-screen flex-col items-end pb-10 md:mb-24">
              <div className="relative w-full overflow-hidden rounded-b-2xl bg-white grow-9999 md:rounded-b-3xl lg:rounded-b-4xl xl:rounded-b-5xl">
                <video className="h-full w-full rounded-b-2xl border-green-500 object-cover md:rounded-b-3xl lg:rounded-b-4xl xl:rounded-b-5xl"
                       autoPlay loop muted playsInline onContextMenu={(e) => e.preventDefault()}>
                  <source src={ HeroVideo } type="video/mp4"/>
                </video>
              </div>

              <div className="mt-3 flex w-full flex-col gap-x-12 pb-6 horizontal-spacing md:flex-row lg:justify-between lg:pb-0">
                <H1 className="flex flex-col mb-[0.3em] lg:mb-0">
                  <span>designing</span>
                  <span>responsibility</span>
                </H1>

                <div className="flex flex-col">
                  <DefaultText className="mt-1 max-w-xs self-start sm:max-w-sm md:self-end xl:max-w-md">
                    <span className="font-bold text-green-500">csr vision</span> hilft Unternehmen dabei, CSR als Chance zu begreifen.
                    Durch Reduzierung der Komplexität, Kuratieren und crossmediale Aufbereitung verwandeln wir CSR-Berichte, die sonst nur von Analysten und
                    Stakeholdern gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden begeistern wird.
                  </DefaultText>

                  <ScrollButton className="mt-auto hidden self-end lg:flex" onClick={ () => scrollToTarget(ourVisionSectionRef, scrollY, 'smooth') }/>
                </div>
              </div>

              <div className="flex w-full justify-center">
                <ScrollButton className="mt-auto lg:hidden" onClick={ () => scrollToTarget(ourVisionSectionRef, scrollY, 'smooth') }/>
              </div>
            </section>

            <div ref={ ourVisionSectionRef }>
              <HeaderSection title="our csr vision"
                             subText="CSR als Chance begreifen und in die DNA ihrer Kommunikation integrieren."/>

              <ContentSection className="flex w-full flex-col items-center">
                <Attributes/>
              </ContentSection>

              <ContentSection className="grid w-fit grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:w-fit"
                              title="Gemeinsam deine Corporate Social Responsibility gestalten."
                              variant="dark">
                <Cards/>
              </ContentSection>
            </div>

            <div ref={ aboutUsSectionRef }>
              <HeaderSection title="who we are"
                             subText="Ein hart designendes Team von Spezialisten aus den Generationen X - Z."
                             variant="reversed"/>

              <ContentSection className="flex justify-end" subSection={ true }>
                <TeamMembers/>
              </ContentSection>

              <CursorWrapper>
                {
                  ({ updateCursor }) => (
                    <ContentSection title="Space für Image Film oder ähnliches Videotechnisch." variant="dark">
                      <VideoPlayer src={ DummyVideo }
                                   type="video/mp4"
                                   updateCursor={ updateCursor }/>
                    </ContentSection>
                  )
                }
              </CursorWrapper>
            </div>

            <div ref={ contactSectionRef }>
              <HeaderSection title="interested?"
                             subText="Show us your project and we'll find a way."
                             subElement={
                               <ButtonTemplate>
                                 <a className="block w-56 rounded-full font-medium tracking-tight z-1 py-2.5 md:w-64 md:py-3 lg:w-80 xl:w-[24rem]"
                                    href="mailto:abc@example.com">
                                   Schreib uns
                                 </a>
                               </ButtonTemplate>
                             }/>
            </div>
          </main>

          <Footer items={ navItems }/>
        </SmoothScroll>
      </LazyMotion>
    </IsMobileContext.Provider>
  )
}

export default IndexPage

export const Head = () => <Seo title="designing responsibility"/>
