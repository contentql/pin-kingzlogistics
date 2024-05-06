import { Block } from 'payload/types'

export const TeamSection_Block: Block = {
  slug: 'TeamSection',
  // imageURL: '',
  interfaceName: 'TeamSection',
  labels: {
    singular: 'TeamSection Block',
    plural: 'TeamSection Blocks',
  },
  fields: [
    {
      name: 'team_experts',
      label: 'Team Experts',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'expert_image',
          label: 'Expert Image',
          type: 'upload',
          required: true,
          relationTo: 'media',
          admin: {
            description: 'expert image',
          },
        },
        {
          name: 'designation',
          label: 'Designation',
          type: 'text',
          required: true,
        },
        {
          name: 'expert_name',
          label: 'Expert Name',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
