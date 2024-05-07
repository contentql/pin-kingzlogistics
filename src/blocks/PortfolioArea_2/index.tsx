import { Media, PortfolioArea as PortfolioAreaType } from '@payload-types'
import Link from 'next/link'

const PortfolioData = [
  //home and home-2 data
  {
    daynamic_class: 'col-xl-4 col-lg-6 col-md-6 c1 c3',
  },
  {
    daynamic_class: 'col-xl-4 col-lg-6 col-md-6 c1 c4 c2',
  },
  {
    daynamic_class: 'col-xl-4 col-lg-6 col-md-6 c2 c3',
  },
  {
    daynamic_class: 'col-xl-4 col-lg-6 col-md-6 c1 c4 c2',
  },
  {
    daynamic_class: 'col-xl-4 col-lg-6 col-md-6 c4 c1',
  },
  {
    daynamic_class: 'col-xl-4 col-lg-6 col-md-6 c2 c3',
  },
]

const PortfolioArea = (PortfolioAreaData: PortfolioAreaType) => {
  return (
    <section className='portfolio__area pt-115 pb-60'>
      <div
        className='container wow fadeInUp'
        data-wow-duration='1.5s'
        data-wow-delay='.3s'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <div className='section__title gallery-section-title mb-55'>
              <span className='sub-title'>{PortfolioAreaData?.tag}</span>
              <h2 className='title'>{PortfolioAreaData?.title}</h2>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='dp-portfolio-menu dp-filter-button-group mb-55'>
              <nav>
                <div className='nav' id='nav-tab' role='tablist'>
                  <button
                    className='nav-link active'
                    id='nav-home-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-home'
                    type='button'
                    role='tab'
                    aria-controls='nav-home'
                    aria-selected='true'>
                    {PortfolioAreaData?.button_1}
                  </button>
                  <button
                    className='nav-link'
                    id='nav-profile-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-profile'
                    type='button'
                    role='tab'
                    aria-controls='nav-forwarding'
                    aria-selected='false'>
                    {PortfolioAreaData?.button_2}
                  </button>
                  <button
                    className='nav-link'
                    id='nav-contact-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-contact'
                    type='button'
                    role='tab'
                    aria-controls='nav-contact'
                    aria-selected='false'>
                    {PortfolioAreaData?.button_3}
                  </button>
                  <button
                    className='nav-link'
                    id='nav-wordpress-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-wordpress'
                    type='button'
                    role='tab'
                    aria-controls='nav-wordpress'
                    aria-selected='false'>
                    {PortfolioAreaData?.button_4}
                  </button>
                  <button
                    className='nav-link'
                    id='nav-webdesign-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-webdesign'
                    type='button'
                    role='tab'
                    aria-controls='nav-webdesign'
                    aria-selected='false'>
                    {PortfolioAreaData?.button_5}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-home'
            role='tabpanel'
            aria-labelledby='nav-home-tab'
            tabIndex={0}>
            <div className='row grid mb-30'>
              {PortfolioAreaData?.portfolios?.map((item, index) => (
                <div
                  className={PortfolioData[index]?.daynamic_class}
                  key={index}>
                  <div className='portfolio__item mb-30'>
                    <div className='dp-single-gallery'>
                      <div className='dp-gallery-thumb'>
                        <img
                          src={(item?.image as Media)?.url || ''}
                          alt='gallery-image'
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <div className='dp-gallery-content'>
                        <div className='dp-gallery-content-text'>
                          <h4 className='dp-gallery-title'>
                            <Link href={`/portfolio-details/${index + 1}`}>
                              {item?.title}
                            </Link>
                          </h4>
                          <span>{item?.sub_title}</span>
                        </div>
                        <div className='dp-gallery-link'>
                          <Link href={`/portfolio-details/${index + 1}`}>
                            <i className='fal fa-long-arrow-right'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioArea
