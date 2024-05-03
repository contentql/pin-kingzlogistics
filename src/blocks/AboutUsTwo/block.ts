import { Block } from 'payload/types'

export const AboutUsTwo_Block: Block = {
  slug: 'aboutustwo',
  // imageURL: '',
  labels: {
    singular: 'AboutUsTwo Block',
    plural: 'AboutUsTwo Blocks',
  },
  fields: [
    {
      name: 'small_image',
      label: 'Small Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload Small Image',
      },
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
      name: 'image_tag',
      label: 'Image Tag',
      type: 'text',
      required: true,
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
      name: 'descriptions',
      label: 'Descriptions',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'details',
      label: 'Details',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'number',
          label: 'Number',
          type: 'number',
          required: true,
        },
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
