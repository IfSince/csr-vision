import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'

export const HorizontalScrollCarousel = ({ children, className }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-25%'])

  return (
    <section ref={ targetRef } className="relative bg-neutral-900 h-[150vh]">
      <div className="sticky top-16 mb-16 flex flex-col overflow-hidden border-t border-black pt-4">
        <m.div style={ { x } } className={ `flex gap-4 ${ className }` }>
          { children }
        </m.div>
      </div>
    </section>
  )
}