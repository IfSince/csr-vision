export const scrollToTarget = (ref, scrollY, behavior = 'auto') => {
  const boundingClientRect = ref?.current.getBoundingClientRect()
  const top = boundingClientRect.top + scrollY.get()
  window.scrollTo({ top, behavior })
}