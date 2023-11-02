import { twMerge } from 'tailwind-merge'

export const DefaultText = ({ children, className }) =>
  <p className={ twMerge('font-medium leading-tight', className) }>
    { children }
  </p>