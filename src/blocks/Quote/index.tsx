import { Quote as QuoteType } from '@payload-types'

import QuoteArea from './quote-area'

const Quote = (data: QuoteType) => {
  return (
    <main>
      <QuoteArea {...data} />
    </main>
  )
}

export default Quote
