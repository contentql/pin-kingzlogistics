// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import AboutUs_2 from '@/blocks/About_2'
import { About_2_Block } from '@/blocks/About_2/block'
import ApproachArea from '@/blocks/ApproachArea_1'
import { ApproachArea_Block } from '@/blocks/ApproachArea_1/block'
import BlogSectionTwo from '@/blocks/BlogSection_2'
import { BlogSectionTwo_Block } from '@/blocks/BlogSection_2/block'
import BrandArea from '@/blocks/BrandArea'
import { BrandArea_Block } from '@/blocks/BrandArea/block'
import { Cards } from '@/blocks/Cards'
import { Cards_Block } from '@/blocks/Cards/block'
import ContactInfoArea from '@/blocks/ContactInfoArea_2'
import { ContactInfoArea_2_Block } from '@/blocks/ContactInfoArea_2/block'
import { Container_Scroll } from '@/blocks/Container_Scroll'
import { Container_Scroll_Block } from '@/blocks/Container_Scroll/block'
import FooterThree from '@/blocks/Footer-3'
import { FooterThree_Block } from '@/blocks/Footer-3/block'
import FunfactArea from '@/blocks/FunfactArea'
import { FunfactArea_Block } from '@/blocks/FunfactArea/block'
import HelpService from '@/blocks/Help_Services'
import { Home1_Help_Service_Block } from '@/blocks/Help_Services/block'
import HeroTwo from '@/blocks/Hero-2'
import { Hero_2_Block } from '@/blocks/Hero-2/block'
import { HeroParallax } from '@/blocks/HeroParallax'
import { HeroParallax_Block } from '@/blocks/HeroParallax/block'
import Hero_3 from '@/blocks/Hero_3'
import { HeroThree_Block } from '@/blocks/Hero_3/block'
import Home1AboutUs from '@/blocks/Home1_AboutUs'
import { Home1_AboutUs_Block } from '@/blocks/Home1_AboutUs/block'
import Home1Banner from '@/blocks/Home1_Banner'
import { Home1_Banner_Block } from '@/blocks/Home1_Banner/block'
// import Home1RecentWorks from '@/blocks/Home1_RecentWorks'
// import { Home1_RecentWork_Block } from '@/blocks/Home1_RecentWorks/block'
import Home1ServicesArea from '@/blocks/Home1_Services'
import { Home1_Services_Block } from '@/blocks/Home1_Services/block'
import MissionSection from '@/blocks/MissionSection_1'
import { MissionSection_Block } from '@/blocks/MissionSection_1/block'
import Navbar_3 from '@/blocks/Navbar_3'
import { NavbarThree_Block } from '@/blocks/Navbar_3/block'
import PortfolioArea from '@/blocks/PortfolioArea_2'
import { PortfolioArea_Block } from '@/blocks/PortfolioArea_2/block'
import PriceCtaArea from '@/blocks/PriceCtaArea-2'
import { PriceCtaArea_Block } from '@/blocks/PriceCtaArea-2/block'
import ProcessThree from '@/blocks/Process_3'
import { ProcessThree_Block } from '@/blocks/Process_3/block'
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
import { Testimonials } from '@/blocks/Testimonials'
import { Testimonials_Block } from '@/blocks/Testimonials/block'

// import Test1_1 from '@/blocks/Test1_1'
// import { Test1_1_Block } from '@/blocks/Test1_1/block'
import Home1_Faq from './Home1_Faq'
import { Home1_Faq_Block } from './Home1_Faq/block'

export const blocksJSX = {
  BrandArea: BrandArea,
  FunfactArea: FunfactArea,
  TeamSection: TeamSection,
  Testimonials: Testimonials,
  Cards: Cards,
  Container_Scroll: Container_Scroll,
  HeroParallax: HeroParallax,

  Home1_Banner: Home1Banner,
  Home1_Services: Home1ServicesArea,
  heroThree: Hero_3,
  Service_3: Service_3,
  About_2: AboutUs_2,
  ServiceArea_2: ServicesAreaTwo,
  NavbarThree: Navbar_3,

  ProcessThree: ProcessThree,

  Home1_Help_Service: HelpService,
  Home1_Team_section: Home1_Team_section,
  Home1AboutUs: Home1AboutUs,
  PortfolioArea_2: PortfolioArea,
  ServiceCta_2: ServiceCta,
  ContactInfoArea_2: ContactInfoArea,
  BlogSection_2: BlogSectionTwo,
  Footer_3: FooterThree,
  Hero_2: HeroTwo,
  PriceCtaArea_2: PriceCtaArea,
  ApproachArea_1: ApproachArea,
  MissionSection_1: MissionSection,
  // Home1_RecentWork: Home1RecentWorks,
  Home1_Faq: Home1_Faq,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
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
  FooterThree: FooterThree_Block,
  Hero_2: Hero_2_Block,
  PriceCtaArea: PriceCtaArea_Block,
  ApproachArea: ApproachArea_Block,
  MissionSection: MissionSection_Block,
  Testimonials_Block: Testimonials_Block,
  Cards_Block: Cards_Block,
  Container_Scroll_Block: Container_Scroll_Block,
  HeroParallax_Block: HeroParallax_Block,
  // PriceCalc_2_Block: PriceCalc_2_Block,
  ProcessThree_Block: ProcessThree_Block,
  Home1_Faq: Home1_Faq_Block,
}
