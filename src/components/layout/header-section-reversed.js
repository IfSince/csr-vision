import { H2 } from '../typography/h2.js'
import { AnimatedHeader } from '../animations/animated-header.js'
import { H3 } from '../typography/h3.js'

export const HeaderSectionReversed = ({ title, description }) =>
  <section className="flex flex-col border-t border-b border-black px-6 py-24 md:px-10">
    <div className="mb-36 grid grid-cols-8 md:grid-cols-6 lg:mb-24 lg:grid-cols-7">
      <div className="col-span-2 md:col-span-2 lg:col-span-4"></div>
      <div className="col-span-6 max-w-2xl md:col-span-4 lg:col-span-3">
        <H2 className="self-end">
          <AnimatedHeader title={ title }/>
        </H2>
      </div>
    </div>

    <H3 className="max-w-sm sm:max-w-md xl:max-w-2xl">
      { description }
    </H3>
  </section>