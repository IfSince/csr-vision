import { m, useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from '../../images/logo-variants/logo.svg'
import LogoLight from '../../images/logo-variants/logo_light.svg'
import { useState } from 'react'
import { theme } from '../../../tailwind.config.js'
import { Menu } from './menu.js'
import { SLIDE_IN_TRANSITION } from '../animations/config.js'
import { Link } from 'gatsby'

export const Header = ({ items, withBackground = false }) => {
  const variants = {
    initial: {
      backgroundColor: 'rgba(250,249,246,0)',
      color: withBackground ? theme.colors.white : theme.colors.black,
    },
    scrolled: {
      backgroundColor: theme.colors.white,
    },
  }

  const { scrollY } = useScroll()

  const [mobileOpen, toggleMobileOpen] = useCycle(false, true)
  const [headerScrolled, setHeaderScrolled] = useState(false)

  const update = latest => setHeaderScrolled(latest > 225)

  useMotionValueEvent(scrollY, 'change', update)

  return (
    <m.header className="fixed top-0 h-16 w-full z-[9000] md:h-20 md:overflow-hidden"
              variants={ variants }
              animate={ headerScrolled ? 'scrolled' : 'initial' }
              transition={ SLIDE_IN_TRANSITION }>
      <div className="flex h-full w-full items-center justify-between horizontal-spacing">
        <Link to="/" className="flex h-full w-28 items-center justify-center md:w-32">
          {
            <img className="h-auto w-full" src={ (!headerScrolled && !mobileOpen && withBackground) ? LogoLight : Logo } alt="Logo"/>
          }
        </Link>

        <Menu items={ items }
              isOpen={ mobileOpen }
              toggleOpen={ toggleMobileOpen }/>
      </div>
    </m.header>
  )
}