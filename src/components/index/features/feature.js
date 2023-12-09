import { m } from 'framer-motion'
import { DEFAULT_REVEAL_TRANSITION } from '../../animations/config.js'
import { H4 } from '../../typography/h4.js'
import { DefaultText } from '../../typography/default-text.js'
import { ZoomHover } from '../../animations/zoom-hover.js'
import { ArticleScrollReveal } from '../../animations/article-scroll-reveal.js'

export const Feature = ({ title, description, src, alt, iconHeight, delay = 0 }) =>
  <ArticleScrollReveal className="mb-20 flex flex-col items-center text-center max-w-custom sm:max-w-sm lg:mb-0 lg:max-w-xs xl:max-w-sm"
                       whileHover="zoom"
                       transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease, delay } }>
    <ZoomHover trigger="external" className="flex h-20 w-fit items-end md:h-28 lg:h-32">
      <m.img className={ `w-auto ${ iconHeight }` }
             src={ src }
             alt={ alt }/>
    </ZoomHover>
    <H4 className="mt-[0.5em] mb-[0.35em]">{ title }</H4>
    <DefaultText>{ description }</DefaultText>
  </ArticleScrollReveal>