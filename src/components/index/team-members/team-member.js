import { m } from 'framer-motion'
import { CONTENT_REVEAL_VARIANTS, DEFAULT_REVEAL_TRANSITION } from '../../animations/config.js'
import { H4 } from '../../typography/h4.js'
import { ZoomHover } from '../../animations/zoom-hover.js'

export const TeamMember = ({ role, name, onClick, children, className = '' }) =>
  <m.article className={ `w-full max-w-[26rem] cursor-pointer ${ className }` }
             variants={ CONTENT_REVEAL_VARIANTS }
             initial="hidden"
             whileInView="visible"
             transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease } }
             viewport={ { once: true, margin: '0px 0px -200px 0px' } }
             onClick={ onClick }>
    <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
      <ZoomHover>
        { children }
      </ZoomHover>
    </div>
    <span className="mt-2 block font-medium tracking-tight ml-0.5">{ role }</span>
    <H4 className="mt-1 ml-0.5 sm:mt-2">{ name }</H4>
  </m.article>