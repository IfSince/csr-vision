import { motion } from 'framer-motion'

export const AnimatedHeader = ({ title }) => {
  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: '0.2em',
    },
    visible: {
      opacity: 1,
      y: '0',
      transition: {
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return title.split(' ').map((word, index) =>
    <motion.span className="inline-block whitespace-nowrap"
                 key={ `${ word }${ index }` }
                 aria-hidden={ true }
                 initial="hidden"
                 whileInView="visible"
                 variants={ wordAnimation }
                 transition={ {
                   delayChildren: index * 0.25,
                   staggerChildren: 0.05,
                 } }
    >
      {
        title.split('').map((character, index) =>
          <motion.span className="inline-block"
                       key={ `${ character }${ index }` }
                       aria-hidden={ true }
                       variants={ characterAnimation }
          >
            { character }
          </motion.span>)
      }
    </motion.span>)
}