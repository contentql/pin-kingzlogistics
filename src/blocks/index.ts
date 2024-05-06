// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import AboutUs_2 from './About_2'
import { About_2_Block } from './About_2/block'
import Hero_3 from './Hero_3'
import { HeroThree_Block } from './Hero_3/block'
import Navbar_3 from './Navbar_3'
import { NavbarThree_Block } from './Navbar_3/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
import Service_3 from './Service_3'
import { Service_3_Block } from './Service_3/block'
import ServicesAreaTwo from './ServicesArea_2'
import { ServiceArea_2_Block } from './ServicesArea_2/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
  heroThree: Hero_3,
  Service_3: Service_3,
  About_2: AboutUs_2,
  ServiceArea_2: ServicesAreaTwo,
  // PriceCalc_2: PriceCalcArea_2,
  NavbarThree: Navbar_3,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
  heroThree: HeroThree_Block,
  Service_3: Service_3_Block,
  About_2_Block: About_2_Block,
  ServiceArea_2_Block: ServiceArea_2_Block,
  NavbarThree_Block: NavbarThree_Block,
  // PriceCalc_2_Block: PriceCalc_2_Block,
}
