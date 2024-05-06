// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import BrandArea from './BrandArea'
import { BrandArea_Block } from './BrandArea/block'
import FunfactArea from './FunfactArea'
import { FunfactArea_Block } from './FunfactArea/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
import TeamSection from './TeamSection'
import { TeamSection_Block } from './TeamSection/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
  BrandArea: BrandArea,
  FunfactArea: FunfactArea,
  TeamSection: TeamSection,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
  BrandArea_Block: BrandArea_Block,
  FunfactArea_Block: FunfactArea_Block,
  TeamSection_Block: TeamSection_Block,
}
