export const scrollToTarget = (ref, scrollY, behavior = 'auto', offset = 0) => {
  const boundingClientRect = ref?.current.getBoundingClientRect()
  const top = boundingClientRect.top + scrollY.get() + offset
  window.scrollTo({ top, behavior })
}