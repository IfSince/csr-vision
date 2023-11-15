import { Attribute } from '../cards/attribute.js'
import { m } from 'framer-motion'

export const Attributes = ({ attributes }) =>
  <m.div className="flex w-full flex-col items-center justify-between max-w-8xl lg:flex-row"
              initial="hidden"
              whileInView="visible"
              transition={ { staggerChildren: 0.15 } }
              viewport={ { once: true, margin: '0px 0px -100px 0px' } }>
    {
      attributes.map(attribute => <Attribute { ...attribute } key={ attribute.title }/>)
    }
  </m.div>
