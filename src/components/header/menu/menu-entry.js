export const MenuEntry = ({ text, onClick = () => void 0 }) =>
  <li className="underline-offset-4 p-0.5 hover:underline">
    <button className="inline" onClick={ onClick }>
      { text }
    </button>
  </li>