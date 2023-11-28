import { HorizontalWrapper } from '../layout/horizontal-wrapper.js'
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
  scrolledVisible: {
    y: 0,
    backgroundColor: theme.colors.white,
  },
  hidden: {
    y: '-100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: { backgroundColor: { delay: 1 } },
  },
}

export const Header = ({ items }) => {
  const { scrollY } = useScroll()

  const [mobileOpen, toggleMobileOpen] = useCycle(false, true)
  const [headerVariant, setHeaderVariant] = useState('initial')
  const [preventHiding, setPreventHiding] = useState(false)

  const update = (latest) => {
    const previous = scrollY.getPrevious()

    if (!mobileOpen && preventHiding) {
      setPreventHiding(false)
    }

    if (latest > previous && latest > 150 && !mobileOpen && !preventHiding) {
      setHeaderVariant('hidden')
    } else if (latest < 225) {
      setHeaderVariant('initial')
    } else {
      setHeaderVariant('scrolledVisible')
    }
  }

  useMotionValueEvent(scrollY, 'change', update)

  return (
    <m.header className="fixed top-0 h-16 w-full z-[9000] md:h-20 md:overflow-hidden"
              variants={ variants }
              animate={ headerVariant }
              transition={ { duration: 0.4, ease: [.44, .71, .27, 1] } }>
      <HorizontalWrapper className="flex h-full w-full items-center justify-between">
        <a href="/" className="flex h-full w-28 items-center justify-center md:w-32">
          {
            <img className="h-auto w-full" src={ (headerVariant === 'initial' && !mobileOpen) ? LogoLight : Logo } alt="Logo"/>
          }
        </a>

        <Menu items={ items }
              isOpen={ mobileOpen }
              toggleOpen={ toggleMobileOpen }
              preventHiding={ () => setPreventHiding(true) }/>
      </HorizontalWrapper>
    </m.header>
  )
}