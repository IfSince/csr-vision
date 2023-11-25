import { m } from 'framer-motion'

export const MenuEntry = ({ className = '', text, onClick = () => void 0, variants = {} }) =>
  <m.button className={ `inline capitalize py-1.5 ${ className }` }
            onClick={ onClick }
            variants={ variants }
  >
    { text }
  </m.button>