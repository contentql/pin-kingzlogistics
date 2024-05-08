'use client'

import { useState } from 'react'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

const CountUpContent = ({ number, text, add_style = true }: any) => {
  const [focus, setFocus] = useState(false)
  const visibleChangeHandler = (isVisible : any) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true)
      }
    }
  }
  return (
    <>
    
      <CountUp 
      //@ts-ignore
      start={focus ? 0 : null} end={number} duration={5}>
        {({ countUpRef } : any) => (
          <div
            className={`bd-promotion-counter-number ${add_style ? 'align-items-center justify-content-center' : ''}`}>
            <span className='counter' ref={countUpRef} />
            <InView as='span' onChange={(inView : any) => visibleChangeHandler(inView)}>
              {text && <span className='counter-text'>{text}</span>}
            </InView>
          </div>
        )}
      </CountUp>
    </>
  )
}

export default CountUpContent
