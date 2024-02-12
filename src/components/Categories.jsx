import React from 'react'
import earrings from '../assets/categories/earrings.svg'
import fashion from '../assets/categories/fashion.svg'
import food from '../assets/categories/food.svg'
import hair from '../assets/categories/hair.svg'
import maid from '../assets/categories/Maid.svg'
import more from '../assets/categories/more.svg'
import party from '../assets/categories/party.svg'
import skincare from '../assets/categories/Skincare.svg'
import snacks from '../assets/categories/snacks.svg'


const Categories = () => {

    const categories = [
        {
            id: 1,
            name: 'Hair and Makeup',
            image: hair,
            alt: 'business-icon'
        },
        {
            id: 2,
            name: 'Services',
            image: maid,
            alt: 'business-icon'
        },
        {
            id: 3,
            name: 'Beauty Products',
            image: skincare,
            alt: 'business-icon'
        },
        {
            id: 4,
            name: 'Snacks',
            image: snacks,
            alt: 'business-icon'
        },
        {
            id: 5,
            name: 'Accessories',
            image: earrings,
            alt: 'business-icon'

        },
        {
            id: 6,
            name: 'Restaurant',
            image: food,
            alt: 'business-icon'
        },
        {
            id: 7,
            name: 'Entertainment',
            image: party,
            alt: 'business-icon'
        },
        {
            id: 8,
            name: 'Clothings',
            image: fashion,
            alt: 'business-icon'
        },
        {
            id: 9,
            name: 'Others',
            image: more,
            alt: 'business-icon'
        }
    ]
  return (
    <div className=' mt-[76px] mb-[76px]'>
         <h2 className='text-2xl md:text-3xl font-bold text-center text-[#095EDC] mb-9'>Categories</h2>

         <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  '>
            {categories.map((category) => (
                <div key={category.id} className='border border-[#0000004D] p-12 rounded-xl min-w-[275px] grid place-items-center'>
                    <img src={category.image}  alt={category.alt} />
                    <p className='text-lg md:text-2xl whitespace-nowrap mt-4'>{category.name}</p>
                </div>
            ))}
         </div>
    </div>
  )
}

export default Categories