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
      reversed: <H3>{ description }</H3>,
    },
  }

  return (
    <section className="flex flex-col border-t border-b border-black/20 py-24 horizontal-spacing">
      { variants['header'][variant] }
      { variants['subText'][variant] }
    </section>
  )
}


const ColIndented = ({ children, className }) =>
  <div className={ `grid grid-cols-8 xl:grid-cols-7 ${ className }` }>
    <div className="col-span-1 xs:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-4"></div>
    <div className="col-span-7 max-w-2xl xs:col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-3">
      { children }
    </div>
  </div>