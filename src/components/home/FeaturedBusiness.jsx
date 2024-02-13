import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import pic1 from '../../assets/business/business.jpg'
import pic2 from '../../assets/business/business1.jpg'
import pic3 from '../../assets/business/profile.jpeg'
import review from '../../assets/business/review.png'
import { useQuery } from "@tanstack/react-query";
import { featuredBusiness } from '../../utility/fetch'

const FeaturedBusiness = ({productsToShow}) => {

    const location = useLocation();

    // const products = [
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic1],
    //     alt: "business-image",
    //     review: [review],
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic2],
    //     alt: "business-image",
    //     review: [review],
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic3],
    //     review: [review],
    //     alt: "business-image",
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic1],
    //     alt: "business-image",
    //     review: [review],
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic3],
    //     alt: "business-image",
    //     review: [review],
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic2],
    //     alt: "business-image",
    //     review: [review],
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic1],
    //     review: [review],
    //     alt: "business-image",
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    //   {
    //     title: "ShoeCorner Nigeria",
    //     img: [pic3],
    //     review: [review],
    //     alt: "business-image",
    //     reviewtext: '3.5 (15 reviews)',
    //     content: "Adult shoes, Kiddies shoes, and Wholesale"

    //   },
    // ]

    const [products, setProducts] = useState([]);

    const {
      data: business = [],
      isLoading,
      error,
    } = useQuery({ queryKey: ["Business"], queryFn: featuredBusiness });

useEffect( () => {
  setProducts(business.data)
},[])
    console.log(products);

  return (
    <section className=' mb-8'>
      <h2 className={`text-xl md:text-3xl font-bold text-center mb-8 text-[#095EDC]`}>Featured Businesses</h2>

        <aside className='grid gap-6 md:gap-9 justify-center  lg:grid-cols-2'>
          {/* <Link to={`/products`} state={location.state} className='text-center  w-fit px-3 py-5 md:px-6 md:py-10 rounded-[10px] bg-[#095EDC] text-white'>View All</Link> */}
          {Array.isArray(products) && products.slice(0, productsToShow).map((product, index) => (
            <div key={index} className="business text-xl md:text-2xl grid gap-3 justify-center w-fit px-3 py-5 md:px-6 md:py-10 rounded-[10px]">
               <img src={product.logo?.logoUrl} className=' rounded-[10px]' alt="business-logo" />
            <p>{product.businessName}</p>
            <div className='flex items-center gap-2'>
              <img src={product.ratings} className='w-1/2 md:w-2/3 ' alt="review" />
              <p className='md:text-lg'>{product.reviewText}</p>
            </div>
            {product.services.map((service, index) => ( <p key={index}>{service}</p>))}
           

          </div>
            
          ))}
         

        </aside>
    </section>
  )
}

export default FeaturedBusiness