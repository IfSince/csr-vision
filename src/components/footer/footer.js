import logo_with_claim from '../../images/logo-variants/logo_with_claim.svg'
import { FooterLink } from './footer-link.js'
import { LinkedinIcon } from '../icons/socials/linkedin-icon.js'
import { GroupHover } from '../group-hover.js'
import { GroupHoverListItem } from '../group-hover-list-item.js'
import { LinkIconButton } from '../buttons/link-icon-button.js'

export const Footer = ({ items }) => {

  return (
    <footer>
      <div className="pt-24 pb-8 horizontal-spacing">
        <div className="mb-20 flex w-full flex-row flex-wrap gap-x-8 gap-y-10 md:mb-32">
          <div className="grow">
            <img className="h-20 w-fit sm:h-24 md:h-28 lg:h-32" src={ logo_with_claim } alt="Logo" loading="lazy"/>
          </div>

          <div className="flex grow flex-col justify-between">
            <ul>
              <GroupHover>
                {
                  (params) => (items.map(item =>
                    <GroupHoverListItem className="w-fit" index={ item.index } { ...params } key={ item.index }>
                      <FooterLink { ...item }/>
                    </GroupHoverListItem>,
                  ))
                }
              </GroupHover>
            </ul>
          </div>

          <ul className="flex grow-0 flex-col gap-5 pr-8 min-w-[20%]">
            <li className="flex flex-col">
              <span className="font-semibold">Email</span>
              <a className="text-black/70 underline underline-offset-4" href="mailto:csr-vision@gmx.de">csr-vision@gmx.de</a>
            </li>

            <li className="mt-2">
              <div className="flex gap-3">
                <LinkIconButton size="sm" label="Go to LinkedIn" link="https://www.linkedin.com/in/csr-vision" target="_blank">
                  <LinkedinIcon/>
                </LinkIconButton>
              </div>
            </li>
          </ul>
        </div>


        <div className="flex w-full justify-end gap-x-3 gap-y-4">
          <span className="font-light text-black/70">© 2023 Copyright csr.vision</span>
        </div>

      </div>
    </footer>
  )
}