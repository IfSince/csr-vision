import { m } from 'framer-motion'
import CloseIcon from '../../images/icons/dark/close.svg'
import MenuIcon from '../../images/icons/dark/menu.svg'
import { LinkedinIcon } from '../icons/socials/linkedin-icon.js'
import { LinkIconButton } from '../buttons/link-icon-button.js'
import { SLIDE_IN_TRANSITION } from '../animations/config.js'

const menuVariants = {
  open: {
    y: 0,
    transition: { duration: 0.7, ease: [.25, .99, .26, .99], },
  },
  closed: {
    y: 'var(--menu-transition)',
    transition: { ...SLIDE_IN_TRANSITION, delay: 0.5, },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [.28, 1, .35, .99] },
  },
  closed: {
    y: 'var(--item-transition)',
  },
}

export const Menu = ({ items, isOpen, toggleOpen }) => {
  const onClickFn = (item) => {
    toggleOpen()
    item.onClick()
  }

  return (
    <>
      <button className="flex items-center justify-center md:hidden" onClick={ toggleOpen }>
        {
          isOpen
            ? <img className="h-6 w-6" src={ CloseIcon } alt="Close menu"/>
            : <img className="h-7 w-7" src={ MenuIcon } alt="Open menu"/>
        }
      </button>

      <m.nav className="absolute top-0 left-0 -z-10 w-full bg-white h-[100vh] md:relative md:z-10 md:h-full md:w-fit md:bg-transparent
                        [--menu-transition:-100%] md:[--menu-transition:0]"
             variants={ menuVariants }
             initial={ false }
             animate={ isOpen ? 'open' : 'closed' }>
        <m.ul className="flex h-full w-full flex-col items-center justify-center md:flex-row
                         [--padding-left:1.5rem] [--padding-right:1.5rem] [--item-transition:125%] md:[--item-transition:0]"
              variants={ listVariants }>
          {
            items.map(item =>
              <li className="h-fit clip-path md:h-full" key={ item.index }>
                <m.button className="text-h1 font-undotted leading-none tracking-tight font-black mb-3 max-md:text-black
                                     md:font-bold md:text-base md:mb-0 md:tracking-wide md:h-full md:px-6 lg:text-lg"
                          onClick={ () => onClickFn(item) }
                          variants={ itemVariants }>
                  { item.text }
                </m.button>
              </li>,
            )
          }
          <li className="mt-6 p-2 clip-path md:hidden">
            <m.div className="flex gap-6" variants={ itemVariants }>
              <LinkIconButton size="md" label="Go to LinkedIn" link="https://www.linkedin.com/in/csr-vision" target="_blank">
                <LinkedinIcon/>
              </LinkIconButton>
            </m.div>
          </li>

        </m.ul>
      </m.nav>
    </>

  )
}