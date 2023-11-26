import { m } from 'framer-motion'
import useMouse from '@react-hook/mouse-position'
import { theme } from '../../../tailwind.config.js'

export const Cursor = ({ containerRef, cursorVariant, cursorElement = <></> }) => {
  const mouse = useMouse(containerRef, { enterDelay: 100, leaveDelay: 100 })

  const mouseX = mouse.x ?? 0
  const mouseY = mouse.y ?? 0

  const variants = {
    default: {
      opacity: 1,
      height: 15,
      width: 15,
      backgroundColor: theme.colors.green['800'],
      x: mouseX,
      y: mouseY,
    },
    video: {
      opacity: 1,
      backgroundColor: theme.colors.green['800'],
      color: theme.colors.white,
      height: 100,
      width: 100,
      x: mouseX - 50,
      y: mouseY - 50,
    },
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  return (
    <m.div
      className="pointer-events-none absolute flex flex-row items-center justify-center rounded-full z-[9999]"
      variants={ variants }
      animate={ cursorVariant }
      transition={ spring }>
      { cursorElement }
    </m.div>
  )
}