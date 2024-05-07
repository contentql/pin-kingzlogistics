/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    blogs: Blog;
    pages: Page;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: string;
  name: string;
  slug: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  description_html?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  name: string;
  slug: string;
  layout?:
    | (
        | {
            title: string;
            sub_title: string;
            button_text: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'Test1_1';
          }
        | {
            title: string;
            sub_title: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'page1';
          }
        | BrandArea
        | FunfactArea
        | TeamSection
        | Home1_Banner
        | Home1_Services
        | HeroThree
        | Service_3
        | About_2
        | ServiceArea_2
        | NavbarThree
        | Home1_Help_Service
        | Home1_TeamSection
        | Home1_AboutUs
        | PortfolioArea
        | ServiceCta_2
        | ContactIfoArea_2
        | BlogSection_2
        | Footer_3
        | Hero_2
        | PriceCtaArea_2
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BrandArea".
 */
export interface BrandArea {
  brands: {
    brand_image: string | Media;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'BrandArea';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FunfactArea".
 */
export interface FunfactArea {
  funfacts: {
    number: number;
    title: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'FunfactArea';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TeamSection".
 */
export interface TeamSection {
  team_experts: {
    expert_image: string | Media;
    designation: string;
    expert_name: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'TeamSection';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Home1_Banner".
 */
export interface Home1_Banner {
  title: string;
  banner_image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Home1_Banner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Home1_Services".
 */
export interface Home1_Services {
  title: string;
  subtitle: string;
  services?:
    | {
        serviceIcon?: string | Media | null;
        title: string;
        subtitle: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Home1_Services';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "heroThree".
 */
export interface HeroThree {
  hero: {
    title: string;
    title_2: string;
    sub_title: string;
    hero_2_image: string | Media;
    id?: string | null;
  }[];
  button_one: string;
  button_two: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'heroThree';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Service_3".
 */
export interface Service_3 {
  services_3: {
    title: string;
    sub_title: string;
    icon: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'Service_3';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "About_2".
 */
export interface About_2 {
  title: string;
  sub_title: string;
  description: string;
  image: string | Media;
  test_text: string;
  button_one: string;
  button_two: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'About_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceArea_2".
 */
export interface ServiceArea_2 {
  servicesData: {
    title: string;
    sub_title: string;
    icon: string;
    button_text: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'ServiceArea_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavbarThree".
 */
export interface NavbarThree {
  button_two: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'NavbarThree';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Home1_Help_Service".
 */
export interface Home1_Help_Service {
  title: string;
  buttonText: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Home1_Help_Service';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Home1_Team_section".
 */
export interface Home1_TeamSection {
  title: string;
  subtitle: string;
  team?:
    | {
        teamMemberImage?: string | Media | null;
        role: string;
        name: string;
        socialMedia?:
          | {
              socialMediaName: string;
              socialMediaLink: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Home1_Team_section';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Home1_AboutUs".
 */
export interface Home1_AboutUs {
  title: string;
  subtitle: string;
  AboutUsVideoUrl: string;
  tab?:
    | {
        tabTitle: string;
        tabDescription: string;
        tabUrl: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Home1_AboutUs';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PortfolioArea".
 */
export interface PortfolioArea {
  tag: string;
  title: string;
  button_1: string;
  button_2: string;
  button_3: string;
  button_4: string;
  button_5: string;
  portfolios: {
    image: string | Media;
    title: string;
    sub_title: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'PortfolioArea_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceCta_2".
 */
export interface ServiceCta_2 {
  title: string;
  button_1: string;
  button_2: string;
  background_image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ServiceCta_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactIfoArea_2.".
 */
export interface ContactIfoArea_2 {
  tag: string;
  title: string;
  description: string;
  button_text: string;
  flag_images: {
    flag_image: string | Media;
    id?: string | null;
  }[];
  contact_information: {
    title: string;
    sub_title: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'ContactInfoArea_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlogSection_2".
 */
export interface BlogSection_2 {
  tag: string;
  title: string;
  blogs: {
    blog_image: string | Media;
    date: number;
    month: string;
    number_of_comments: number;
    author: string;
    title: string;
    sub_title: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'BlogSection_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Footer_3".
 */
export interface Footer_3 {
  heading_1: string;
  description_1: string;
  heading_2: string;
  links_1: {
    link: string;
    id?: string | null;
  }[];
  links_2: {
    link: string;
    id?: string | null;
  }[];
  heading_3: string;
  description_2: string;
  button_text: string;
  heading_4: string;
  images: {
    image: string | Media;
    id?: string | null;
  }[];
  links_3: {
    link: string;
    id?: string | null;
  }[];
  footer_image: string | Media;
  copyright_text: string;
  copyright_text_link: string;
  copyright_year: number;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Footer_3';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Hero_2".
 */
export interface Hero_2 {
  hero: {
    sub_title: string;
    title_1: string;
    title_2: string;
    hero_2_image: string | Media;
    id?: string | null;
  }[];
  button_one: string;
  button_two: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero_2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PriceCtaArea_2".
 */
export interface PriceCtaArea_2 {
  background_image: string | Media;
  tag: string;
  title: string;
  button_text: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'PriceCtaArea-2';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}