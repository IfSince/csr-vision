import { H2 } from '../typography/h2.js'
import { H3 } from '../typography/h3.js'

export const HeaderSection = ({ variant = 'default', title, subText, subElement = <></> }) => {
  const classes = 'mb-20 lg:mb-32'

  const subElementWithWrapper = subElement !== <></>
    ? <div className="mt-8 md:mt-10 lg:mt-12">{ subElement }</div>
    : { subElement }

  const variants = {
    header: {
      default: <H2 className={ classes }>{ title }</H2>,
      reversed: <ColIndented className={ classes }><H2>{ title }</H2></ColIndented>,
    },
    subText: {
      default:
        <ColIndented>
          <H3>{ subText }</H3>
          { subElementWithWrapper }
        </ColIndented>,
      reversed:
        <>
          <H3 className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">{ subText }</H3>
          { subElementWithWrapper }
        </>,
    },
  }

  return (
    <section className="flex flex-col border-t border-b border-black/20 py-20 horizontal-spacing md:py-24">
      { variants['header'][variant] }
      { variants['subText'][variant] }
    </section>
  )
}


const ColIndented = ({ children, className = '' }) =>
  <div className={ `grid grid-cols-10  ${ className }` }>
    <div className="col-span-1 xs:col-span-2 sm:col-span-4 2xl:col-span-5"></div>
    <div className="col-span-9 xs:col-span-8 sm:col-span-6 2xl:col-span-5">
      { children }
    </div>
  </div>