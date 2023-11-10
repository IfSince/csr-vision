import { twMerge } from 'tailwind-merge'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

export const RouteButton = ({ description, route, className }) =>
  <motion.button className={ twMerge('group relative border border-black rounded-full bg-none select-none touch-none', className) }
                 whileHover={ { scale: 1.05 } }
                 whileTap={ { scale: 0.95 } }
  >
    <Link className="block w-56 rounded-full bg-white font-medium tracking-tight z-1 py-2.5 md:w-72 md:py-3"
          to={ route }>
      { description }
    </Link>
  </motion.button>