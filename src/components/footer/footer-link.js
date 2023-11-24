export const FooterLink = ({ text, onClick = () => void 0 }) =>
  <li className="font-medium leading-snug underline-offset-4 text-h4 p-0.5 hover:underline">
    <button className="inline capitalize tracking-tight" onClick={ onClick }>
      { text }
    </button>
  </li>