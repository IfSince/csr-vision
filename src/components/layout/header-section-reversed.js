import { H2 } from '../typography/h2.js'
import { H3 } from '../typography/h3.js'
import { TextReveal } from '../animations/text-reveal.js'

export const HeaderSectionReversed = ({ title, description }) =>
  <section className="flex flex-col border-t border-b border-black/20 horizontal-spacing header-vertical-spacing">
    <div className="mb-36 grid grid-cols-8 md:grid-cols-6 lg:mb-24 lg:grid-cols-7">
      <div className="col-span-2 md:col-span-2 lg:col-span-4"></div>
      <div className="col-span-6 max-w-2xl md:col-span-4 lg:col-span-3">
        <H2 className="self-end">
          <TextReveal text={ title }/>
        </H2>
      </div>
    </div>

    <H3 className="max-w-sm sm:max-w-md xl:max-w-2xl">
      <TextReveal text={ description }/>
    </H3>
  </section>