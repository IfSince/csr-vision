import { Card } from '../cards/card.js'
import { CARDS } from '../../data/cards.js'

export const Cards = () => CARDS.map(card => <Card { ...card } key={ card.title }/>)