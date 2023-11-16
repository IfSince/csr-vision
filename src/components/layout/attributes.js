import { Attribute } from '../cards/attribute.js'

export const Attributes = ({ attributes }) =>
  <div className="flex w-full flex-col items-center justify-between gap-4 max-w-8xl lg:flex-row lg:items-start">
    {
      attributes.map((attribute, index) => <Attribute { ...attribute } delay={ .15 * index } key={ attribute.title }/>)
    }
  </div>
