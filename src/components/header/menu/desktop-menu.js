import { GroupHoverListItem } from '../../group-hover-list-item.js'
import { GroupHover } from '../../group-hover.js'
import { m } from 'framer-motion'

export const DesktopMenu = ({ items, className }) =>
  <div className={ `h-full flex-col items-center justify-center ${ className }` }>
    <ul className="flex items-center text-lg font-undotted">
      <GroupHover>
        {
          (params) => (items.filter(item => item.mobileOnly !== true).map(item =>
              <GroupHoverListItem className="[--padding-left:1.5rem] [--padding-right:1.5rem] last:[--padding-right:0rem] first:[--padding-left:0rem]"
                                  key={ item.index }
                                  index={ item.index }
                                  { ...params }>
                <m.button className="py-1.5 pr-[var(--padding-right)] pl-[var(--padding-left)]"
                          onClick={ item.onClick }>
                  { item.text }
                </m.button>
              </GroupHoverListItem>,
            )
          )
        }
      </GroupHover>
    </ul>
  </div>