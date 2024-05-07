'use client'

import { Media, ServiceCta_2 } from '@payload-types'
import Link from 'next/link'
import 'react-modal-video/css/modal-video.min.css'

import VideoModal from '@/app/(app)/_components/common/modals/modal-video'
import useModal from '@/app/(app)/_hooks/use-modal'

const ServiceCta = (ServiceCta_2_Data: ServiceCta_2) => {
  const { isVideoOpen, setIsVideoOpen } = useModal()
  return (
    <>
      <section
        className='services__cta bg-css overlay pt-125 pb-120'
        style={{
          backgroundImage: `url(${(ServiceCta_2_Data?.background_image as Media)?.url || ''})`,
        }}>
        <div className='container'>
          <div
            className='row justify-content-center wow fadeInUp'
            data-wow-duration='1.5s'
            data-wow-delay='.3s'>
            <div className='col-lg-6'>
              <div className='services__cta-3-content text-center'>
                <div className='services__cta-3-play'>
                  <button
                    type='button'
                    className='popup-video play-btn play-btn-white'
                    onClick={() => setIsVideoOpen(true)}>
                    <i className='fas fa-play'></i>
                  </button>
                </div>
                <h2 className='services__cta-3-title'>
                  {ServiceCta_2_Data?.title}
                </h2>
                <div className='services__cta-3-btn'>
                  <Link className='fill-btn' href='tel:01254896245'>
                    {ServiceCta_2_Data?.button_1}
                  </Link>
                  <Link href='/contact' className='skew-btn'>
                    {ServiceCta_2_Data?.button_2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        videoId='vWLcyFtni6U'
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
      />
    </>
  )
}

export default ServiceCta
