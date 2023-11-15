import { DEFAULT_REVEAL_ANIMATION } from './config.js'

const variants = {
  hidden: { y: '40%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export const TextReveal = ({ text, delay }) =>
  <m.span className="flex flex-wrap"
               initial="hidden"
               whileInView="visible"
               variants={ variants }
               viewport={ { once: true } }
               transition={ { delay, ...DEFAULT_REVEAL_ANIMATION } }>
    { text }
  </m.span>