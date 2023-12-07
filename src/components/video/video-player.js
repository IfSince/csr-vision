export const VideoPlayer = (props) => {
  const { children, ...rest } = props

  return (
    <video { ...rest }
           onContextMenu={ e => e.preventDefault() }>
      { children }
    </video>
  )
}