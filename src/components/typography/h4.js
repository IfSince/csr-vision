import { twMerge } from 'tailwind-merge'

export const H4 = ({ children, className }) =>
  <h4 className={ twMerge("text-h4 tracking-tighter font-medium leading-[1.25em]", className) }>{ children }</h4>