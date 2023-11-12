import { Link } from 'gatsby'
import { ButtonTemplate } from './button-template.js'

export const RouteButton = ({ description, route }) =>
  <ButtonTemplate>
    <Link className="block w-56 rounded-full font-medium tracking-tight z-1 py-2.5 md:w-72 md:py-3"
          to={ route }>
      { description }
    </Link>
  </ButtonTemplate>
