import React from 'react'
import Spline from '@splinetool/react-spline';

const Background = ({children}) => {
  return (
 <div className={`text-center md:text-white min-h-48  relative bg-[#4246E4] `}>
    <Spline scene="https://prod.spline.design/tNkqRlrf0qeYbbOw/scene.splinecode" />
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
   {children}
    </div>
    </div>
  )
}

export default Background