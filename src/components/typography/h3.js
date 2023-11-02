import { twMerge } from 'tailwind-merge'

export const H3 = ({ children, className }) =>
  <h3 className={ twMerge("font-overpass text-h3 tracking-tighter leading-tight md:leading-[1em]", className) }>{ children }</h3>