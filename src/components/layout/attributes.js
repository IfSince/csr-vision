import { Attribute } from '../cards/attribute.js'
import ImprovedCorporateImage from '../../images/icons/improved_corporate_image.svg'
import MarketDifferentiation from '../../images/icons/market_differentiation.svg'
import LongTermProfitability from '../../images/icons/long-term_profitability.svg'

const ATTRIBUTES = [
  {
    title: 'Unternehmensimage',
    description: 'CSR-Reports zeigen, dass ein Unternehmen sich seiner sozialen und ökologischen Verantwortung bewusst ist.',
    src: ImprovedCorporateImage,
    alt: 'Improved corporate image',
    iconHeight: 'h-[5.5rem] md:h-28 translate-y-[12%]'
  },
  {
    title: 'Marktdifferenzierung',
    description: 'Ein starkes Engagement für CSR kann ein Unternehmen in starken Märkten von seinen Wettbewerbern abheben.',
    src: MarketDifferentiation,
    alt: 'market differentiation',
    iconHeight: 'h-20 md:h-24'
  },
  {
    title: 'Langfristige Profitabilitaet',
    description: 'Unternehmen, die CSR ernst nehmen und dies in attraktiven Berichten transparent machen, sind langfristig profitabler.',
    src: LongTermProfitability,
    alt: 'long-term profitability',
    iconHeight: 'h-20 md:h-24'
  },
]


export const Attributes = () =>
  <div className="flex w-full flex-col items-center justify-between gap-4 max-w-8xl lg:flex-row lg:items-start">
    {
      ATTRIBUTES.map((attribute, index) => <Attribute { ...attribute } delay={ .15 * index } key={ attribute.title }/>)
    }
  </div>
