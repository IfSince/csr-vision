import { m } from 'framer-motion'
import { DEFAULT_REVEAL_TRANSITION } from './config.js'

export const ZoomHover = ({ children }) =>
  <m.div className="h-full w-full"
         whileHover={ { scale: 1.05 } }
         transition={ { ...DEFAULT_REVEAL_TRANSITION, duration: 0.5 } }>
    { children }
  </m.div>