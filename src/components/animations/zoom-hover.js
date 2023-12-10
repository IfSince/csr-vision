import { m } from 'framer-motion'
import { REVEAL_TRANSITION } from './config.js'
import { twMerge } from 'tailwind-merge'

const config = (trigger) => {
  const config = {
    variants: {
      zoom: { scale: 1.05 },
    },
    transition: { ...REVEAL_TRANSITION, duration: 0.5 },
  }

  return trigger === 'self' ? { ...config, whileHover: 'zoom' } : config
}

export const ZoomHover = ({ trigger = 'self', children, className = '' }) =>
  <m.div className={ twMerge("h-full w-full", className) } { ...config(trigger) }>
    { children }
  </m.div>