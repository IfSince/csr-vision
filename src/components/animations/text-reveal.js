import { motion } from 'framer-motion'

const variants = {
  hidden: {
    y: '120%',
  },
  visible: {
    y: 0,
  },
}

export const TextReveal = ({ text }) =>
  <motion.div className="flex flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={ { amount: 'all', once: true } }>
    {
      text.split(' ').map((character, index) =>
        <div style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } }
             key={ `${ character }${ index }` }
        >
          <motion.span className="block"
                       variants={ variants }
                       transition={ { duration: 0.7, ease: [.29, .41, .33, 1] } }>
            { character }&nbsp;
          </motion.span>
        </div>,
      )
    }
  </motion.div>