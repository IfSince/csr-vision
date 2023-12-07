import { m } from 'framer-motion'
import { ButtonTemplate } from '../button/button-template.js'
import { ImageHover } from '../animations/image-hover.js'
import { DEFAULT_REVEAL_TRANSITION } from '../animations/config.js'
import { ContentSection } from '../layout/content-section.js'
import { ArrowLeftIcon } from '../icons/arrow-left-icon.js'
import { ArrowRightIcon } from '../icons/arrow-right-icon.js'
import { CloseIcon } from '../icons/close-icon.js'
import { LargeText } from '../typography/large-text.js'

const variants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: '120%',
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

  const closeButton =
    <ButtonTemplate className="flex h-12 w-12 items-center justify-center rounded-full fill-black md:h-14 md:w-14"
                    onClick={ toggleVisible }>
      <CloseIcon className="h-5 w-5 md:h-6 md:w-6"/>
    </ButtonTemplate>

  return (
    <>
      <m.div className="fixed h-screen w-full overflow-y-scroll overscroll-y-contain bg-white no-scrollbar z-[9999]"
             variants={ variants }
             animate={ visible ? 'visible' : 'hidden' }
             initial="hidden"
             transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease } }>
        <ContentSection outerClassName="w-full lg:!pb-12"
                        className="relative flex w-full"
                        title={ name }
                        titleWrapperClassName="flex flex-row justify-between items-center"
                        titleElement={ closeButton }>

          <div className="grid w-full grid-cols-1 sm:grid-cols-7 2xl:grid-cols-10">

            <div className="col-span-1 mb-10 flex justify-end gap-4 sm:col-span-2 sm:col-start-6 lg:col-span-1 lg:col-start-7 2xl:col-start-10">
              <ButtonTemplate className="flex h-12 w-12 items-center justify-center rounded-full fill-black md:h-14 md:w-14" onClick={ selectPrevious }>
                <ArrowLeftIcon className="h-5 w-5 md:h-6 md:w-6"/>
              </ButtonTemplate>
              <ButtonTemplate className="flex h-12 w-12 items-center justify-center rounded-full fill-black md:h-14 md:w-14" onClick={ selectNext }>
                <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6"/>
              </ButtonTemplate>
            </div>

            <div className="mb-8 sm:col-span-5 sm:row-start-1 lg:col-span-4 lg:col-start-3 lg:mx-8 2xl:col-span-5 2xl:col-start-5">
              <LargeText className="block max-w-lg sm:max-w-xl xl:max-w-2xl">{ description }</LargeText>
            </div>

            <div className="col-start-1 w-full sm:col-span-4 lg:col-span-2 lg:col-start-1 lg:row-start-1 2xl:col-span-4">
              <div className="h-full max-w-sm overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
                <ImageHover>
                  { image }
                </ImageHover>
              </div>
            </div>

          </div>
        </ContentSection>
      </m.div>
    </>
  )
}
