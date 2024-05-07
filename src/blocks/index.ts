// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import AboutUs_2 from '@/blocks/About_2'
import { About_2_Block } from '@/blocks/About_2/block'
import BrandArea from '@/blocks/BrandArea'
import { BrandArea_Block } from '@/blocks/BrandArea/block'
import ContactInfoArea from '@/blocks/ContactInfoArea_2'
import { ContactInfoArea_2_Block } from '@/blocks/ContactInfoArea_2/block'
import FunfactArea from '@/blocks/FunfactArea'
import { FunfactArea_Block } from '@/blocks/FunfactArea/block'
import HelpService from '@/blocks/Help_Services'
import { Home1_Help_Service_Block } from '@/blocks/Help_Services/block'
import Hero_3 from '@/blocks/Hero_3'
import { HeroThree_Block } from '@/blocks/Hero_3/block'
import Home1AboutUs from '@/blocks/Home1_AboutUs'
import { Home1_AboutUs_Block } from '@/blocks/Home1_AboutUs/block'
import Home1Banner from '@/blocks/Home1_Banner'
import { Home1_Banner_Block } from '@/blocks/Home1_Banner/block'
import Home1ServicesArea from '@/blocks/Home1_Services'
import { Home1_Services_Block } from '@/blocks/Home1_Services/block'
import Navbar_3 from '@/blocks/Navbar_3'
import { NavbarThree_Block } from '@/blocks/Navbar_3/block'
import Page1 from '@/blocks/Page1'
import { Page1_Block } from '@/blocks/Page1/block'
import PortfolioArea from '@/blocks/PortfolioArea_2'
import { PortfolioArea_Block } from '@/blocks/PortfolioArea_2/block'
import ServiceCta from '@/blocks/ServiceCta_2'
import { ServiceCta_2_Block } from '@/blocks/ServiceCta_2/block'
import Service_3 from '@/blocks/Service_3'
import { Service_3_Block } from '@/blocks/Service_3/block'
import ServicesAreaTwo from '@/blocks/ServicesArea_2'
import { ServiceArea_2_Block } from '@/blocks/ServicesArea_2/block'
import TeamSection from '@/blocks/TeamSection'
import { TeamSection_Block } from '@/blocks/TeamSection/block'
import Home1_Team_section from '@/blocks/Team_Section'
import { Home1_Team_section_Block } from '@/blocks/Team_Section/block'
import Test1_1 from '@/blocks/Test1_1'
import { Test1_1_Block } from '@/blocks/Test1_1/block'

import BlogSectionTwo from './BlogSection_2'
import { BlogSectionTwo_Block } from './BlogSection_2/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,

  BrandArea: BrandArea,
  FunfactArea: FunfactArea,
  TeamSection: TeamSection,

  Home1_Banner: Home1Banner,
  Home1_Services: Home1ServicesArea,
  heroThree: Hero_3,
  Service_3: Service_3,
  About_2: AboutUs_2,
  ServiceArea_2: ServicesAreaTwo,
  // PriceCalc_2: PriceCalcArea_2,
  NavbarThree: Navbar_3,
  Home1_Help_Service: HelpService,
  Home1_Team_section: Home1_Team_section,
  Home1AboutUs: Home1AboutUs,
  PortfolioArea_2: PortfolioArea,
  ServiceCta_2: ServiceCta,
  ContactInfoArea_2: ContactInfoArea,
  BlogSection_2: BlogSectionTwo,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,

  BrandArea_Block: BrandArea_Block,
  FunfactArea_Block: FunfactArea_Block,
  TeamSection_Block: TeamSection_Block,

  Home1_Banner_Block: Home1_Banner_Block,
  Home1_Services_Block: Home1_Services_Block,
  heroThree: HeroThree_Block,
  Service_3: Service_3_Block,
  About_2_Block: About_2_Block,
  ServiceArea_2_Block: ServiceArea_2_Block,
  NavbarThree_Block: NavbarThree_Block,
  Home1_Help_Service: Home1_Help_Service_Block,
  Home1_Team_section: Home1_Team_section_Block,
  Home1_AboutUs: Home1_AboutUs_Block,
  PortfolioArea_2: PortfolioArea_Block,
  ServiceCta_2: ServiceCta_2_Block,
  ContactInfoArea_2: ContactInfoArea_2_Block,
  BlogSectionTwo: BlogSectionTwo_Block,

  // PriceCalc_2_Block: PriceCalc_2_Block,
}
