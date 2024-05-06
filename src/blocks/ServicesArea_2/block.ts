import { Block } from 'payload/types'

export const ServiceArea_2_Block: Block = {
  slug: 'ServiceArea_2',
  interfaceName: 'ServiceArea_2',
  // imageURL: '',
  labels: {
    singular: 'ServiceArea_2 Block',
    plural: 'ServiceArea_2 Blocks',
  },
  fields: [
    {
      name: 'servicesData',
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
        {
          name: 'button_text',
          label: 'Button Text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
