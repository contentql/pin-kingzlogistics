'use client'

import { Home1_Banner, Media } from '@payload-types'

const Home1Banner = (data:Home1_Banner) => {
  
  return (
    <div className='banner-area banner-area2'>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div className='single-banner single-banner-2 banner-970'>
              <div
                className='banner-bg banner-bg2'
                style={{ backgroundImage: `url(${(data?.banner_image as Media)?.url})` }}></div>
              <div className='container pos-rel'>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='banner-content banner-content2 mx-auto text-center banner-content2-1 pt-155'>
                      <h1
                        className='banner-title'
                        data-animation='fadeInUp'
                        data-delay='.5s'>
                        {data?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1Banner
