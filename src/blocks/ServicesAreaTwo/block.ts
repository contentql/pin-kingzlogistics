import { Block } from 'payload/types'

export const ServicesAreaTwo_Block: Block = {
  slug: 'ServicesAreaTwo',
  // imageURL: '',
  labels: {
    singular: 'ServicesAreaTwo Block',
    plural: 'ServicesAreaTwo Blocks',
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
      name: 'services',
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
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
 
  ],
}
