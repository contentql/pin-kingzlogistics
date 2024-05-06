import { Block } from 'payload/types'

export const PriceCalc_2_Block: Block = {
  slug: 'PriceCalc_2',
  // imageURL: '',
  labels: {
    singular: 'PriceCalc_2 Block',
    plural: 'PriceCalc_2 Blocks',
  },
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
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
  ],
}
