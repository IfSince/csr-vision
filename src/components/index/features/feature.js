import { m } from 'framer-motion'
import { CONTENT_REVEAL_VARIANTS, DEFAULT_REVEAL_TRANSITION } from '../../animations/config.js'
import { H4 } from '../../typography/h4.js'
import { DefaultText } from '../../typography/default-text.js'

const imgVariants = {
  default: {
    zoom: 0,
  },
  zoom: {
    scale: 1.05,
  },
}

export const Feature = ({ title, description, src, alt, iconHeight, delay = 0 }) =>
  <m.article className="mb-20 flex flex-col items-center text-center max-w-custom sm:max-w-sm lg:mb-0 lg:max-w-xs xl:max-w-sm"
             variants={ CONTENT_REVEAL_VARIANTS }
             initial="hidden"
             whileInView="visible"
             whileHover="zoom"
             viewport={ { once: true, margin: '0px 0px -100px 0px' } }
             transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease, delay } }>
    <m.div className="flex h-20 items-end md:h-28 lg:h-32"
           variants={ imgVariants }
           transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease } }>
      <m.img className={ `w-auto ${ iconHeight }` }
             src={ src }
             alt={ alt }/>
    </m.div>
    <H4 className="mt-[0.5em] mb-[0.35em]">{ title }</H4>
    <DefaultText>{ description }</DefaultText>
  </m.article>