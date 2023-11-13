import { twMerge } from 'tailwind-merge'
import { ButtonTemplate } from './button-template.js'

export const ScrollButton = ({ className }) =>
  <ButtonTemplate className={
    twMerge('flex h-16 md:h-20 w-16 md:w-20 md:text-2xl items-center justify-center rounded-full text-xl fill-black', className)
  }>
    <span className="sr-only">Scroll Down</span>
    <svg className="h-6 w-6 md:h-7 md:w-7"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 -960 960 960">
      <path
        d="M480-97q-8 0-15-2.5t-13-8.5L228-332q-11-11-11-28t11-28q12-12 28.5-11.5T284-388l156 155v-607q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v607l155-155q12-12 28.5-12t28.5 12q11 12 11 28.5T732-332L508-108q-6 6-13 8.5T480-97Z"/>
    </svg>
  </ButtonTemplate>