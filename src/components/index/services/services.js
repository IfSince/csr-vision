import { Service } from './service.js'
import { SERVICES } from '../../../data/services.js'

export const Services = () => SERVICES.map(card => <Service { ...card } key={ card.title }/>)