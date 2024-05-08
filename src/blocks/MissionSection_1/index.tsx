import { Media, MissionSection_1 } from '@payload-types'
import Link from 'next/link'

const MissionSection = (MissionSection_1_data: MissionSection_1) => {
  return (
    <section className='mission__area p-relative fix grey-bg-4 mb-120'>
      <div className='mission__img m-img'>
        <img
          src={(MissionSection_1_data?.image as Media)?.url || ''}
          style={{ width: '100%', height: 'auto' }}
          alt='mission'
        />
      </div>
      <div className='container'>
        <div className='row g-0'>
          <div className='col-lg-6'>
            <div
              className='mission__content wow fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='.3s'
            >
              <div className='section__title mb-35'>
                <span className='sub-title'>{MissionSection_1_data?.tag}</span>
                <h2 className='title'>{MissionSection_1_data?.title}</h2>
              </div>
              <div className='mission__text'>
                <p>{MissionSection_1_data?.description}</p>
                <div className='mission__text-inner'>
                  <img
                    src={
                      (MissionSection_1_data?.small_image as Media)?.url || ''
                    }
                    style={{ width: 'auto', height: 'auto' }}
                    alt='mission'
                  />
                  <div className='mission__text-contact'>
                    <div className='single-contact-info d-flex align-items-center'>
                      <div className='contact-info-icon'>
                        <Link href='#'>
                          <i className='flaticon-envelope'></i>
                        </Link>
                      </div>
                      <div className='contact-info-text'>
                        <span>{MissionSection_1_data?.heading}</span>
                        <h5>
                          <Link href='mailto:info@webdow.com'>
                            {MissionSection_1_data?.email}
                          </Link>{' '}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
