export const scrollToTarget = (ref, scrollY) => {
  const boundingClientRect = ref?.current.getBoundingClientRect()
  const resultY = boundingClientRect.top + scrollY.get()
  window.scrollTo({ top: resultY })
}