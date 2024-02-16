import React from 'react'
import Search from '../components/home/Search';
import Categories from '../components/Categories';
import FeaturedBusiness from '../components/home/FeaturedBusiness';
import styles from '../Banner.module.css';
import Spline from '@splinetool/react-spline';

const UserHome = () => {
  return (
    <main className={`mt-14 lg:mt-24 py-6   lg:py-[1.88rem] `} >
        <div className={`text-center `}>
        <Spline scene="https://prod.spline.design/tNkqRlrf0qeYbbOw/scene.splinecode" />
        <h1 className='text-2xl md:text-3xl font-bold mt-6'>Reviews in Nigeria</h1>
        <p className='text-xl md:text-2xl'> No.1 site with the most accurate information and genuine experiences</p>
        <Search className={`bg-[#095EDC] text-white px-7 py-3 rounded-[10px] text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue  active:bg-blue-800 mx-auto lg:w-[260px]`}> Search </Search>
        </div>
<div className={`px-6 mt-14 py-6 lg:px-12 xl:px-28  lg:py-[1.88rem] `}>


        <div className=''>
        <Categories />

        </div>
        <FeaturedBusiness productsToShow={4} />


</div>






    </main>
  )
}

export default UserHome;