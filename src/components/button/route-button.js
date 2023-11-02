import { twMerge } from 'tailwind-merge'
import { Link } from 'gatsby'

export const RouteButton = ({ description, route, className }) =>
  <button className="h-fit w-fit">
    <Link className={ twMerge('font-medium block px-28 py-3 border border-black rounded-full bg-white tracking-tight', className) }
          to={ route }>
      { description }
    </Link>
  </button>