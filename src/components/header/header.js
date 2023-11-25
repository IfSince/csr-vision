import { HorizontalWrapper } from '../layout/horizontal-wrapper.js'
import { m, useCycle, useScroll } from 'framer-motion'
import logo from '../../images/logo-variants/logo.svg'
import { useEffect, useState } from 'react'
import { DesktopMenu } from './menu/desktop-menu.js'
import { MobileMenu } from './menu/mobile-menu.js'

const variants = {
  visible: { y: 0 },
  hidden: { y: '-100%', transition: { delay: 0.5 } },
}

export const Header = ({ items }) => {
  const [mobileOpen, toggleMobileOpen] = useCycle(false, true)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const update = () => {
      const currentScroll = scrollY?.get()
      const previousScroll = scrollY?.getPrevious()

      if (currentScroll < previousScroll) setHidden(false)
      else if (currentScroll > 100 && currentScroll > previousScroll) setHidden(true)
    }

    return scrollY.on('change', update)
  }, [scrollY])

  return (
    <m.header className="fixed h-16 w-full bg-white z-[9000] md:h-20 md:overflow-hidden"
              variants={ variants }
              animate={ (hidden && !mobileOpen) ? 'hidden' : 'visible' }
              transition={ {
                duration: 0.7,
                ease: [.25, .99, .26, .99],
              } }>

      <HorizontalWrapper className="flex h-full w-full items-center justify-between">
        <a href="/" className="flex h-full w-28 items-center justify-center md:w-32">
          <img className="h-auto w-full" src={ logo } alt="Logo"/>
        </a>

        <nav className="h-full">
          <DesktopMenu className="hidden md:flex" items={ items }/>

          <MobileMenu className="md:hidden"
                      items={ items }
                      isOpen={ mobileOpen }
                      toggleOpen={ toggleMobileOpen }/>
        </nav>
      </HorizontalWrapper>
    </m.header>
  )
}