import { H4 } from '../typography/h4.js'
import { DefaultText } from '../typography/default-text.js'

export const Card = ({ title, description, className }) =>
  <article className={ `aspect-[1/1.3] bg-green-800 rounded-md p-8 md:p-12 max-w-md ${ className }` }>
    <div className="h-20 w-28 rounded-md bg-white md:h-28 md:w-40"></div>
    <H4 className="mt-[1.5em] mb-[0.35em]">{ title }</H4>
    <DefaultText className="max-w-xs">{ description }</DefaultText>
  </article>