import { ArrowDownIcon } from '../icons/arrow-down-icon.js'
import { scrollToTarget } from '../../util/scroll-to-target.js'
import { IconButton } from './icon-button.js'

export const ScrollButton = ({ className = '', target, scrollY }) =>
  <IconButton className={ `mt-auto ${ className }` }
              onClick={ () => scrollToTarget(target, scrollY, 'smooth') }>
    <span className="sr-only">Scroll Down</span>
    <ArrowDownIcon/>
  </IconButton>