import { Block } from 'payload/types'

export const ProcessThree_Block: Block = {
  slug: 'ProcessThree',
  // imageURL: '',
  imageURL: './page.PNG',
  interfaceName: 'ProcessThree',
  labels: {
    singular: 'ProcessThree Block',
    plural: 'ProcessThree Blocks',
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
      name: 'button_one',
      label: 'Button One',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload Image',
      },
    },
    {
      name: 'video_id',
      label: 'Video ID',
      type: 'text',
      required: true,
    },
    {
      name: 'steps',
      label: 'Steps',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
