import Link from 'next/link'
import React, { useState } from 'react'

// internal

const MobileMenus = ({ menus }: any) => {
  const [subMenu, setSubMenu] = useState('')
  const [navTitle, setNavTitle] = useState('')
  //openMobileMenu
  const openMobileMenu = (menu: any) => {
    if (navTitle === menu) {
      setNavTitle('')
    } else {
      setNavTitle(menu)
    }
  }
  // openSubMobileMenu
  // const openSubMobileMenu = s_menu => {
  //   if (subMenu === s_menu) {
  //     setSubMenu('')
  //   } else {
  //     setSubMenu(s_menu)
  //   }
  // }
  return (
    <nav className='mean-nav'>
      <ul>
        {menus.map((menu: any, i: number) => (
          <React.Fragment key={i}>
            {menu.has_drop_down && !menu.active && (
              <li className='menu-item-has-children'>
                <Link href={menu.menu_link}>{menu.menu_name}</Link>
                <ul
                  className='sub-menu'
                  style={{
                    display: navTitle === menu.title ? 'block' : 'none',
                  }}>
                  {menu.sub_menu.map((sub: any, i: number) => (
                    <li key={i}>
                      <Link href={sub.sub_menu_link}>{sub.sub_menu_link}</Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href='#'
                  className={`mean-expand ${
                    navTitle === menu.title ? 'mean-clicked' : ''
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: '18px', cursor: 'pointer' }}>
                  <i className='fal fa-plus'></i>
                </Link>
              </li>
            )}

            {/* {menu?.megaMenu && !menu.pages && (
              <li className="menu-item-has-children has-mega-menu">
                <Link href={menu.link}>{menu.title}</Link>
                <ul
                  className="mega-menu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu?.mega_menus.map((mega_m, i) => (
                    <li key={i}>
                      <Link href={mega_m.link} className="mega-menu-title">
                        {mega_m.title}
                      </Link>
                      <ul
                        style={{
                          display: subMenu === mega_m.title ? "block" : "none",
                        }}
                      >
                        {mega_m.submenus.map((sub_m, i) => (
                          <li key={i}>
                            <Link href={sub_m.link}>{sub_m.title}</Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="#"
                        className={`mean-expand ${
                          subMenu === mega_m.title ? "mean-clicked" : ""
                        }`}
                        onClick={() => openSubMobileMenu(mega_m.title)}
                        style={{ fontSize: "18px", cursor: "pointer" }}
                      >
                        <i className="fal fa-plus"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fal fa-plus"></i>
                </Link>
              </li>
            )}

            {menu.pages && (
              <li className="menu-item-has-children has-mega-menu">
                <Link href={menu.link}>{menu.title}</Link>
                <ul
                  className="mega-menu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu?.mega_menus &&
                    menu?.mega_menus?.map((mega_m, i) => (
                      <li key={i}>
                        <Link href={mega_m.link} className="mega-menu-title">
                          {mega_m.title}
                        </Link>
                        <ul
                          style={{
                            display:
                              subMenu === mega_m.title ? "block" : "none",
                          }}
                        >
                          {mega_m?.submenus &&
                            mega_m?.submenus?.map((sub_m, i) => (
                              <li key={i}>
                                <Link href={sub_m.link}>{sub_m.title}</Link>
                              </li>
                            ))}
                        </ul>
                        <Link
                          href="#"
                          className={`mean-expand ${
                            subMenu === mega_m.title ? "mean-clicked" : ""
                          }`}
                          onClick={() => openSubMobileMenu(mega_m.title)}
                          style={{ fontSize: "18px", cursor: "pointer" }}
                        >
                          <i className="fal fa-plus"></i>
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="#"
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fal fa-plus"></i>
                </Link>
              </li>
            )} */}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenus
