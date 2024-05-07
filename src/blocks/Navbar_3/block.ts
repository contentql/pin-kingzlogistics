import { Block } from 'payload/types'

export const NavbarThree_Block: Block = {
  slug: 'NavbarThree',
  interfaceName: 'NavbarThree',
  // imageURL: '',
  imageURL: './page.PNG',
  labels: {
    singular: 'NavbarThree Block',
    plural: 'NavbarThree Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_one',
      label: 'Button one',
      type: 'text',
      required: true,
    },
    {
      name: 'button_two',
      label: 'Button two',
      type: 'text',
      required: true,
    },
    {
      name: 'menu',
      label: 'Menu',
      type: 'array',
      fields: [
        {
          name: 'menu_name',
          label: 'Menu Name',
          type: 'text',
          required: true,
        },
        {
          name: 'menu_link',
          label: 'Menu Link',
          type: 'text',
          required: true,
        },
        {
          name: 'has_drop_down',
          label: 'Has Drop Down',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'sub_menu',
          label: 'Sub Menu',
          type: 'array',
          admin: {
            condition: (data, siblingData) => {
              console.log(siblingData)
              return siblingData.has_drop_down ? true : false
            },
          },
          fields: [
            {
              name: 'sub_menu_name',
              label: 'Sub Menu Name',
              type: 'text',
              required: true,
            },
            {
              name: 'sub_menu_link',
              label: 'Sub Menu Link',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'facebook',
      label: 'Facebook',
      type: 'text',
      required: true,
    },
    {
      name: 'twitter',
      label: 'Twitter',
      type: 'text',
      required: true,
    },
    {
      name: 'instagram',
      label: 'Instagram',
      type: 'text',
      required: true,
    },
    {
      name: 'youtube',
      label: 'Youtube',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      required: true,
    },
  ],
}
