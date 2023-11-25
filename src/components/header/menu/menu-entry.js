export const MenuEntry = ({ text, onClick = () => void 0 }) =>
  <button className="inline p-0.5 capitalize" onClick={ onClick }>
    { text }
  </button>