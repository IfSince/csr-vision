import { useState } from 'react'
import { PlayIcon } from '../icons/play-icon.js'
import { PauseIcon } from '../icons/pause-icon.js'
import { VideoPlayer } from './video-player.js'

export const VideoPlayerCustomCursor = ({ updateCursor, children }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const updateCursorWhenToggling = (variant) => updateCursor(
    isPlaying
      ? <PauseIcon className="h-10 w-10 cursor-pointer fill-white"/>
      : <PlayIcon className="h-12 w-12 cursor-pointer fill-white"/>,
    variant,
  )

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
      <VideoPlayer className="w-full rounded-md lg:cursor-none"
                   controls={ true }
                   controlsList="nodownload"
                   onPlay={ onPlay }
                   onPause={ onPause }
                   onMouseEnter={ onVideoEnter }
                   onMouseLeave={ onVideoLeave }>
        { children }
      </VideoPlayer>
  )
}