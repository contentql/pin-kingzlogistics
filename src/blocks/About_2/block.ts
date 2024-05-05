import { Block } from 'payload/types'

export const About_2_Block: Block = {
  slug: 'About_2',
  // imageURL: '',
  labels: {
    singular: 'About_2 Block',
    plural: 'About_2 Blocks',
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
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'button_one',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'button_two',
      label: 'Button Two',
      type: 'text',
      required: true,
    },
  ],
}
