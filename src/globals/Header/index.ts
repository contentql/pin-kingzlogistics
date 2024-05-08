import { GlobalConfig } from 'payload/types'

import Navbar_3 from '@/blocks/Navbar_3'
import { NavbarThree_Block } from '@/blocks/Navbar_3/block'

export const blocks = {
  NavbarThree_Block: NavbarThree_Block,
}

export type SlugType = keyof typeof blocksJSX


export const blocksJSX = {
  NavbarThree : Navbar_3
}


export const Navbar: GlobalConfig = {
   slug: 'Navbar',
   typescript : {
    interface: 'Navbar'
   },
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: Object.values(blocks),
      maxRows: 1,
    },
  ],
}
