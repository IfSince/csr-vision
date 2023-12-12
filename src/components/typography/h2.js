import { twMerge } from 'tailwind-merge'
import { LineReveal } from '../animations/line-reveal.js'

export const H2 = ({ children, animated = true, className = '' }) =>
  <h2 className={ twMerge('font-undotted font-bold text-h1 tracking-tighter lowercase leading-[1.05em]', className) }>
    {
      animated
        ? <LineReveal>{ children }</LineReveal>
        : <span>{ children }</span>
    }
  </h2>