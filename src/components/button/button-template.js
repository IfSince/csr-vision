import { m } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { theme } from '../../../tailwind.config.js'

const btnVariants = {
  hover: { scale: 1.1, backgroundColor: theme.colors.black, color: theme.colors.white, fill: theme.colors.white },
  tap: { scale: 0.95, backgroundColor: theme.colors.black, color: theme.colors.white, fill: theme.colors.white },
}

export const ButtonTemplate = ({ className, children }) => {
  return (
    <m.button className={ twMerge('select-none touch-none border border-black rounded-full bg-white', className) }
                   whileHover="hover"
                   whileTap="tap"
                   variants={ btnVariants }>
      { children }
    </m.button>
  )
}