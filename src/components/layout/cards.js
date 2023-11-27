import { Card } from '../cards/card.js'
import Copy from '../../images/icons/copy.svg'
import Web from '../../images/icons/web.svg'
import DesignAndAi from '../../images/icons/design_and_ai.svg'
import Film from '../../images/icons/film.svg'

const CARDS = [
  {
    title: 'Copy Writing',
    description: 'A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency.',
    className: '',
    src: Copy,
    alt: 'Copy Writing',
  },
  {
    title: 'Web Journeys',
    description: 'A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency.',
    className: '',
    src: Web,
    alt: 'Web Journeys',
  },
  {
    title: 'Creative AI',
    description: 'A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency.',
    className: 'xl:col-start-2 xl:col-end-2 xl:row-start-2 xl:row-end-2',
    src: DesignAndAi,
    alt: 'Creative AI',
  },
  {
    title: 'Movies & VFX',
    description: 'A lack of IT-experts who are capable of coding affects many companies. With our techology you can replace coding with modeling, which einables flexiblity and efficiency.',
    className: 'xl:col-start-3 xl:col-end-3 xl:row-start-2 xl:row-end-2',
    src: Film,
    alt: 'Movies & VFX',
  },
]

export const Cards = () => CARDS.map(card => <Card { ...card } key={ card.title }/>)