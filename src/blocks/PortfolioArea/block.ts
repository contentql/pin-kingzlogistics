import { Block } from 'payload/types'

export const PortfolioArea_Block: Block = {
  slug: 'PortfolioArea',
  // imageURL: '',
  interfaceName: 'PortfolioArea',
  labels: {
    singular: 'PortfolioArea Block',
    plural: 'PortfolioArea Blocks',
  },
  fields: [
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
      name: 'button_3',
      label: 'Button 3',
      type: 'text',
      required: true,
    },
    {
      name: 'button_4',
      label: 'Button 4',
      type: 'text',
      required: true,
    },
    {
      name: 'button_5',
      label: 'Button 5',
      type: 'text',
      required: true,
    },
    {
      name: 'portfolios',
      label: 'Portfolios',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'image',
          },
        },
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
      ],
    },
  ],
}
