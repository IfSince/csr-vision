import { ArticleScrollReveal } from '../../animations/article-scroll-reveal.js'
import { ZoomHover } from '../../animations/zoom-hover.js'
import { H4 } from '../../typography/h4.js'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const BlogPreview = ({ date, image, image_alt, title, slug }) =>
  <ArticleScrollReveal className="w-full cursor-pointer max-w-[26rem]">
    <Link to={ `/blog/${ slug }` }>
      <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
        <ZoomHover>
          <GatsbyImage className="h-full w-full" image={ image } alt={ image_alt }/>
        </ZoomHover>
      </div>
      <span className="mt-2 block font-medium tracking-tight ml-0.5">{ date }</span>
      <H4 className="mt-1 ml-0.5 sm:mt-2">{ title }</H4>
    </Link>
  </ArticleScrollReveal>