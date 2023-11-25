import { m } from 'framer-motion'
import useMouse from '@react-hook/mouse-position'
import { theme } from '../../tailwind.config.js'

export const Cursor = ({ containerRef, cursorVariant, cursorElement = <></> }) => {
  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY
  }

  const variants = {
    default: {
      opacity: 0,
      height: 15,
      width: 15,
      backgroundColor: theme.colors.green['800'],
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    video: {
      opacity: 1,
      backgroundColor: theme.colors.green['800'],
      color: theme.colors.white,
      height: 100,
      width: 100,
      x: mouseXPosition - 50,
      y: mouseYPosition - 50,
    },
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  return (
    <m.div
      className="pointer-events-none fixed top-0 left-0 flex h-3 w-3 flex-row items-center justify-center rounded-full text-base z-[9999]"
      variants={ variants }
      animate={ cursorVariant }
      transition={ spring }>
      { cursorElement }
    </m.div>
  )
}