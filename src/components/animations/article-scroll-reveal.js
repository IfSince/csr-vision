import { m } from 'framer-motion'
import { DEFAULT_REVEAL_TRANSITION } from './config.js'

const config = {
  variants: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '0px 0px -100px 0px' },
  transition: { ease: DEFAULT_REVEAL_TRANSITION.ease },
}

export const ArticleScrollReveal = ({ children, ...props }) =>
  <m.article { ...config } { ...props }>
    { children }
  </m.article>