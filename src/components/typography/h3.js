import { LineReveal } from '../animations/line-reveal.js'

export const H3 = ({ children }) =>
  <h3 className="font-overpass text-h3 tracking-tighter leading-tight md:leading-[1em] max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
    <LineReveal text={ children }/>
  </h3>