import React from 'react'
import { useLocation } from 'react-router-dom'
import pic1 from '../../assets/business/business.jpg'
import pic2 from '../../assets/business/business1.jpg'
import pic3 from '../../assets/business/profile.jpeg'
import review from '../../assets/business/review.png'

const FeaturedBusiness = ({productsToShow}) => {

    const location = useLocation();

    const products = [
      {
        title: "ShoeCorner Nigeria",
        img: [pic1],
        alt: "business-image",
        review: [review],
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic2],
        alt: "business-image",
        review: [review],
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic3],
        review: [review],
        alt: "business-image",
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic1],
        alt: "business-image",
        review: [review],
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic3],
        alt: "business-image",
        review: [review],
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic2],
        alt: "business-image",
        review: [review],
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic1],
        review: [review],
        alt: "business-image",
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
      {
        title: "ShoeCorner Nigeria",
        img: [pic3],
        review: [review],
        alt: "business-image",
        reviewtext: '3.5 (15 reviews)',
        content: "Adult shoes, Kiddies shoes, and Wholesale"

      },
    ]

  return (
    <section className='px-6 py-6 lg:px-12 lg:py-[1.88rem] mb-8'>
      <h2 className={`text-xl md:text-3xl font-bold text-center mb-8 ${location.pathname === "/" ? "text-[#095EDC]" : "text-black"}`}>Featured Businesses</h2>

        <aside className='grid gap-6 md:gap-9 justify-center  lg:grid-cols-2'>
          {products.slice(0, productsToShow).map((product, index) => (
            <div key={index} className="business text-xl md:text-2xl grid gap-3 justify-center w-fit px-3 py-5 md:px-6 md:py-10 rounded-[10px]">
               <img src={product.img} className=' rounded-[10px]' alt={product.alt} />
            <p>{product.title}</p>
            <div className='flex items-center gap-2'>
              <img src={product.review} className='w-1/2 md:w-2/3 ' alt="review" />
              <p className='md:text-lg'>{product.reviewtext}</p>
            </div>
            <p>{product.content}</p>

          </div>
            
          ))}
         

        </aside>
    </section>
  )
}

export default FeaturedBusiness