import { Block } from 'payload/types'

export const PriceCtaArea_Block: Block = {
  slug: 'PriceCtaArea_2',
  // imageURL: '',
  interfaceName: 'PriceCtaArea_2',
  labels: {
    singular: 'PriceCtaArea_2 Block',
    plural: 'PriceCtaArea_2 Blocks',
  },
  fields: [
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background image',
      },
    },
    {
      name: 'tag',
      label: 'Tag',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button text',
      type: 'text',
      required: true,
    },
  ],
}
