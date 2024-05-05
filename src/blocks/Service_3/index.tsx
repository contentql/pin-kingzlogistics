'use client'

import Link from 'next/link'

const servicesData = [
  {
    id: 1,
    title: 'ocean transportation',
    icon: 'flaticon-boat',
    description:
      'The quality data, best network building uptime, fastest output',
  },
  {
    id: 2,
    title: 'airways transportation',
    icon: 'flaticon-plane',
    description:
      'The quality data, best network building uptime, fastest output',
  },
  {
    id: 3,
    icon: 'flaticon-frontal-truck',
    title: 'road transportation',
    description:
      'The quality data, best network building uptime, fastest output',
  },
  {
    id: 4,
    title: 'ocean transportation',
    icon: 'flaticon-boat',
    description:
      'The quality data, best network building uptime, fastest output',
  },
  {
    id: 5,
    title: 'airways transportation',
    icon: 'flaticon-plane',
    description:
      'The quality data, best network building uptime, fastest output',
  },
  {
    id: 6,
    icon: 'flaticon-frontal-truck',
    title: 'road transportation',
    description:
      'The quality data, best network building uptime, fastest output',
  },
  //home 2 data
  {
    id: 7,
    icon: 'flaticon-boat',
    title: 'ocean transportation',
    number: '01',
    description:
      'The quality data, best network building uptime, fastest output from uur team jackle.',
  },
  {
    id: 8,
    icon: 'flaticon-plane',
    title: 'Air transportation',
    number: '02',
    description:
      'The quality data, best network building uptime, fastest output from uur team jackle.',
  },
  {
    id: 9,
    icon: 'flaticon-frontal-truck',
    title: 'truck transportation',
    number: '03',
    description:
      'The quality data, best network building uptime, fastest output from uur team jackle.',
  },
  {
    id: 10,
    icon: 'flaticon-train',
    title: 'train transportation',
    number: '04',
    description:
      'The quality data, best network building uptime, fastest output from uur team jackle.',
  },
  {
    id: 11,
    icon: 'flaticon-box',
    title: 'package transport',
    number: '05',
    description:
      'The quality data, best network building uptime, fastest output from uur team jackle.',
  },
  {
    id: 12,
    icon: 'flaticon-bicycle',
    title: 'bicycle transport',
    number: '06',
    description:
      'The quality data, best network building uptime, fastes output from uur team jackle.',
  },
]

const Service_3 = (data: any) => {
  console.log('services3', data)
  return (
    <section className='services__area pb-60'>
      <div className='container'>
        <div className='services-one'>
          <div
            className='services__box services__box--space wow fadeInUp'
            data-wow-duration='1.5s'
            data-wow-delay='.3s'>
            <div className='row'>
              {servicesData.slice(0, 4).map(item => (
                <div className='col-lg-3 col-xl-3 col-md-6' key={item.id}>
                  <div className='services__item text-center'>
                    <div className='services__item-icon'>
                      <i className={item.icon}></i>
                    </div>
                    <div className='services__item-content'>
                      <h3>
                        <Link href={`/services-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p>{item.description.slice(0, 63)}</p>
                      <div className='services__item-btn'>
                        <Link href={`/services-details/${item.id}`}>
                          service details
                        </Link>
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

export default Service_3
