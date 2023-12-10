import { m } from 'framer-motion'
import { HeaderWrapper } from '../../layout/wrapper/header-wrapper.js'
import { H3 } from '../../typography/h3.js'
import { IconButton } from '../../buttons/icon-button.js'
import { ContentWrapper } from '../../layout/wrapper/content-wrapper.js'
import { ArrowLeftIcon } from '../../icons/arrow-left-icon.js'
import { ArrowRightIcon } from '../../icons/arrow-right-icon.js'
import { LargeText } from '../../typography/large-text.js'
import { CloseIcon } from '../../icons/close-icon.js'
import { ZoomHover } from '../../animations/zoom-hover.js'

const variants = {
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: [.44, .71, .27, 1],
    }
  },
  hidden: {
    y: '120%',
    transition: {
      duration: 0.4,
      ease: [.44, .71, .27, 1],
    },
  },
}

export const TeamMemberDetails = ({ name, image, description, visible, toggleVisible, setSelectedTeamMember, members = [] }) => {
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
    <m.div className="fixed h-screen w-full overflow-y-scroll overscroll-y-contain bg-white no-scrollbar z-[9999]"
           variants={ variants }
           animate={ visible ? 'visible' : 'hidden' }
           initial="hidden">
      <HeaderWrapper spacingType="content" className="flex-row items-center justify-between">
        <H3 animated={ false }>{ name }</H3>
        <IconButton size="md-scaling" onClick={ toggleVisible }>
          <CloseIcon/>
        </IconButton>
      </HeaderWrapper>

      <ContentWrapper className="grid w-full grid-cols-1 sm:grid-cols-7 2xl:grid-cols-10">
        <div className="col-span-1 mb-10 flex justify-end gap-4 sm:col-span-2 sm:col-start-6 lg:col-span-1 lg:col-start-7 2xl:col-start-10">
          <IconButton size="md-scaling" onClick={ selectPrevious }>
            <ArrowLeftIcon/>
          </IconButton>

          <IconButton size="md-scaling" onClick={ selectNext }>
            <ArrowRightIcon/>
          </IconButton>
        </div>

        <div className="mb-8 sm:col-span-5 sm:row-start-1 lg:col-span-4 lg:col-start-3 lg:mx-8 2xl:col-span-5 2xl:col-start-5">
          <LargeText className="block max-w-lg sm:max-w-xl xl:max-w-2xl">{ description }</LargeText>
        </div>

        <div className="col-start-1 w-full sm:col-span-4 lg:col-span-2 lg:col-start-1 lg:row-start-1 2xl:col-span-4">
          <div className="h-full max-w-sm overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
            <ZoomHover>
              { image }
            </ZoomHover>
          </div>
        </div>
      </ContentWrapper>
    </m.div>
  )
}