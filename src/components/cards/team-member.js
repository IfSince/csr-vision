import { H4 } from '../typography/h4.js'

export const TeamMember = ({ role, name }) =>
  <article className="max-w-md min-w-[18rem] md:min-w-[28rem]">
    <div className="rounded-md bg-black p-8 mb-2.5 aspect-[1/1.3] sm:mb-5 md:p-12"></div>
    <span className="pl-1 font-medium tracking-tight sm:text-lg">{ role }</span>
    <H4 className="mt-1 pl-1 sm:mt-2">{ name }</H4>
  </article>