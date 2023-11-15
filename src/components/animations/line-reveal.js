import { m } from 'framer-motion'

const variants = {
  hidden: { y: '120%' },
  visible: { y: 0 },
}

export const LineReveal = ({ text }) =>
  <m.div className="flex flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={ { amount: 'all', once: true } }>
    {
      text?.split(' ').map((word, index) =>
        <div style={ { clipPath: 'polygon(0% 0%, 0% 120%, 110% 120%, 110% 0%)' } } key={ index }>
          <m.span className="block"
                       variants={ variants }>
            { word }&nbsp;
          </m.span>
        </div>,
      )
    }
  </m.div>