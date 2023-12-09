import { m, useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from '../../images/logo-variants/logo.svg'
import LogoLight from '../../images/logo-variants/logo_light.svg'
import { useState } from 'react'
import { theme } from '../../../tailwind.config.js'
import { Menu } from './menu.js'

const variants = {
  initial: {
    y: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: theme.colors.white,
  },
  scrolled: {
    y: 0,
    backgroundColor: theme.colors.white,
  },
}

export const Header = ({ items }) => {
  const { scrollY } = useScroll()

  const [mobileOpen, toggleMobileOpen] = useCycle(false, true)
  const [headerScrolled, setHeaderScrolled] = useState(false)

  const update = latest => setHeaderScrolled(latest > 225)

  useMotionValueEvent(scrollY, 'change', update)

  return (
    <m.header className="fixed top-0 h-16 w-full z-[9000] md:h-20 md:overflow-hidden"
              variants={ variants }
              animate={ headerScrolled ? 'scrolled' : 'initial' }
              transition={ { duration: 0.4, ease: [.44, .71, .27, 1] } }>
      <div className="flex h-full w-full items-center justify-between horizontal-spacing">
        <a href="/" className="flex h-full w-28 items-center justify-center md:w-32">
          {
            <img className="h-auto w-full" src={ (!headerScrolled && !mobileOpen) ? LogoLight : Logo } alt="Logo"/>
          }
        </a>

        <Menu items={ items }
              isOpen={ mobileOpen }
              toggleOpen={ toggleMobileOpen }/>
      </div>
    </m.header>
  )
}