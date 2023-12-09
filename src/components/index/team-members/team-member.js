import { H4 } from '../../typography/h4.js'
import { ZoomHover } from '../../animations/zoom-hover.js'
import { ArticleScrollReveal } from '../../animations/article-scroll-reveal.js'

export const TeamMember = ({ role, name, image, onClick, className = '' }) =>
  <ArticleScrollReveal className={ `w-full max-w-[26rem] cursor-pointer ${ className }` } onClick={ onClick }>
    <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
      <ZoomHover>
        { image }
      </ZoomHover>
    </div>
    <span className="mt-2 block font-medium tracking-tight ml-0.5">{ role }</span>
    <H4 className="mt-1 ml-0.5 sm:mt-2">{ name }</H4>
  </ArticleScrollReveal>