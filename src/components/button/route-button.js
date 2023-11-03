import { twMerge } from 'tailwind-merge'
import { Link } from 'gatsby'

export const RouteButton = ({ description, route, className }) =>
  <button>
    <Link className={ twMerge('font-medium block w-56 md:w-72 py-2.5 md:py-3 border border-black rounded-full bg-white tracking-tight', className) }
          to={ route }>
      { description }
    </Link>
  </button>