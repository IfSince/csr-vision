import { motion } from 'framer-motion'

const variants = {
  hidden: {
    y: '120%',
  },
  visible: {
    y: 0,
  },
}

export const TextReveal = ({ text, delay = 0 }) =>
  <motion.div className="flex flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={ { amount: 'all', once: true } }>
    {
      text.split(' ').map((word, index) =>
        <div style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } }
             key={ `${ word }${ index }` }
        >
          <motion.span className="block"
                       variants={ variants }
                       transition={ { delay, duration: 0.7, ease: [.29, .41, .33, 1] } }>
            { word }&nbsp;
          </motion.span>
        </div>,
      )
    }
  </motion.div>