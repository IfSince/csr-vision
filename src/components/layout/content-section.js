import { H3 } from '../typography/h3.js'
import { HorizontalWrapper } from './horizontal-wrapper.js'

export const ContentSection = ({
  title = null,
  variant = 'default',
  subSection = false,
  className = '',
  outerClassName = '',
  children,
  titleWrapperClassName = null,
  titleElement = null,
}) => {
  const variantClasses = {
    default: 'bg-white',
    dark: 'bg-black text-white',
  }

  const borderClasses = {
    default: 'border-black/20',
    dark: 'border-white/20',
  }

  const titleComponent = title && <H3 className="xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">{ title }</H3>

  const titleResult = titleWrapperClassName
    ? <div className={ titleWrapperClassName }>{ titleComponent }{ titleElement }</div>
    : titleComponent

  return (
    <section className={ `${ subSection ? 'pt-4 pb-24 md:pb-40' : 'py-24 md:py-32 xl:py-36 2xl:py-40' } ${ variantClasses[variant] } ${ outerClassName }` }>
      {
        (title || titleWrapperClassName || titleComponent) && (
          <HorizontalWrapper className={ `border-b ${ borderClasses[variant] } pb-4 sm:pb-8 md:pb-16 mb-4` }>
            { titleResult }
          </HorizontalWrapper>
        )
      }
      <HorizontalWrapper className={ className }>{ children }</HorizontalWrapper>
    </section>
  )
}