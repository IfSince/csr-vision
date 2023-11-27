import { m } from 'framer-motion'
import { ButtonTemplate } from '../../button/button-template.js'
import { InstagramIcon } from '../../icons/socials/instagram-icon.js'
import { LinkedinIcon } from '../../icons/socials/linkedin-icon.js'
import CloseIcon from '../../../images/icons/close.svg'
import MenuIcon from '../../../images/icons/menu.svg'

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
    y: 0,
    transition: { duration: 0.5, ease: [.28, 1, .35, .99] },
  },
  closed: {
    y: '120%',
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
    y: 300,
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
      <button className={ `block h-full text-black p-1${ className }` }
              onClick={ toggleOpen }>
        <span className="sr-only">Open menu</span>
        {
          isOpen
            ? <img className="h-6 w-6" src={ CloseIcon } alt="Close menu"/>
            : <img className="h-7 w-7" src={ MenuIcon } alt="Open menu"/>
        }
      </button>

      <m.div className={ `absolute -z-10 overflow-hidden top-0 left-0 flex h-screen w-full flex-col items-center justify-between bg-white ${ className }` }
             initial={ false }
             animate={ isOpen ? 'open' : 'closed' }
             variants={ variants }>
        <div></div>

        <m.ul className="mt-10 flex w-full flex-col items-center gap-2 horizontal-spacing"
              variants={ listVariants }>
          {
            items.map(item => <li style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } } key={ item.index }>
                <m.button className="py-1 font-black leading-none tracking-tight underline-offset-4 font-undotted text-h1 hover:underline"
                          onClick={ () => onClickFn(item) }
                          variants={ itemVariants }>
                  { item.text }
                </m.button>
              </li>,
            )
          }
        </m.ul>

        <m.div className="mb-10" variants={ listVariants }>
          <m.div className="flex gap-6" variants={ buttonVariants }>
            <a href="/">
              <ButtonTemplate className="flex h-14 w-14 items-center justify-center rounded-full fill-black">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-5 w-5"/>
              </ButtonTemplate>
            </a>

            <a href="/">
              <ButtonTemplate className="flex h-14 w-14 items-center justify-center rounded-full fill-black">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-5 w-5"/>
              </ButtonTemplate>
            </a>
          </m.div>
        </m.div>
      </m.div>
    </>
  )
}