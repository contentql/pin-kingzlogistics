import { Block } from 'payload/types'

export const ServiceCta_2_Block: Block = {
  slug: 'ServiceCta_2',
  // imageURL: '',
  interfaceName: 'ServiceCta_2',
  labels: {
    singular: 'ServiceCta_2 Block',
    plural: 'ServiceCta_2 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_1',
      label: 'Button 1',
      type: 'text',
      required: true,
    },
    {
      name: 'button_2',
      label: 'Button 2',
      type: 'text',
      required: true,
    },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'background image',
      },
    },
  ],
}
