export const FooterLink = ({ text, onClick = () => void 0 }) =>
  <button className="inline font-bold leading-none tracking-tight p-1.5 font-undotted text-h4" onClick={ onClick }>
    { text }
  </button>