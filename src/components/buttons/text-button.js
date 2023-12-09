import { ButtonTemplate } from './button-template.js'

export const TextButton = ({ onClick = () => void 0, children, className = '' }) =>
  <ButtonTemplate className={ `w-56 py-2.5 md:w-64 md:py-3 lg:py-4 lg:w-80 xl:w-[24rem] ${ className }` }
                  onClick={ onClick }>
    { children }
  </ButtonTemplate>