import { H3 } from '../typography/h3.js'
import { HorizontalWrapper } from './horizontal-wrapper.js'

export const ContentSection = ({ title = null, variant = 'default', contentWrapped = true, className = '', children }) => {
  const variantClasses = {
    default: '',
    dark: 'bg-black text-white',
  }

  const borderClasses = {
    default: 'border-black/20',
    dark: 'border-white/20',
  }

  const content = contentWrapped
    ? <HorizontalWrapper className={ className }>{ children }</HorizontalWrapper>
    : <>{ children }</>

  return (
    <section className={ `py-24 md:py-40 ${ variantClasses[variant] }` }>
      {
        title && (
          <HorizontalWrapper className={ `border-b ${ borderClasses[variant] } pb-16 mb-4` }>
            <H3>{ title }</H3>
          </HorizontalWrapper>
        )
      }
      { content }
    </section>
  )

}