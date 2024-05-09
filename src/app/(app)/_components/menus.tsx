import Link from 'next/link'

const menu_data = [
  {
    id: 1,
    hasDropdown: true,
    title: 'Home',
    link: '/',
    submenus: [
      { title: 'Home Style 01', link: '/' },
      { title: 'Home Style 02', link: '/home-2' },
      { title: 'Home Style 03', link: '/home-3' },
    ],
  },
  {
    id: 2,
    hasDropdown: true,
    title: 'shop',
    link: '/shop',
    submenus: [
      { title: 'shop', link: '/shop' },
      { title: 'shop details', link: '/shop-details' },
      { title: 'wishlist', link: '/wishlist' },
      { title: 'cart', link: '/cart' },
      { title: 'checkout', link: '/checkout' },
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    title: 'services',
    link: '/services',
    submenus: [
      { title: 'services', link: '/services' },
      { title: 'services-details', link: '/services-details' },
    ],
  },

  {
    id: 4,
    title: 'Pages',
    megaMenu: true,
    link: '/about-us',
    pages: true,
    mega_menus: [
      { title: 'About', link: '/about-us' },
      {
        title: 'Portfolio',
        link: '/portfolio',
        submenus: [
          { title: 'Portfolio', link: '/portfolio' },
          { title: 'Portfolio Details', link: '/portfolio-details' },
        ],
      },
      {
        title: 'Team',
        link: '/team',
        submenus: [
          { title: 'Team', link: '/team' },
          { title: 'team details', link: '/team-details' },
        ],
      },
      { title: 'Pricing', link: '/pricing' },
      { title: 'Faq', link: '/faq' },
      { title: 'Awards', link: '/awards' },
      { title: 'Career', link: '/career' },
      { title: 'Location', link: '/location' },
      { title: 'Partner', link: '/partner' },
      { title: 'Quote', link: '/quote' },
      { title: 'Contact', link: '/contact' },
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    title: 'Blog',
    link: '/blog',
    submenus: [
      { title: 'Blog', link: '/blog' },
      { title: 'blog-grid-3-col', link: '/blog-grid-3-col' },
      { title: 'blog-details', link: '/blog-details' },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: 'Contact',
    link: '/contact',
  },
]

const Menus = ({ menus }: any) => {
  return (
    <ul>
      {menus?.map((menu: any, i: number) => (
        <li
          key={i}
          className={` ${menu.has_drop_down ? 'menu-item-has-children' : ''}`}
        >
          <Link href={menu.menu_link || ''}>{menu.menu_name}</Link>
          {menu.has_drop_down && (
            <ul className='sub-menu'>
              {menu.sub_menu?.map((sub: any, i: number) => (
                <li key={i}>
                  <Link href={sub.sub_menu_link || ''}>
                    {sub.sub_menu_name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* {menu.mega_menus && (
            <ul className='sub-menu'>
              {menu.mega_menus &&
                menu?.mega_menus?.map((mega, i) => (
                  <li key={i}>
                    <Link href={mega.link} className='mega-menu-title'>
                      {mega.title}
                    </Link>
                    {mega.submenus && (
                      <ul className='sub-menu'>
                        {mega?.submenus?.map((sub_mega, i) => (
                          <li key={i}>
                            <Link href={sub_mega.link}>{sub_mega.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          )} */}
        </li>
      ))}
    </ul>
  )
}

export default Menus
