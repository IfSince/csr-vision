import { m } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { theme } from '../../../tailwind.config.js'

const variants = {
  hover: { scale: 1.1, backgroundColor: theme.colors.black, color: theme.colors.white, fill: theme.colors.white },
  tap: { scale: 0.95, backgroundColor: theme.colors.black, color: theme.colors.white, fill: theme.colors.white },
}

export const ButtonTemplate = ({ onClick = () => void 0, className = '', children }) => {
  return (
    <m.button className={ twMerge(
      'w-fit select-none touch-none border border-black/30 rounded-full bg-white flex items-center justify-center font-medium tracking-tight',
      className,
    ) }
              whileHover="hover"
              whileTap="tap"
              variants={ variants }
              onClick={ onClick }>
      { children }
    </m.button>
  )
}