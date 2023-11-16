import { LineReveal } from '../animations/line-reveal.js'

export const H3 = ({ children, className = '' }) =>
  <h3 className={ `leading-tight tracking-tighter font-overpass text-h3 md:leading-[1em] ${ className }` }>
    <LineReveal text={ children }/>
  </h3>