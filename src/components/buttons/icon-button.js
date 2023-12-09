import { ButtonTemplate } from './button-template.js'

export const IconButton = ({ onClick = () => void 0, size = 'lg', className = '', children }) => {
  const sizes = {
    lg: 'h-16 w-16 md:h-20 md:w-20',
    md: 'h-14 w-14',
    'md-scaling': 'h-12 w-12 md:h-14 md:w-14',
    sm: 'h-12 w-12',
  }

  const iconSizes = {
    lg: 'h-6 w-6 md:h-7 md:w-7',
    md: 'h-6 w-6',
    'md-scaling': 'h-5 w-5 md:h-6 md:w-6',
    sm: 'h-4 w-4',
  }

  return (
    <ButtonTemplate className={ `fill-black ${ sizes[size] } ${ className }` }
                    onClick={ onClick }>
      <span className={ iconSizes[size] }>
        { children }
      </span>
    </ButtonTemplate>
  )
}