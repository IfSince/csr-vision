import { ButtonTemplate } from './button-template.js'
import { ArrowDownIcon } from '../icons/arrow-down-icon.js'

export const ScrollButton = ({ className, onClick }) =>
  <ButtonTemplate className={ `flex h-16 w-16 items-center justify-center rounded-full fill-black text-xl md:h-20 md:w-20 md:text-2xl ${ className }` }
                  onClick={ onClick }>
    <span className="sr-only">Scroll Down</span>
    <ArrowDownIcon className="h-6 w-6 md:h-7 md:w-7"/>
  </ButtonTemplate>
