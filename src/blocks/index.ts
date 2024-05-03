// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import AboutUsTwo from './AboutUsTwo'
import { AboutUsTwo_Block } from './AboutUsTwo/block'
import BrandArea from './BrandArea'
import { BrandArea_Block } from './BrandArea/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
import ServicesAreaTwo from './ServicesAreaTwo'
import { ServicesAreaTwo_Block } from './ServicesAreaTwo/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
  AboutUsTwo: AboutUsTwo,
  ServicesAreaTwo: ServicesAreaTwo,
  BrandArea: BrandArea,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
  AboutUsTwo_Block: AboutUsTwo_Block,
  ServicesAreaTwo_Block: ServicesAreaTwo_Block,
  BrandArea_Block: BrandArea_Block,
}
