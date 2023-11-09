import { twMerge } from 'tailwind-merge'

export const DefaultText = ({ children, className }) =>
  <p className={ twMerge('md:font-medium text-sm md:text-base leading-tight', className) }>
    { children }
  </p>