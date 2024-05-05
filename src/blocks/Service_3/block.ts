import { Block } from 'payload/types'

export const Service_3_Block: Block = {
  slug: 'Service_3',
  // imageURL: '',
  labels: {
    singular: 'Service_3 Block',
    plural: 'Service_3 Blocks',
  },
  fields: [
    {
      name: 'services_3',
      label: 'Services',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon Text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
