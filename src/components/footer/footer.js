import logo_with_claim from '../../images/logo-variants/logo_with_claim.svg'
import { FooterLink } from './footer-link.js'
import { InstagramIcon } from '../icons/socials/instagram-icon.js'
import { LinkedinIcon } from '../icons/socials/linkedin-icon.js'
import { HorizontalWrapper } from '../layout/horizontal-wrapper.js'
import { GroupHover } from '../group-hover.js'
import { GroupHoverListItem } from '../group-hover-list-item.js'
import { IconButton } from '../button/icon-button.js'

export const Footer = ({ items }) => {

  return (
    <footer>
      <HorizontalWrapper className="pt-24 pb-8">
        <div className="mb-20 flex w-full flex-row flex-wrap gap-x-8 gap-y-10 md:mb-32">
          <div className="grow">
            <img className="h-20 w-fit sm:h-24 md:h-28 lg:h-32" src={ logo_with_claim } alt="Logo"/>
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
              <a className="text-black/70 underline underline-offset-4" href="mailto:business@csr-vision.de">business@csr-vision.de</a>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold">Telefon</span>
              <a className="text-black/70 underline underline-offset-4" href="tel:+491757576104">(+49) 175 7576104</a>
            </li>

            <li className="mt-2">
              <div className="flex gap-3">
                <a href="/">
                  <IconButton size="sm">
                    <InstagramIcon/>
                  </IconButton>
                </a>

                <a href="/">
                  <IconButton size="sm">
                    <LinkedinIcon/>
                  </IconButton>
                </a>
              </div>
            </li>
          </ul>
        </div>


        <div className="flex w-full flex-wrap justify-between gap-x-3 gap-y-4">
          <div className="flex gap-3">
            <a className="font-light text-black/70 underline underline-offset-4" href="/">Impressum</a>
            <a className="font-light text-black/70 underline underline-offset-4" href="/">Datenschutz</a>
          </div>
          <div className="flex gap-3">
            <span className="font-light text-black/70">© 2023 Copyright CSR Vision</span>
          </div>
        </div>

      </HorizontalWrapper>
    </footer>
  )
}