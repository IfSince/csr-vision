import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { IsMobileContext } from '../../util/is-mobile-context.js'
import { domAnimation, LazyMotion } from 'framer-motion'
import { Header } from '../header/header.js'

export const SiteLayout = ({ navItems = [], heroBackground = false, children }) => {
  const breakpoints = useBreakpoint()

  return (
    <IsMobileContext.Provider value={ breakpoints.lg }>
      <LazyMotion features={ domAnimation } strict>
        <Header items={ navItems } withBackground={ heroBackground }/>
        { children }
      </LazyMotion>
    </IsMobileContext.Provider>
  )
}
  