import { ColIndented } from '../col-indented.js'
import { H2 } from '../../typography/h2.js'
import { H3 } from '../../typography/h3.js'
import { HeaderWrapper } from '../wrapper/header-wrapper.js'

export const HeaderSection = ({ title, subTitle, children, className = '' }) =>
  <HeaderWrapper spacingType="header" className={ className }>
    <H2>{ title }</H2>
    {
      (subTitle || children) &&
      <ColIndented>
        { subTitle && <H3>{ subTitle }</H3> }
        { children }
      </ColIndented>
    }
  </HeaderWrapper>