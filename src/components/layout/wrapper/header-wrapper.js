import { twMerge } from 'tailwind-merge'

export const HeaderWrapper = ({ theme = 'light', spacingType, children, className = '' }) => {
  const themeClasses = {
    light: 'border-black/20',
    dark: 'border-white/30',
  }

  const spacingTypeClasses = {
    header: 'py-20 md:py-24',
    content: 'pt-24 pb-16 md:pt-32 xl:pt-36 2xl:pt-40',
  }

  return (
    <section className={ twMerge(
      `flex flex-col gap-y-20 border-t border-b horizontal-spacing lg:gap-32 ${ themeClasses[theme] } ${ spacingTypeClasses[spacingType] } ${ className }`,
      className,
    ) }>
      { children }
    </section>
  )
}