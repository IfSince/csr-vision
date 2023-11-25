import { m } from 'framer-motion'
import { DEFAULT_REVEAL_TRANSITION } from './config.js'

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

export const LineReveal = ({ text }) => {

  return (
    <m.div className="flex flex-wrap [--opacity:0] [--y:0] sm:[--y:120%] sm:[--opacity:1]"
           initial="hidden"
           whileInView="visible"
           viewport={ { amount: 'all', once: true } }>
      {
        text?.split(' ').map((word, index) =>
          <div style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } } key={ index }>
            <m.span className="block"
                    variants={ variants }
                    transition={ DEFAULT_REVEAL_TRANSITION }>
              { word }&nbsp;
            </m.span>
          </div>,
        )
      }
    </m.div>
  )
}