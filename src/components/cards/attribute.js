import { H4 } from '../typography/h4.js'
import { DefaultText } from '../typography/default-text.js'
import { m } from 'framer-motion'
import { CONTENT_REVEAL_VARIANTS, DEFAULT_REVEAL_TRANSITION } from '../animations/config.js'

export const Attribute = ({ title, description, src, alt, iconHeight, delay = 0 }) =>
  <m.article className="mb-20 flex flex-col items-center text-center max-w-custom sm:max-w-sm lg:mb-0 lg:max-w-xs xl:max-w-sm"
             variants={ CONTENT_REVEAL_VARIANTS }
             initial="hidden"
             whileInView="visible"
             viewport={ { once: true, margin: '0px 0px -200px 0px' } }
             transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease, delay } }>
    <div className="flex h-20 items-end md:h-28 lg:h-32">
      <img className={ `w-auto ${ iconHeight }` }
           src={ src }
           alt={ alt }/>
    </div>
    <H4 className="mt-[0.5em] mb-[0.35em]">{ title }</H4>
    <DefaultText>{ description }</DefaultText>
  </m.article>