import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import MobileMenus from './mobile-menus'

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen, data }: any) => {
  const {
    banner,
    button_one,
    button_two,
    address,
    email,
    facebook,
    instagram,
    logo,
    phone,
    twitter,
    youtube,
    menu,
  } = data
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <div
        className={`sidebar__area ${isOffCanvasOpen ? 'sidebar-opened' : ''}`}
      >
        <div className='sidebar__wrapper'>
          <div className='sidebar__close'>
            <button
              className='sidebar__close-btn'
              id='sidebar__close-btn'
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className='fal fa-times'></i>
            </button>
          </div>
          <div className='sidebar__content'>
            <div className='sidebar__logo mb-40'>
              <Link href='/'>
                <Image src={logo?.url} alt='Logo' width={85} height={30} />
              </Link>
            </div>
            <div className='sidebar__search mb-25'>
              <form onSubmit={handleSubmit}>
                <div className='single-input-field'>
                  <input name='name' type='text' placeholder='Search Here' />
                  <i className='fas fa-search'></i>
                </div>
              </form>
            </div>

            <div className='mobile-menu fix mb-10 mean-container'>
              <div className='mean-bar'>
                <MobileMenus menus={menu} />
              </div>
            </div>

            <div className='sidebar__contact mt-30 mb-30'>
              <div className='sidebar__info fix'>
                <div className='sidebar__info-item'>
                  <div className='sidebar__info-icon'>
                    <i className='flaticon-telephone-call'></i>
                  </div>
                  <div className='sidebar__info-text'>
                    <span>Call us now</span>
                    <h5>
                      <a href='tel:32622266600'>{phone}</a>
                    </h5>
                  </div>
                </div>
                <div className='sidebar__info-item'>
                  <div className='sidebar__info-icon'>
                    <i className='flaticon-envelope'></i>
                  </div>
                  <div className='sidebar__info-text'>
                    <span>Email now</span>
                    <h5>
                      <a href='mailto:info@webdow.com'>{email}</a>
                    </h5>
                  </div>
                </div>
                <div className='sidebar__info-item'>
                  <div className='sidebar__info-icon'>
                    <i className='flaticon-pin'></i>
                  </div>
                  <div className='sidebar__info-text'>
                    <span>Location</span>
                    <h5>{address}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='sidebar__social'>
              <ul>
                <li>
                  <Link href='https://www.facebook.com/'>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                </li>
                <li>
                  <Link href='https://twitter.com/'>
                    <i className='fab fa-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.behance.net/'>
                    <i className='fab fa-behance'></i>
                  </Link>
                </li>
                <li>
                  <Link href='https://www.youtube.com/'>
                    <i className='fab fa-youtube'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`}
        onClick={() => setIsOffCanvasOpen(false)}
      ></div>
    </React.Fragment>
  )
}

export default OffCanvasMain
