import { Block } from 'payload/types'

export const About_2_Block: Block = {
  slug: 'About_2',
  interfaceName: 'About_2',
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
      name: 'test_text',
      label: 'Test Text',
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
  // fields: [
  //   {
  //     type: 'tabs',
  //     tabs: [
  //       {
  //         label: 'Navbar Three',
  //         description: 'Please provide details.',
  //         fields: [
  //           {
  //             name: 'title',
  //             label: 'Title',
  //             type: 'text',
  //             required: true,
  //           },
  //           {
  //             name: 'button_one',
  //             label: 'Button one',
  //             type: 'text',
  //             required: true,
  //           },
  //           {
  //             name: 'button_two',
  //             label: 'Button Two',
  //             type: 'text',
  //             required: true,
  //           },
  //         ],
  //       },
  //       {
  //         label: 'menus',
  //         description: 'Please provide details.',
  //         fields: [
  //           {
  //             name: 'menus',
  //             label: 'Menus',
  //             type: 'array',
  //             fields: [
  //               {
  //                 name: 'menu_name',
  //                 label: 'Menu Name',
  //                 type: 'text',
  //                 required: true,
  //               },
  //               {
  //                 name: 'menu_link',
  //                 label: 'Menu Link',
  //                 type: 'text',
  //                 required: true,
  //               },
  //               {
  //                 name: 'has_drop_down',
  //                 label: 'Has Drop Down',
  //                 type: 'checkbox',
  //                 defaultValue: true,
  //               },
  //               {
  //                 // type: 'row',
  //                 // fields: [
  //                 //   {
  //                 //     name: 'sub_menu',
  //                 //     label: 'Sub Menu',
  //                 //     type: 'array',
  //                 //     admin: {
  //                 //       description: 'Drop down menu',
  //                 //       condition: data => {
  //                 //         console.log(data)
  //                 //         if (data.has_drop_down) {
  //                 //           return true
  //                 //         } else {
  //                 //           return false
  //                 //         }
  //                 //       },
  //                 //     },
  //                 //     fields: [
  //                 //       {
  //                 //         name: 'sub_menu_name',
  //                 //         label: 'Sub Menu Name',
  //                 //         type: 'text',
  //                 //         required: true,
  //                 //       },
  //                 //       {
  //                 //         name: 'sub_menu_link',
  //                 //         label: 'Sub Menu Link',
  //                 //         type: 'text',
  //                 //         required: true,
  //                 //       },
  //                 //     ],
  //                 //   },
  //                 // ],
  //                 name: 'sub_menu',
  //                 label: 'Sub Menu',
  //                 type: 'array',
  //                 admin: {
  //                   description: 'Drop down menu',
  //                   condition: (data, siblingData) => {
  //                     console.log(data)
  //                     if (data.has_drop_down) {
  //                       return true
  //                     } else {
  //                       return false
  //                     }
  //                   },
  //                 },
  //                 fields: [
  //                   {
  //                     name: 'sub_menu_name',
  //                     label: 'Sub Menu Name',
  //                     type: 'text',
  //                     required: true,
  //                   },
  //                   {
  //                     name: 'sub_menu_link',
  //                     label: 'Sub Menu Link',
  //                     type: 'text',
  //                     required: true,
  //                   },
  //                 ],
  //               },

  //               // {
  //               //   name: 'sub_menu_name',
  //               //   label: 'Sub Menu Name',
  //               //   type: 'text',
  //               //   required: true,
  //               //   admin: {
  //               //     condition: (data, siblingData) => {
  //               //       console.log(data)
  //               //       if (siblingData.has_drop_down) {
  //               //         return true
  //               //       } else {
  //               //         return false
  //               //       }
  //               //     },
  //               //   },
  //               // },
  //               // {
  //               //   name: 'sub_menu_link',
  //               //   label: 'Sub Menu Link',
  //               //   type: 'text',
  //               //   required: true,
  //               //   admin: {
  //               //     condition: (data, siblingData) => {
  //               //       if (siblingData.has_drop_down) {
  //               //         return true
  //               //       } else {
  //               //         return false
  //               //       }
  //               //     },
  //               //   },
  //               // },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         label: 'social',
  //         description: 'Please provide details',
  //         fields: [
  //           {
  //             name: 'facebook',
  //             label: 'Facebook',
  //             type: 'text',
  //             required: true,
  //           },
  //           {
  //             name: 'youtube',
  //             label: 'YouTube',
  //             type: 'text',
  //             required: true,
  //           },
  //           {
  //             name: 'twitter',
  //             label: 'Twitter',
  //             type: 'text',
  //             required: true,
  //           },
  //         ],
  //       },
  //       {
  //         label: 'contact',
  //         description: 'Please provide details',
  //         fields: [
  //           {
  //             name: 'email',
  //             label: 'Email',
  //             type: 'text',
  //             required: true,
  //           },
  //           {
  //             name: 'phone',
  //             label: 'Phone',
  //             type: 'text',
  //             required: true,
  //           },
  //           {
  //             name: 'address',
  //             label: 'Address',
  //             type: 'text',
  //             required: true,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
}
