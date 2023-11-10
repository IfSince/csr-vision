import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

export const IconButton = ({ icon, className }) =>
  <motion.button className={
    twMerge(
      'flex h-16 md:h-20 w-16 md:w-20 md:text-2xl items-center justify-center rounded-full border border-black bg-white text-xl select-none touch-none',
      className,
    )
  }
                 whileHover={ { scale: 1.1, backgroundColor: '#1F1F21', color: '#FAF9F6' } }
                 whileTap={ { scale: 0.95, backgroundColor: '#1F1F21', color: '#FAF9F6' } }
  >
    <span className="material-icons text-xl md:!text-[28px]">{ icon }</span>
  </motion.button>