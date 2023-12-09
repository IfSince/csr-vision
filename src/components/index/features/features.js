import { ATTRIBUTES } from '../../../data/attributes.js'
import { Feature } from './feature.js'

export const Features = () =>
  <div className="flex w-full flex-col items-center justify-between gap-4 max-w-8xl lg:flex-row lg:items-start">
    {
      ATTRIBUTES.map((attribute, index) => <Feature { ...attribute } delay={ .15 * index } key={ attribute.title }/>)
    }
  </div>
