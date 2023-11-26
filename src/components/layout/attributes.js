import { Attribute } from '../cards/attribute.js'

const ATTRIBUTES = [
  {
    title: 'Unternehmensimage',
    description: 'CSR-Reports zeigen, dass ein Unternehmen sich seiner sozialen und ökologischen Verantwortung bewusst ist.',
  },
  {
    title: 'Marktdifferenzierung',
    description: 'Ein starkes Engagement für CSR kann ein Unternehmen in starken Märkten von seinen Wettbewerbern abheben.',
  },
  {
    title: 'Langfristige Profitabilität',
    description: 'Unternehmen, die CSR ernst nehmen und dies in attraktiven Berichten transparent machen, sind langfristig profitabler.',
  },
]


export const Attributes = () =>
  <div className="flex w-full flex-col items-center justify-between gap-4 max-w-8xl lg:flex-row lg:items-start">
    {
      ATTRIBUTES.map((attribute, index) => <Attribute { ...attribute } delay={ .15 * index } key={ attribute.title }/>)
    }
  </div>
