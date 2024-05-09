import { Quote } from '@payload-types'

const NavTabs = ({ data }: { data: Quote }) => {
  console.log(data)
  return (
    <div className='col-xxl-3 col-xl-3 col-lg-12'>
      <div className='quote-tab mb-30'>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          {data?.tabs?.map((tab, index) => (
            <li key={tab.id} className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id={`tab-${index}`}
                data-bs-toggle='tab'
                data-bs-target={`#tabContent-${index}`}
                type='button'
                role='tab'
                aria-controls={`tabContent-${index}`}
                aria-selected='true'>
                <span className='order__form-button'>
                  <i className='fas fa-box'></i>
                  <span>{tab?.title}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className='tab-content'>
          {data?.tabs?.map((tab, index) => (
            <div
              key={tab.id}
              className={`tab-pane fade show ${index === 0 ? 'active' : ''}`}
              id={`tabContent-${index}`}
              role='tabpanel'
              aria-labelledby={`tab-${index}`}>
              {tab?.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavTabs
