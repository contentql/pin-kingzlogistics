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
      name: 'button_two',
      label: 'Button Two',
      type: 'text',
      required: true,
    },
  ],
}
