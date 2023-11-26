import { useContext, useRef, useState } from 'react'
import { Cursor } from './cursor.js'
import { IsMobileContext } from '../../util/is-mobile-context.js'

export const CursorWrapper = ({ children }) => {
  const isMobile = useContext(IsMobileContext)

  const ref = useRef(null)

  const [cursorElement, setCursorElement] = useState(<></>)
  const [cursorVariant, setCursorVariant] = useState('default')

  const updateCursor = (element, variant) => {
    if (!isMobile) {
      element && setCursorElement(element)
      variant && setCursorVariant(variant)
    }
  }

  return (
    <div ref={ ref } className="relative">
      {
        isMobile
          ? <></>
          : <Cursor containerRef={ ref }
                    cursorVariant={ cursorVariant }
                    cursorElement={ cursorElement }/>
      }
      {
        children({ updateCursor })
      }
    </div>
  )
}