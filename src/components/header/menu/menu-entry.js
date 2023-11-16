export const MenuEntry = ({ text, link, mobileOnly = false }) =>
  <li className={ `p-0.5 hover:underline underline-offset-4 ${ mobileOnly && 'md:hidden' }` }>
    <a href={ link }>{ text }</a>
  </li>