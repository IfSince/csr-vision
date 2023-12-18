import { AnimatePresence, m } from 'framer-motion'
import { HeaderWrapper } from '../../layout/wrapper/header-wrapper.js'
import { IconButton } from '../../buttons/icon-button.js'
import { ContentWrapper } from '../../layout/wrapper/content-wrapper.js'
import { ArrowLeftIcon } from '../../icons/arrow-left-icon.js'
import { ArrowRightIcon } from '../../icons/arrow-right-icon.js'
import { LargeText } from '../../typography/large-text.js'
import { CloseIcon } from '../../icons/close-icon.js'
import { ZoomHover } from '../../animations/zoom-hover.js'
import { REVEAL_TRANSITION, SLIDE_IN_TRANSITION } from '../../animations/config.js'
import { H2 } from '../../typography/h2.js'
import { useEffect, useState } from 'react'

const variants = {
  visible: { y: 0 },
  hidden: { y: '120%' },
}

const skillVariants = {
  fadeOut: {
    y: '-120%',
  },
  fadeIn: {
    y: '0',
  },
  initial: {
    y: '120%',
  },
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

  const [selectedSkill, setSelectedSkill] = useState(null)

  useEffect(() => setSelectedSkill(skills[0]), [setSelectedSkill, skills])

  return (
    <m.div className="fixed w-full overflow-y-scroll overscroll-y-contain bg-white h-[100vh] no-scrollbar z-[9999]"
           variants={ variants }
           animate={ visible ? 'visible' : 'hidden' }
           initial="hidden"
           transition={ SLIDE_IN_TRANSITION }>
      <HeaderWrapper spacingType="content"
                     className="flex-row flex-wrap xxs:flex-nowrap items-end justify-between gap-y-4 pt-20 pb-4 md:pt-20 xl:pt-20 2xl:pt-20">
        <div className="grid w-full 2xl:grid-cols-10">
          <H2 animated={ false } className="text-3xl-scaling 2xl:col-span-3">{ name }</H2>
          <div className="relative w-full clip-path lg:mx-14 2xl:col-span-6 2xl:col-start-4">
            <AnimatePresence initial={ false }>
              <m.span className="absolute top-0 left-0 block font-bold lowercase tracking-tighter font-undotted leading-[1.05em] text-3xl-scaling"
                      variants={ skillVariants }
                      initial="initial"
                      animate="fadeIn"
                      exit="fadeOut"
                      key={ selectedSkill?.alt }
                      transition={ REVEAL_TRANSITION }>
                { selectedSkill?.alt }
              </m.span>
            </AnimatePresence>
          </div>
          <div className="flex items-end justify-end 2xl:col-start-10">
            <IconButton size="md-scaling" onClick={ toggleVisible }>
              <span className="sr-only">Close panel</span>
              <CloseIcon/>
            </IconButton>
          </div>
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
          <div className="mb-6 flex flex-wrap gap-2 sm:gap-4">
            {
              skills.map(skill =>
                <button title={ skill.alt }
                        key={ skill.alt }
                        onClick={ () => setSelectedSkill(skill) }
                        className={ `${ skill !== selectedSkill && 'opacity-40' } transition-opacity` }>
                  <ZoomHover className="flex h-14 w-14 items-center justify-center rounded-full border border-black/30">
                    <img src={ skill.icon } className="h-7 w-7" alt={ skill.alt }/>
                  </ZoomHover>
                </button>,
              )
            }
          </div>
          <LargeText className="block max-w-lg sm:max-w-xl xl:max-w-3xl">{ description }</LargeText>
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