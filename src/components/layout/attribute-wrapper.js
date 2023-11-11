import { Attribute } from '../cards/attribute.js'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const AttributeWrapper = () =>
  <motion.div className="flex w-full flex-col items-center justify-between max-w-8xl lg:flex-row"
              variants={ container }
              initial="hidden"
              whileInView="visible"
              viewport={ { once: true, margin: '0px 0px -100px 0px' } }
  >
    <Attribute title="Design"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

    <Attribute title="Design"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

    <Attribute title="Design"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua. At vero eos et accusam."/>

  </motion.div>