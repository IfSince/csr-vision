import { H4 } from '../typography/h4.js'
import { m } from 'framer-motion'
import { CONTENT_REVEAL_VARIANTS, DEFAULT_REVEAL_TRANSITION } from '../animations/config.js'
import { ImageHover } from '../animations/image-hover.js'

export const TeamMember = ({ role, name, children, className = '' }) =>
  <m.article className={ `w-full max-w-[26rem] ${ className }` }
             variants={ CONTENT_REVEAL_VARIANTS }
             initial="hidden"
             whileInView="visible"
             transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease } }
             viewport={ { once: true, margin: '0px 0px -200px 0px' } }>
    <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
      <ImageHover>
        { children }
      </ImageHover>
    </div>
    <span className="mt-2 block font-medium tracking-tight text-green-800">{ role }</span>
    <H4 className="mt-1 sm:mt-2">{ name }</H4>
  </m.article>