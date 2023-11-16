import { H2 } from '../typography/h2.js'
import { H3 } from '../typography/h3.js'

export const HeaderSection = ({ title, description, variant = 'default' }) => {
  const classes = 'mb-36 lg:mb-24'

  const variants = {
    header: {
      default: <H2 className={ classes }>{ title }</H2>,
      reversed: <ColIndented className={ classes }><H2>{ title }</H2></ColIndented>,
    },
    subText: {
      default: <ColIndented><H3>{ description }</H3></ColIndented>,
      reversed: <H3 className="xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">{ description }</H3>,
    },
  }

  return (
    <section className="flex flex-col border-t border-b border-black/20 py-24 horizontal-spacing">
      { variants['header'][variant] }
      { variants['subText'][variant] }
    </section>
  )
}


const ColIndented = ({ children, className = '' }) =>
  <div className={ `grid grid-cols-10  ${ className }` }>
    <div className="col-span-1 xs:col-span-2 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-5"></div>
    <div className="col-span-9 xs:col-span-8 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
      { children }
    </div>
  </div>