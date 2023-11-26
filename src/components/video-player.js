import { useState } from 'react'
import { PlayIcon } from './icons/play-icon.js'
import { PauseIcon } from './icons/pause-icon.js'

const PLAY_ICON = <PlayIcon className="h-12 w-12 cursor-pointer fill-white"/>
const PAUSE_ICON = <PauseIcon className="h-10 w-10 cursor-pointer fill-white"/>

export const VideoPlayer = ({ src, type, updateCursor }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const updateCursorWhenToggling = (variant) => updateCursor(isPlaying ? PAUSE_ICON : PLAY_ICON, variant)

  const onVideoEnter = () => updateCursorWhenToggling('video')
  const onVideoLeave = () => updateCursor(<></>, 'default')

  const onPlay = () => {
    setIsPlaying(true)
    updateCursorWhenToggling()
  }

  const onPause = () => {
    setIsPlaying(false)
    updateCursorWhenToggling()
  }

  return (
    <>
      <video className="w-full rounded-md lg:cursor-none"
             controls={ true }
             controlsList="nodownload"
             onPlay={ onPlay }
             onPause={ onPause }
             onMouseEnter={ onVideoEnter }
             onMouseLeave={ onVideoLeave }>
        <source src={ src } type={ type }/>
      </video>
    </>

  )
}