import { m } from 'framer-motion'
import { ButtonTemplate } from '../../button/button-template.js'
import { InstagramIcon } from '../../icons/socials/instagram-icon.js'
import { LinkedinIcon } from '../../icons/socials/linkedin-icon.js'
import { MobileMenuEntry } from './mobile-menu-entry.js'
import { MenuIcon } from '../../icons/menu-icon.js'

const variants = {
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [.25, .99, .26, .99],
    },
  },
  closed: {
    y: '-100%',
    transition: {
      delay: 0.5,
      stiffness: 1000,
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

const buttonVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { delay: 0.5, stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 200,
    opacity: 0,
  },
}

export const MobileMenu = ({ items, isOpen, toggleOpen, className }) => {
  const onClickFn = (item) => {
    toggleOpen()
    item.onClick()
  }

  return (
    <>
      <button className={ `block h-full pl-2 text-black ${ className }` }
              onClick={ toggleOpen }>
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-7 w-7"/>
      </button>

      <m.div className={ `absolute -z-10 top-0 left-0 flex h-screen w-screen flex-col items-center justify-between bg-white ${ className }` }
             initial={ false }
             animate={ isOpen ? 'open' : 'closed' }
             variants={ variants }>
        <div></div>

        <m.ul className="mt-10 flex w-full flex-col items-center gap-2 horizontal-spacing"
              variants={ listVariants }>
          {
            items.map(item => <MobileMenuEntry className="!uppercase tracking-tight font-black leading-none text-h1"
                                               { ...item }
                                               key={ item.index }
                                               onClick={ () => onClickFn(item) }/>,
            )
          }
        </m.ul>

        <m.div className="mb-10" variants={ listVariants }>
          <m.div className="flex gap-6" variants={ buttonVariants }>
            <a href="/">
              <ButtonTemplate className="flex h-14 w-14 items-center justify-center rounded-full fill-black">
                <LinkedinIcon className="h-5 w-5"/>
              </ButtonTemplate>
            </a>

            <a href="/">
              <ButtonTemplate className="flex h-14 w-14 items-center justify-center rounded-full fill-black">
                <InstagramIcon className="h-5 w-5"/>
              </ButtonTemplate>
            </a>
          </m.div>
        </m.div>
      </m.div>
    </>
  )
}