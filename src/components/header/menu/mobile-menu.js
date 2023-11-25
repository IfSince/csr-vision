import { m } from 'framer-motion'
import { ButtonTemplate } from '../../button/button-template.js'
import { CloseIcon } from '../../icons/close-icon.js'
import { MenuIcon } from '../../icons/menu-icon.js'

const variants = {
  open: { y: 0 },
  closed: { y: '-100%' },
}

export const MobileMenu = ({ isOpen, toggleOpen, children, className }) =>
  <>
    <m.div className={ `absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-white pt-10 ${ className }` }
           initial={ false }
           animate={ isOpen ? 'open' : 'closed' }
           variants={ variants }
           transition={ { stiffness: 1000 } }>

      <ul className="flex w-full flex-col items-center font-bold leading-tight text-h1">
        { children }
      </ul>

      <ButtonTemplate className="mt-24 flex h-16 w-16 items-center justify-center rounded-full text-xl" onClick={ toggleOpen }>
        <span className="sr-only">Close menu</span>
        <CloseIcon className="h-7 w-7"/>
      </ButtonTemplate>
    </m.div>

    <button className={ `block h-full pl-2 text-black ${ className }` }
            onClick={ toggleOpen }>
      <span className="sr-only">Open menu</span>
      <MenuIcon className="h-7 w-7"/>
    </button>
  </>