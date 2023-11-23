import { HorizontalWrapper } from '../layout/horizontal-wrapper.js'
import { m, useCycle, useScroll } from 'framer-motion'
import logo from '../../images/logo-variants/logo.svg'
import { useEffect, useState } from 'react'
import { DEFAULT_REVEAL_TRANSITION } from '../animations/config.js'
import { DesktopMenu } from './menu/desktop-menu.js'
import { MobileMenu } from './menu/mobile-menu.js'
import { MenuEntry } from './menu/menu-entry.js'

const variants = {
  visible: { y: 0 },
  hidden: { y: '-100%' },
}

export const Header = ({ items }) => {
  const [mobileOpen, toggleMobileOpen] = useCycle(false, true)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  const renderMenuEntries = entry => <MenuEntry { ...entry } key={ entry.text }/>

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
    <m.header className="fixed z-50 h-16 w-full bg-white md:h-20 md:overflow-hidden"
              variants={ variants }
              animate={ (hidden && !mobileOpen) ? 'hidden' : 'visible' }
              transition={ { ease: DEFAULT_REVEAL_TRANSITION.ease } }>

      <HorizontalWrapper className="flex h-full w-full items-center justify-between">
        <a href="/" className="flex h-full w-28 items-center justify-center md:w-32">
          <img className="h-auto w-full object-fill" src={ logo } alt="Logo"/>
        </a>

        <nav className="h-full">
          <DesktopMenu className="hidden md:flex" items={ items }>
            {
              items.filter(item => item.mobileOnly !== true).map(renderMenuEntries)
            }
          </DesktopMenu>

          <MobileMenu className="md:hidden"
                      items={ items }
                      isOpen={ mobileOpen }
                      toggleOpen={ toggleMobileOpen }>
            {
              items.map(entry => <MenuEntry text={ entry.text }
                                            onClick={ () => {
                                              toggleMobileOpen()
                                              entry.onClick()
                                            } }
                                            key={ entry.text }/>)
            }
          </MobileMenu>
        </nav>
      </HorizontalWrapper>
    </m.header>
  )
}