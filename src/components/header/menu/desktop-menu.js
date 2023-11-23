export const DesktopMenu = ({ children, className }) =>
  <div className={ `h-full flex-col items-center justify-center ${ className }` }>
    <ul className="flex items-center gap-x-8 text-lg font-medium leading-tight">
      { children }
    </ul>
  </div>