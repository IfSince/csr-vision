import { m } from 'framer-motion'
import { REVEAL_TRANSITION } from './config.js'

const variants = {
  hidden: {
    opacity: 'var(--opacity, 0)',
    y: 'var(--y, 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const LineReveal = ({ children }) => {
  return (
    <m.div className="flex flex-wrap [--opacity:0] [--y:0] sm:[--y:120%] sm:[--opacity:1]"
           initial="hidden"
           whileInView="visible"
           viewport={ { amount: 'all', once: true } }>
      {
        children?.split(' ').map((word, index) =>
          <div className="clip-path" key={ index }>
            <m.div variants={ variants } transition={ REVEAL_TRANSITION }>
              { word }&nbsp;
            </m.div>
          </div>,
        )
      }
    </m.div>
  )
}