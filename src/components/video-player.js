import { useRef, useState } from 'react'
import { PlayIcon } from './icons/play-icon.js'
import { PauseIcon } from './icons/pause-icon.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

export const VideoPlayer = ({ src, type, updateCursor }) => {
  const ref = useRef(null)
  const breakpoints = useBreakpoint()
  const isMobile = breakpoints.lg

  const [videoHoverElement, setVideoHoverElement] = useState(<PlayIcon className="h-12 w-12 cursor-pointer fill-white"/>)

  const onVideoEnter = () => {
    !isMobile && updateCursor(videoHoverElement, 'video')
  }

  const onVideoLeave = () => {
    updateCursor(<></>, 'default')
  }

  return (
    <>
      <video ref={ ref }
             className="w-full rounded-md lg:cursor-none"
             controls={ true }
             controlsList="nodownload"
             onPlay={ () => {
               setVideoHoverElement(<PauseIcon className="h-10 w-10 cursor-pointer fill-white"/>)
               !isMobile && updateCursor(<PauseIcon className="h-10 w-10 cursor-pointer fill-white"/>)
             } }
             onPause={ () => {
               setVideoHoverElement(<PlayIcon className="h-12 w-12 cursor-pointer fill-white"/>)
               !isMobile && updateCursor(<PlayIcon className="h-12 w-12 cursor-pointer fill-white"/>)
             } }
             onMouseEnter={ onVideoEnter }
             onMouseLeave={ onVideoLeave }>
        <source src={ src } type={ type }/>
      </video>
    </>

  )
}