import { m } from 'framer-motion'
import CloseIcon from '../../images/icons/close.svg'
import MenuIcon from '../../images/icons/menu.svg'
import { ButtonTemplate } from '../button/button-template.js'
import { LinkedinIcon } from '../icons/socials/linkedin-icon.js'
import { InstagramIcon } from '../icons/socials/instagram-icon.js'

const menuVariants = {
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [.25, .99, .26, .99],
    },
  },
  closed: {
    y: 'var(--menu-transition)',
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: [.44, .71, .27, 1],
    },
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
          <li className="mt-10 p-2 clip-path md:hidden">
            <m.div className="flex gap-6" variants={ itemVariants }>
              <a href="/">
                <span className="sr-only">LinkedIn</span>
                <ButtonTemplate className="flex h-14 w-14 items-center justify-center rounded-full fill-black">
                  <LinkedinIcon className="h-5 w-5"/>
                </ButtonTemplate>
              </a>

              <a href="/">
                <span className="sr-only">Instagram</span>
                <ButtonTemplate className="flex h-14 w-14 items-center justify-center rounded-full fill-black">
                  <InstagramIcon className="h-5 w-5"/>
                </ButtonTemplate>
              </a>
            </m.div>
          </li>

        </m.ul>
      </m.nav>
    </>

  )
}