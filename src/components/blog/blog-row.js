import { IconButton } from '../buttons/icon-button.js'
import { ArrowRightIcon } from '../icons/arrow-right-icon.js'
import { LargeText } from '../typography/large-text.js'
import { Link } from 'gatsby'
import { ContentWrapper } from '../layout/wrapper/content-wrapper.js'

export const BlogRow = ({ title, date, slug }) =>
  <ContentWrapper className="mb-16 w-full border-t border-black/20">
    <div className="grid grid-rows-1 2xl:grid-cols-10">
      <div className="font-medium 2xl:col-start-1">
        { date }
      </div>

      <div className="2xl:col-span-5 2xl:col-start-5">
        <Link to={ `/blog/${ slug }` }>
          <LargeText>{ title }</LargeText>
        </Link>
      </div>

      <div className="flex justify-end 2xl:col-start-10">
        <IconButton size="md-scaling">
          <ArrowRightIcon/>
        </IconButton>
      </div>

    </div>
  </ContentWrapper>