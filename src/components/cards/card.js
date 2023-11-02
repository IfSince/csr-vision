import { H4 } from '../typography/h4.js'
import { DefaultText } from '../typography/default-text.js'

export const Card = ({ title, description }) =>
  <div className="mb-28 flex flex-col items-center text-center max-w-xxs sm:max-w-sm lg:max-w-xxs lg:mb-20 xl:max-w-sm">
    <div className="h-20 w-28 rounded-md bg-green-800"></div>
    <H4 className="mt-[1.25em] mb-[0.5em]">{ title }</H4>
    <DefaultText>{ description }</DefaultText>
  </div>