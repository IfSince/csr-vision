import { Service } from './service.js'
import { CARDS } from '../../../data/cards.js'

export const Services = () => CARDS.map(card => <Service { ...card } key={ card.title }/>)