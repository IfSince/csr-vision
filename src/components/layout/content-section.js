import { H3 } from '../typography/h3.js'
import { HorizontalWrapper } from './horizontal-wrapper.js'

export const ContentSection = ({ title = null, variant = 'default', subSection = false, className = '', children }) => {
  const variantClasses = {
    default: '',
    dark: 'bg-black text-white',
  }

  const borderClasses = {
    default: 'border-black/20',
    dark: 'border-white/20',
  }

  return (
    <section className={ `${ subSection ? 'pt-4 pb-24 md:pb-40' : 'py-24 md:py-40' } ${ variantClasses[variant] }` }>
      {
        title && (
          <HorizontalWrapper className={ `border-b ${ borderClasses[variant] } pb-16 mb-4` }>
            <H3 className="xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">{ title }</H3>
          </HorizontalWrapper>
        )
      }
      <HorizontalWrapper className={ className }>{ children }</HorizontalWrapper>
    </section>
  )
}