import { twMerge } from 'tailwind-merge'

export const DefaultText = ({ children, className }) =>
  <span className={ twMerge('md:font-medium text-sm md:text-base leading-tight', className) }>
    { children }
  </span>