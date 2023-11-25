export const FooterLink = ({ text, onClick = () => void 0 }) =>
  <button className="inline font-medium capitalize leading-snug tracking-tight text-h4 p-0.5" onClick={ onClick }>
    { text }
  </button>