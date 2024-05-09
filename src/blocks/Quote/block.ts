import { Block } from 'payload/types'

//schema
export const Quote_Block: Block = {
  slug: 'Quote',
  interfaceName: 'Quote',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Quote Block',
    plural: 'Quote Blocks',
  },
  fields: [
    {
      name: 'tabs',
      label: 'Tabs',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
