import { H4 } from '../typography/h4.js'
import { DefaultText } from '../typography/default-text.js'
import { motion } from 'framer-motion'

const item = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1 },
}

export const Attribute = ({ title, description }) =>
  <motion.article className="mb-28 flex flex-col items-center text-center max-w-xxs sm:max-w-sm lg:max-w-xxs lg:mb-20 xl:max-w-sm"
                  variants={ item }
                  transition={ { duration: 0.7, ease: [.29, .41, .33, 1] } }>
    <div className="h-20 w-28 rounded-md bg-green-800"></div>
    <H4 className="mt-[1.25em] mb-[0.35em]">{ title }</H4>
    <DefaultText>{ description }</DefaultText>
  </motion.article>