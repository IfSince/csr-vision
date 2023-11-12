import { motion } from 'framer-motion'
import { DEFAULT_REVEAL_ANIMATION } from './config.js'

const variants = {
  hidden: { y: '120%' },
  visible: { y: 0 },
}

export const LineReveal = ({ text, delay = 0 }) =>
  <motion.div className="flex flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={ { amount: 'all', once: true } }>
    {
      text?.split(' ').map((word, index) =>
        <div style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } } key={ index }>
          <motion.span className="block"
                       variants={ variants }
                       transition={ { delay, ...DEFAULT_REVEAL_ANIMATION } }>
            { word }&nbsp;
          </motion.span>
        </div>,
      )
    }
  </motion.div>