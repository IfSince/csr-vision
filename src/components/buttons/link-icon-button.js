import { IconButton } from './icon-button.js'

export const LinkIconButton = ({ size = 'lg', link, label, children }) =>
  <a href={ link }>
    <span className="sr-only">{ label }</span>
    <IconButton size={ size }>
      { children }
    </IconButton>
  </a>
