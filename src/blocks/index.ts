// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import Hero_3 from './Hero_3'
import { HeroThree_Block } from './Hero_3/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
  heroThree: Hero_3,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
  heroThree: HeroThree_Block,
}
