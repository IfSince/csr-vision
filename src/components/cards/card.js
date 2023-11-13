import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { DEFAULT_REVEAL_ANIMATION } from '../animations/config.js'
import { H4 } from '../typography/h4.js'
import { DefaultText } from '../typography/default-text.js'

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export const Card = ({ title, description, className }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.article className={ `relative bg-green-800/50 rounded-md px-8 pt-8 pb-10 md:px-12 md:pt-12 md:pb-14 md:pb-20 max-w-[30rem] group ${ className }` }
                    variants={ item }
                    initial="hidden"
                    whileInView="visible"
                    transition={ { ease: DEFAULT_REVEAL_ANIMATION.ease } }
                    viewport={ { once: true, margin: '0px 0px -100px 0px' } }
                    onMouseMove={ handleMouseMove }>
      <motion.div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={ { background: useMotionTemplate`radial-gradient(circle at ${ mouseX }px ${ mouseY }px, rgba(65,124,94,0.35), transparent 80%)` } }></motion.div>


      <div className="h-28 w-40 rounded-md bg-white"></div>
      <H4 className="mt-8 h-auto mb-[0.5em] sm:h-[10vw] sm:mb-0 md:mt-10">{ title }</H4>

      <DefaultText className="mb-4 block font-medium text-green-500 lg:mb-6 xl:mb-8">Header Random</DefaultText>

      <DefaultText>{ description }</DefaultText>
    </motion.article>
  )
}