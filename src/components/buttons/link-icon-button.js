import { IconButton } from './icon-button.js'

export const LinkIconButton = ({ size = 'lg', link, target = '_self', label, children }) =>
  <a href={ link } target={ target }>
    <span className="sr-only">{ label }</span>
    <IconButton size={ size }>
      { children }
    </IconButton>
  </a>
