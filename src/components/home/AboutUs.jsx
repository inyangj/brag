import React from 'react'
import about from '../../assets/business/About.png'

const AboutUs = () => {
  return (
    <div className='px-6 py-6 lg:px-12 lg:py-[1.88rem] xl:px-28 mb-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-[#095EDC] mb-3'>About Us</h2>

        <div className='flex flex-col items-center justify-between gap-5 md:flex-row'>
            <img src={about} className='md:w-[300px] lg:w-1/2' alt="about" />
            <p className='text-lg md:text-2xl xl:text-3xl'><span className='font-bold text-[#095EDC] '>BRAG</span> is  a user-friendly review platform in Nigeria that allow businesses to effortlessly collect, manage, and showcase customer reviews. Simultaneously, it offers individual you a reliable source to discover and learn about local businesses based on authentic feedback. </p>
        </div>

    </div>
  )
}

export default AboutUs