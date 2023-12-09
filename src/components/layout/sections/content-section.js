import { HeaderH3 } from '../header/header-h3.js'
import { ContentWrapper } from '../wrapper/content-wrapper.js'
import { HeaderWrapper } from '../wrapper/header-wrapper.js'

export const ContentSection = ({
  theme = 'light',
  title,
  children,
  className = '',
  contentWrapperClassName = '',
}) => {
  const variantClasses = {
    light: 'bg-white',
    dark: 'bg-black text-white',
  }

  return (
    <section className={ `pb-24 md:pb-40 ${ variantClasses[theme] } ${ className }` }>
      {
        title &&
        <HeaderWrapper theme={ theme } spacingType="content">
          <HeaderH3>{ title }</HeaderH3>
        </HeaderWrapper>
      }
      <ContentWrapper className={ contentWrapperClassName }>
        { children }
      </ContentWrapper>
    </section>
  )
}