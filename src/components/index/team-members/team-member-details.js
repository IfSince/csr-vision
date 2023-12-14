import { m } from 'framer-motion'
import { HeaderWrapper } from '../../layout/wrapper/header-wrapper.js'
import { IconButton } from '../../buttons/icon-button.js'
import { ContentWrapper } from '../../layout/wrapper/content-wrapper.js'
import { ArrowLeftIcon } from '../../icons/arrow-left-icon.js'
import { ArrowRightIcon } from '../../icons/arrow-right-icon.js'
import { LargeText } from '../../typography/large-text.js'
import { CloseIcon } from '../../icons/close-icon.js'
import { ZoomHover } from '../../animations/zoom-hover.js'
import { SLIDE_IN_TRANSITION } from '../../animations/config.js'
import { H2 } from '../../typography/h2.js'

const variants = {
  visible: { y: 0 },
  hidden: { y: '120%' },
}

export const TeamMemberDetails = ({ name, image, description, skills = [], visible, toggleVisible, setSelectedTeamMember, members = [] }) => {
  const selectPrevious = () => {
    const curr = members.findIndex(member => member.name === name)
    const newIndex = curr === 0 ? members.length - 1 : curr - 1
    setSelectedTeamMember(members[newIndex])
  }

  const selectNext = () => {
    const curr = members.findIndex(member => member.name === name)
    const newIndex = curr >= members.length - 1 ? 0 : curr + 1
    setSelectedTeamMember(members[newIndex])
  }

  return (
    <m.div className="fixed w-full overflow-y-scroll overscroll-y-contain bg-white h-[100vh] no-scrollbar z-[9999]"
           variants={ variants }
           animate={ visible ? 'visible' : 'hidden' }
           initial="hidden"
           transition={ SLIDE_IN_TRANSITION }>
      <HeaderWrapper spacingType="content" className="flex-row flex-wrap xxs:flex-nowrap items-center justify-between gap-y-4 pt-20 pb-4 md:pt-20 xl:pt-20 2xl:pt-20">
        <H2 animated={ false } className="text-3xl-scaling">{ name }</H2>
        <div>
          <IconButton size="md-scaling" onClick={ toggleVisible }>
            <span className="sr-only">Close panel</span>
            <CloseIcon/>
          </IconButton>
        </div>
      </HeaderWrapper>

      <ContentWrapper className="mb-20 grid w-full grid-cols-1 sm:grid-cols-7 lg:mb-10 2xl:grid-cols-10">
        <div className="col-span-1 mb-10 flex justify-end gap-4 sm:col-span-2 sm:col-start-6 sm:mb-0 lg:col-span-1 lg:col-start-7 2xl:col-start-10">
          <IconButton size="md-scaling" onClick={ selectPrevious }>
            <span className="sr-only">Select previous team member</span>
            <ArrowLeftIcon/>
          </IconButton>

          <IconButton size="md-scaling" onClick={ selectNext }>
            <span className="sr-only">Select next team member</span>
            <ArrowRightIcon/>
          </IconButton>
        </div>

        <div className="mb-8 sm:col-span-5 sm:row-start-1 lg:col-span-4 lg:col-start-3 lg:mx-14 lg:mb-0 2xl:col-span-6 2xl:col-start-4">
          <LargeText className="block max-w-lg sm:max-w-xl xl:max-w-3xl">{ description }</LargeText>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-4">
            {
              skills.map(skill =>
                <ZoomHover className="flex h-12 w-12 items-center justify-center rounded-full border border-black/30 md:h-16 md:w-16" key={ skill.alt }>
                  <img src={ skill.icon } className="h-5 w-5 md:h-8 md:w-8" alt={ skill.alt }/>
                </ZoomHover>,
              )
            }
          </div>
        </div>

        <div className="col-start-1 w-full overflow-hidden sm:col-span-4 lg:col-span-2 lg:col-start-1 lg:row-start-1 2xl:col-span-3">
          <div className="h-full overflow-hidden rounded-sm bg-black max-w-[22rem] aspect-[1/1.25] lg:h-fit">
            <ZoomHover>
              { image }
            </ZoomHover>
          </div>
        </div>
      </ContentWrapper>
    </m.div>
  )
}