'use client'

import { Media, PriceCtaArea_2 } from '@payload-types'
import Image from 'next/image'

import PriceFrom from '@/app/(app)/_components/price-from'

const PriceCtaArea = (PriceCtaArea_2_data: PriceCtaArea_2) => {
  return (
    <section className='price__cta-3 price__cta3-bg p-relative'>
      <div className='price__cta-3-img d-none d-xl-block'>
        <Image
          src={(PriceCtaArea_2_data?.background_image as Media)?.url || ''}
          alt='cta'
          // style={{ width: '100%', height: '100%' }}
          fill
        />
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xxl-6 col-xl-6'></div>
          <div className='col-xl-6'>
            <div
              className='price__cta-content-3 wow fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='.3s'>
              <div className='section__title mb-55'>
                <span className='sub-title'>{PriceCtaArea_2_data?.tag}</span>
                <h2 className='title'>{PriceCtaArea_2_data?.title}</h2>
              </div>
              <div className='price__cta-form'>
                <PriceFrom button_text={PriceCtaArea_2_data?.button_text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceCtaArea
