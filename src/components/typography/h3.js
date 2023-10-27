import { twMerge } from 'tailwind-merge'

export const H3 = ({ children, className }) =>
  <h3 className={ twMerge("font-undotted text-h3 tracking-tighter lowercase leading-[1em]", className) }>{ children }</h3>