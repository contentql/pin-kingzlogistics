import { ContactType } from '@payload-types'

import ContactFrom from './contact-form'

const Contact = (data: ContactType) => {
  return (
    <main>
      <ContactFrom {...data} />
    </main>
  )
}

export default Contact
