import { HorizontalWrapper } from '../layout/horizontal-wrapper.js'
import { MenuEntry } from './menu/menu-entry.js'
import { ButtonTemplate } from '../button/button-template.js'
import logo from '../../images/logo-variants/logo.svg'

export const Header = ({ items }) => {
  return (
    <header className="fixed z-40 h-20 w-full pr-1 sm:pr-2 sm:pl-1 md:pr-4 md:pl-2">
      <HorizontalWrapper className="flex h-full w-full items-center justify-between">
        <a href="/" className="flex h-full w-28 items-center justify-center md:w-30">
          <img className="h-auto w-full object-fill" src={ logo } alt="Logo"/>
        </a>

        <nav className="h-full">
          <div className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-x-8 bg-white pt-10 -translate-y-full
                          md:top-unset md:left-unset md:relative md:h-full md:bg-transparent md:pt-0 md:translate-y-0 md:transition-none">
            <ul className="flex w-full flex-col items-center gap-x-8 gap-y-6 leading-tight text-black font-undotted text-h1 font-bold
                           md:w-auto md:flex-row md:justify-center md:text-lg md:font-medium">
              {
                items.map(entry => <MenuEntry { ...entry } key={ entry.text }/>)
              }
            </ul>

            <ButtonTemplate className="mt-24 flex h-16 w-16 items-center justify-center rounded-full text-xl md:hidden md:h-20 md:w-20 md:text-2xl">
              <span className="sr-only">Close menu</span>
              <svg className="h-7 w-7"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 -960 960 960">
                <path
                  d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>
              </svg>
            </ButtonTemplate>
          </div>


          <button className="h-full pl-2 text-black">
            <span className="sr-only">Open menu</span>
            <svg className="flex h-7 w-7 md:hidden"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 -960 960 960">
              <path
                d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/>
            </svg>
          </button>
        </nav>
      </HorizontalWrapper>
    </header>
  )
}