import { Block } from 'payload/types'

//schema
export const Home1_Faq_Block: Block = {
  slug: 'Home1_Faq',
  interfaceName: 'Home1_Faq',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 Faq Block',
    plural: 'Home1 Faq Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Sub title',
      type: 'text',
      required: true,
    },

    {
      name: 'queries',
      label: 'Query',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
