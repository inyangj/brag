import React from 'react'
import image from '../../assets/business/profile.jpeg'
import image2 from '../../assets/business/business.jpg'
import image3 from '../../assets/business/business1.jpg'

const Images = ({images}) => {

    // const images = [
    //     image,
    //     image2,
    //     image3,
    //     image2
    // ]
  return (
    <div className='grid grid-cols-1 gap-[18px] items-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {images?.map((pic, id) => (
            <div key={id} className='  md:h-[233px] md:w-[256px]'><img src={pic.imgUrl} className='w-full h-full' alt="business-image" /> </div>
        ) )}
    </div>
  )
}

export default Images