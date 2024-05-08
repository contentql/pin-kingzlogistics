import { Block } from 'payload/types'

//schema
export const Home1_Services_Block: Block = {
  slug: 'Home1_Services',
  interfaceName: 'Home1_Services',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 Services Block',
    plural: 'Home1 Services Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Sub title',
      type: 'text',
      required: true,
    },
    {
      name: 'services',
      label: 'Services',
      type: 'array',
      fields: [
        {
          name: 'serviceIcon',
          type: 'select',
          options: [
            { value: 'flaticon-boat', label: 'boat' },
            { value: 'flaticon-plane', label: 'plane' },
            { value: 'flaticon-frontal-truck', label: 'frontal-truck' },
            { value: 'flaticon-train', label: 'train' },
            { value: 'flaticon-box', label: 'box' },
            { value: 'flaticon-bicycle', label: 'bicycle' },
          ],

          admin: { description: 'service icons' },
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          label: 'Sub title',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
