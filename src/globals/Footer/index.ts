import { GlobalConfig } from 'payload/types'

import FooterThree from '@/blocks/Footer-3'
import { FooterThree_Block } from '@/blocks/Footer-3/block'

export const blocks = {
  FooterThree_Block: FooterThree_Block,
}

export const blocksJSX = {
  Footer_3: FooterThree,
}

export type SlugType = keyof typeof blocksJSX

export const Footer: GlobalConfig = {
  slug: 'Footer',
  typescript: {
    interface: 'Footer',
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
