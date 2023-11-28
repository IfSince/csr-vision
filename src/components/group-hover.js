import { useState } from 'react'

const variants = {
  blurred: {
    opacity: 0.5,
  },
  hovered: {
    opacity: 1,
  },
}


export const GroupHover = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 })

  const onMouseOver = (index) => setSelectedLink({ isActive: true, index })
  const onMouseLeave = (index) => setSelectedLink({ isActive: false, index })
  const animate = (index) => selectedLink?.isActive && selectedLink?.index !== index ? 'blurred' : 'hovered'

  return (
    children({ variants, onMouseOver, onMouseLeave, animate })
  )
}