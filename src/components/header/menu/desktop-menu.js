import { GroupHoverListItem } from '../../group-hover-list-item.js'
import { MenuEntry } from './menu-entry.js'
import { GroupHover } from '../../group-hover.js'

export const DesktopMenu = ({ items, className }) =>
  <div className={ `h-full flex-col items-center justify-center ${ className }` }>
    <ul className="flex items-center text-lg font-medium leading-tight">
      <GroupHover>
        {
          (params) => (items.filter(item => item.mobileOnly !== true).map(item =>
              <GroupHoverListItem className="[--padding-left:1.5rem] [--padding-right:1.5rem] last:[--padding-right:0rem] first:[--padding-left:0rem]"
                                  key={ item.index }
                                  index={ item.index }
                                  { ...params }>
                <MenuEntry className="pr-[var(--padding-right)] pl-[var(--padding-left)]" { ...item }/>
              </GroupHoverListItem>,
            )
          )
        }
      </GroupHover>
    </ul>
  </div>