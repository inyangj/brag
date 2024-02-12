import React from 'react'
import Search from '../components/home/Search';
import Categories from '../components/Categories';
import FeaturedBusiness from '../components/home/FeaturedBusiness';

const UserHome = () => {
  return (
    <main className="px-6 mt-14 py-6 lg:px-12 xl:px-28  lg:py-[1.88rem]">
        <div className='text-center'>
        <h1 className='text-2xl md:text-3xl font-bold'>Reviews in Nigeria</h1>
        <p className='text-xl md:text-2xl'> No.1 site with the most accurate information and genuine experiences</p>
        <Search className={`bg-[#095EDC] text-white px-7 py-3 rounded-[10px] text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mx-auto lg:w-[260px]`}> Search </Search>
        </div>


        <Categories />

        <FeaturedBusiness productsToShow={4} />






    </main>
  )
}

export default UserHome;