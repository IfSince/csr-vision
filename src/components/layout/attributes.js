import { Attribute } from '../cards/attribute.js'
import { ATTRIBUTES } from '../../data/attributes.js'

export const Attributes = () =>
  <div className="flex w-full flex-col items-center justify-between gap-4 max-w-8xl lg:flex-row lg:items-start">
    {
      ATTRIBUTES.map((attribute, index) => <Attribute { ...attribute } delay={ .15 * index } key={ attribute.title }/>)
    }
  </div>
