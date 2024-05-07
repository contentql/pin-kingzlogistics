import { GlobalConfig } from 'payload/types'

export const NavbarThree_Block: GlobalConfig = {
  slug: 'Navbar_3',
  //   interfaceName: 'NavbarThree',
  //   imageURL: './page.PNG',
  //   labels: {
  //     singular: 'NavbarThree Block',
  //     plural: 'NavbarThree Blocks',
  //   },
  fields: [
    {
      name: 'banner',
      label: 'Banner',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the banner text to display',
      },
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload Logo',
      },
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
      admin: {
        description: 'Enter the facebook link',
      },
    },
    {
      name: 'twitter',
      label: 'Twitter',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the twitter link',
      },
    },
    {
      name: 'instagram',
      label: 'Instagram',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the instagram link',
      },
    },
    {
      name: 'youtube',
      label: 'Youtube',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the youtube link',
      },
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
      type: 'email',
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
