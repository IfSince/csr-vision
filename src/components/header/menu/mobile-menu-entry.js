import { m } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    transition: { duration: 0.5, ease: [.28,1,.35,.99] },
  },
  closed: {
    y: '112%',
  },
}


export const MobileMenuEntry = ({ className = '', text, onClick = () => void 0 }) =>
  <li style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } }>
    <m.button className={ `inline capitalize py-1.5 hover:underline underline-offset-4 ${ className }` }
              onClick={ onClick }
              variants={ variants }>
      { text }
    </m.button>
  </li>