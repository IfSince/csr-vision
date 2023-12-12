import { IconButton } from './icon-button.js'

export const LinkIconButton = ({ size = 'lg', link, target = '_self', label, children }) =>
  <a href={ link } target={ target }>
    <IconButton size={ size }>
      <span className="sr-only">{ label }</span>
      { children }
    </IconButton>
  </a>
