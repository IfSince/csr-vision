import { m, useMotionTemplate, useMotionValue } from 'framer-motion'
import { CONTENT_REVEAL_VARIANTS, DEFAULT_REVEAL_TRANSITION } from '../animations/config.js'
import { H4 } from '../typography/h4.js'
import { DefaultText } from '../typography/default-text.js'

export const Card = ({ title, description, src, alt, className, iconClasses = 'h-20 sm:h-24 md:h-28 lg:h-32' }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <m.article className={ `relative bg-green-800 rounded-sm px-8 pt-8 pb-10 md:px-12 md:pt-12 md:pb-14 md:pb-20 max-w-[30rem] group ${ className }` }
               variants={ CONTENT_REVEAL_VARIANTS }
               initial="hidden"
               whileInView="visible"
               transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease } }
               viewport={ { once: true, margin: '0px 0px -200px 0px' } }
               onMouseMove={ handleMouseMove }>
      <m.div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
             style={ { background: useMotionTemplate`radial-gradient(circle at ${ mouseX }px ${ mouseY }px, rgba(65,124,94,0.5), transparent 80%)` } }></m.div>

      <div className="relative">
        <div className="mb-5 flex h-20 items-end sm:h-24 md:mb-7 md:h-28 lg:h-32">
          <img className={ `w-auto -translate-x-[8%] ${ iconClasses }` }
               src={ src }
               alt={ alt }/>
        </div>
        <H4 className="h-auto mb-[0.5em] sm:h-[10vw] sm:mb-0">{ title }</H4>
        <DefaultText className="mb-4 block lg:mb-6 xl:mb-8">Header Random</DefaultText>
        <DefaultText>{ description }</DefaultText>
      </div>
    </m.article>
  )
}