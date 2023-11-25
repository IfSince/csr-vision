import { m } from 'framer-motion'

export const GroupHoverListItem = ({
  index,
  onMouseOver = () => void 0,
  onMouseLeave = () => void 0,
  variants = {},
  animate = () => void 0,
  children,
  className = '',
}) =>
  <m.li className={ className }
        onMouseOver={ () => onMouseOver(index) }
        onMouseLeave={ () => onMouseLeave(index) }
        variants={ variants }
        animate={ animate(index) }>
    { children }
  </m.li>