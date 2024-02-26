import React from 'react'
import Search from '../components/home/Search';
import Categories from '../components/Categories';
import FeaturedBusiness from '../components/home/FeaturedBusiness';
import Background from '../components/Background';

const UserHome = () => {
  return (
    <main className={`mt-14 py-6   lg:py-[1.88rem] `}>
      <div className="bg-food bg-no-repeat bg-cover bg-center min-h-[100px] lg:min-h-[400px] xl:min-h-[600px] w-full grid justify-center items-center text-white">
        <div className="mt-24 md:mb-4 lg:mt-0 lg:mb-0">
          <h1 className="text-2xl md:text-[38px] lg:text-[48px] font-bold text-center">
            Reviews in Nigeria
          </h1>
          <p className="text-lg md:text-[24px] lg:text-[30px] font-medium text-center my-6 md:my-[35px]">
            {" "}
            No.1 site with the most accurate information and genuine experiences
          </p>
          <Search
            className={`bg-[#095EDC] text-white px-7 py-2 rounded-[10px] text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue hidden md:block  active:bg-blue-800 mx-auto lg:w-[260px]`}
          >
            {" "}
            Search{" "}
          </Search>
        </div>
      </div>
      <div className={`px-6  lg:px-12 xl:px-28  `}>
        <div className="">
          <Categories />
        </div>
        <FeaturedBusiness productsToShow={6} />
      </div>
    </main>
  );
}

export default UserHome;