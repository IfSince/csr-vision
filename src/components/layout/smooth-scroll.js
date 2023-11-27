import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { m, useScroll, useSpring, useTransform } from 'framer-motion'
import { IsMobileContext } from '../../util/is-mobile-context.js'

export const SmoothScroll = ({ children }) => {
  const isMobile = useContext(IsMobileContext)
  const scrollRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0)
  const resizePageHeight = useCallback(entries => entries?.forEach(entry => setPageHeight(entry.contentRect?.height)), [])

  useEffect(() => {
    if (!isMobile) {
      const resizeObserver = new ResizeObserver(entries => resizePageHeight(entries))
      scrollRef && resizeObserver?.observe(scrollRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [scrollRef, resizePageHeight, isMobile])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const spring = useSpring(transform, { damping: 15, mass: 0.2, stiffness: 70 })

  return (
    isMobile
      ? children
      : (
        <>
          <m.div ref={ scrollRef }
                 style={ { y: spring } }
                 className="fixed top-0 left-0 w-full overflow-hidden will-change-transform">
            { children }
          </m.div>

          <div style={ { height: pageHeight } }/>
        </>
      )
  )
}