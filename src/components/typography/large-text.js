export const LargeText = ({ children, className }) =>
  <span className={ `text-lg xl:text-xl xl:tracking-tight leading-[24px] xl:leading-[28px] ${ className }` }>
    { children }
  </span>