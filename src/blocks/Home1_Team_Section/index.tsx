import { Home1_TeamSection, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const Home1_Team_section = (data: Home1_TeamSection) => {
  return (
    <section className='team__area pt-120 pb-70'>
      <div className='container'>
        <div
          className='row justify-content-center wow fadeInUp'
          data-wow-duration='1.5s'
          data-wow-delay='.3s'>
          <div className='col-md-8'>
            <div className='section__title mb-50 text-center'>
              <span className='sub-title'>{data?.title}</span>
              <h2 className='title'>{data?.subtitle}</h2>
            </div>
          </div>
          <div
            className='row wow fadeInUp'
            data-wow-duration='1.5s'
            data-wow-delay='.3s'>
            {data?.team?.map(item => (
              <div className='col-lg-4 col-md-6' key={item.id}>
                <div className='team__item team__overlay p-relative mb-50 clip-box'>
                  <div className='team__item-img w-img'>
                    <Image
                      src={(item?.teamMemberImage as Media)?.url as string}
                      style={{ width: '100%', height: 'auto' }}
                      alt='Team Images'
                      width={410}
                      height={500}
                    />
                  </div>
                  <div className='team__item-text p-absolute'>
                    <span>{item?.role}</span>
                    <Link href={`/team-details/${item.id}`}>
                      <h3>{item.name}</h3>
                    </Link>

                    <div className='team__social'>
                      {item?.socialMedia?.map((ele, id) => (
                        <Link key={id} href={ele?.socialMediaLink}>
                          {ele?.socialMediaName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home1_Team_section
