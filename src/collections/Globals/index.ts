import { CollectionConfig } from 'payload/types'

// import { blocks } from '@/blocks'
import Navbar_3 from './header/Navbar_3'
import { NavbarThree_Block } from './header/Navbar_3/block'

export const blocks = {
  NavbarThree_Block: NavbarThree_Block,
}

export type SlugType = keyof typeof blocksJSX

export const blocksJSX = {
  NavbarThree: Navbar_3,
}

export const Globals: CollectionConfig = {
  slug: 'globals',
  labels: {
    singular: 'Global',
    plural: 'Globals',
  },
  access: {
    read: () => true,
  },
  //   admin: {
  //     useAsTitle: 'name',
  //     preview: doc => {
  //       return `${env.NEXT_PUBLIC_PUBLIC_URL}/next/preview?url=${encodeURIComponent(
  //         `${env.NEXT_PUBLIC_PUBLIC_URL}/${doc.slug !== 'index' ? doc.slug : ''}`,
  //       )}&secret=${env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
  //     },
  //   },
  versions: {
    drafts: true,
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
    },
  ],
}
