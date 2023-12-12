import { FEATURES } from '../../../data/features.js'
import { Feature } from './feature.js'

export const Features = () =>
  <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 md:grid-cols-2 md:max-w-5xl md:gap-y-10 xl:max-w-8xl xl:grid-cols-3 xl:gap-y-16">
    {
      FEATURES.map((attribute, index) => <Feature { ...attribute } delay={ .15 * index } key={ attribute.title }/>)
    }
  </div>
