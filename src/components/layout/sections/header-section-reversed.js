import { ColIndented } from '../col-indented.js'
import { H2 } from '../../typography/h2.js'
import { HeaderH3 } from '../header/header-h3.js'
import { HeaderWrapper } from '../wrapper/header-wrapper.js'

export const HeaderSectionReversed = ({ title, subTitle, children }) =>
  <HeaderWrapper spacingType="header">
    {
      title &&
      <ColIndented>
        <H2>{ title }</H2>
      </ColIndented>
    }
    { subTitle && <HeaderH3>{ subTitle }</HeaderH3> }
    { children }
  </HeaderWrapper>