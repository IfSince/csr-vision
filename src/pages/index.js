import { Seo } from '../components/seo.js'
import { domAnimation, LazyMotion, useCycle, useScroll } from 'framer-motion'
import { H1 } from '../components/typography/h1.js'
import { ScrollButton } from '../components/buttons/scroll-button.js'
import { DefaultText } from '../components/typography/default-text.js'
import { Header } from '../components/header/header.js'
import { useRef, useState } from 'react'
import { scrollToTarget } from '../util/scroll-to-target.js'
import { Footer } from '../components/footer/footer.js'
import DummyVideo from '../videos/video.mp4'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { IsMobileContext } from '../util/is-mobile-context.js'
import { CursorTracker } from '../components/cursor/cursor-tracker.js'
import HeroVideo from '../videos/hero_video_upscaled.mp4'
import { TEAM_MEMBERS } from '../data/team-members.js'
import { VideoPlayerCustomCursor } from '../components/video/video-player-custom-cursor.js'
import { VideoPlayer } from '../components/video/video-player.js'
import { TextButton } from '../components/buttons/text-button.js'
import { HeaderSection } from '../components/layout/sections/header-section.js'
import { HeaderSectionReversed } from '../components/layout/sections/header-section-reversed.js'
import { ContentSection } from '../components/layout/sections/content-section.js'
import { TeamMemberDetails } from '../components/index/team-members/team-member-details.js'
import { SmoothScroll } from '../components/smooth-scroll.js'
import { TeamMembers } from '../components/index/team-members/team-members.js'
import { Services } from '../components/index/services/services.js'
import { Features } from '../components/index/features/features.js'

/*
* TODO
* Clean-up
* Optional: Disable page scroll when other elements (mobile-menu, member-details) are open
* Blog Section
* */

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

  const [teamMemberPanelVisible, toggleTeamMemberPanelVisible] = useCycle(false, true)
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)

  return (
    <IsMobileContext.Provider value={ breakpoints.lg }>
      <LazyMotion features={ domAnimation } strict>
        <Header items={ navItems }/>

        <TeamMemberDetails { ...selectedTeamMember }
                           visible={ teamMemberPanelVisible }
                           toggleVisible={ toggleTeamMemberPanelVisible }
                           setSelectedTeamMember={ setSelectedTeamMember }
                           members={ TEAM_MEMBERS }/>

        <SmoothScroll>
          <main className="relative">
            <section className="mb-16 flex h-screen flex-col items-end pb-10 md:mb-24">
              <div className="w-full overflow-hidden rounded-b-2xl bg-white grow-9999 md:rounded-b-3xl lg:rounded-b-4xl xl:rounded-b-5xl">
                <VideoPlayer className="h-full w-full object-cover" autoPlay loop muted playsInline>
                  <source src={ HeroVideo } type="video/mp4"/>
                </VideoPlayer>
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

                  <ScrollButton className="hidden self-end lg:flex" target={ ourVisionSectionRef } scrollY={ scrollY }/>
                </div>
              </div>

              <div className="flex w-full justify-center lg:hidden">
                <ScrollButton target={ ourVisionSectionRef } scrollY={ scrollY }/>
              </div>
            </section>

            <div ref={ ourVisionSectionRef }>
              <HeaderSection title="our csr vision"
                             subTitle="CSR als Chance begreifen und in die DNA ihrer Kommunikation integrieren."/>

              <ContentSection className="pt-24 md:pt-32" contentWrapperClassName="flex w-full items-center justify-center">
                <Features/>
              </ContentSection>

              <ContentSection theme="dark"
                              title="Gemeinsam deine Corporate Social Responsibility gestalten."
                              contentWrapperClassName="grid w-fit grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 xl:w-full xl:grid-cols-3 2xl:w-fit">
                <Services/>
              </ContentSection>
            </div>

            <div ref={ aboutUsSectionRef }>
              <HeaderSectionReversed title="who we are"
                                     subTitle="Ein hart designendes Team von Spezialisten aus den Generationen X - Z."/>

              <ContentSection className="flex justify-end">
                <TeamMembers teamMembers={ TEAM_MEMBERS }
                             setSelectedTeamMember={ setSelectedTeamMember }
                             toggleTeamMemberPanelVisible={ toggleTeamMemberPanelVisible }/>
              </ContentSection>

              <CursorTracker>
                {
                  ({ updateCursor }) => (
                    <ContentSection theme="dark" title="Space für Image Film oder ähnliches Videotechnisch.">
                      <VideoPlayerCustomCursor updateCursor={ updateCursor }>
                        <source src={ DummyVideo } type="video/mp4"/>
                      </VideoPlayerCustomCursor>
                    </ContentSection>
                  )
                }
              </CursorTracker>
            </div>

            <div ref={ contactSectionRef }>
              <HeaderSection title="interested?"
                             subTitle="Show us your project and we'll find a way.">
                <a className="mt-8 block w-fit md:mt-10 lg:mt-12"
                   href="mailto:abc@example.com">
                  <TextButton>Schreib uns</TextButton>
                </a>
              </HeaderSection>
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
