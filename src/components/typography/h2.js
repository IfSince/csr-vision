import { twMerge } from 'tailwind-merge'

export const H2 = ({ children, className }) =>
  <h2 className={ twMerge('font-undotted font-bold text-h1 tracking-tighter lowercase leading-[1.05em]', className) }>{ children }</h2>