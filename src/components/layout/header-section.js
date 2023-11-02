import { H2 } from '../typography/h2.js'
import { AnimatedHeader } from '../animations/animated-header.js'
import { H3 } from '../typography/h3.js'
import { RouteButton } from '../button/route-button.js'

export const HeaderSection = ({ title, description }) =>
  <section className="flex flex-col border-t border-b border-black px-6 py-24 md:px-10">
    <H2 className="mb-36 lg:mb-24">
      <AnimatedHeader title={ title }/>
    </H2>

    <div className="grid grid-cols-8 md:grid-cols-6 lg:grid-cols-7">
      <div className="col-span-2 md:col-span-2 lg:col-span-4"></div>
      <div className="col-span-6 max-w-2xl md:col-span-4 lg:col-span-3">
        <H3>
          { description }
        </H3>
        <RouteButton description="See more" route="route" className="mt-10"/>
      </div>
    </div>
  </section>