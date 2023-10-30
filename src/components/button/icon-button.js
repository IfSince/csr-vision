import { twMerge } from 'tailwind-merge'

export const IconButton = ({ icon, className }) =>
  <button className={
    twMerge('flex h-16 md:h-20 w-16 md:w-20 md:text-2xl items-center justify-center rounded-full border border-black bg-white text-xl', className)
  }>
    <span className="material-icons text-xl md:!text-[28px]">{ icon }</span>
  </button>