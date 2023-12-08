export const DefaultText = ({ children, className }) =>
  <span className={ `text-sm sm:text-base leading-tight ${ className }` }>
    { children }
  </span>