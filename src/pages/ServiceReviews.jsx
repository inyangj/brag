import React, { useEffect, useState } from 'react';
import facebook from '../assets/review/facebook.svg';
import { useQuery } from '@tanstack/react-query';
import axios from '../utility/Axios';
import RatingOnly from '../components/RatingOnly';
import ReviewSkeleton from '../utility/ReviewLoad';

const ServiceReview = ({business}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const response = await axios.get(`/reviews/${business}`);
      setReviews(response.data.data);
      console.log("reviews", response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data,
    isLoading,
    error,
  } = useQuery({ queryKey: ["getReviews"], queryFn: getReviews });

  if (isLoading) {
    return <ReviewSkeleton />;
  }
    
  




  const toggleShowAllReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);
  return (
    <div>
      {/* <h2>Reviews for {reviews.name}</h2> */}
      {/* Display reviews here */}

<div className='grid gap-5 md:gap-10'>

      {reviews.length === 0 ? (
        <p className='text-center md:text-xl lg:text-2xl' >No reviews yet</p>
      ) :(
        
        displayedReviews.map((review, index) => (
        <div key={index}>
          <div className='bg-[#D9D9D933] p-5 md:p-10 lg:p-14 rounded-xl'>
            <div className='flex justify-between gap-4 md:gap-0 flex-wrap md:flex-nowrap items-center'>
                <img src={facebook} alt="icon" />
                <RatingOnly rating={review.ratings}/>
                <p>{review.date}</p>
            </div>
            <div className='md:text-xl lg:text-2xl'>
                <h3 className='font-medium text-xl md:text-3xl mt-5 md:mt-10 mb-3 '>{review.reviewerName}</h3>
                <p>{review.reviewText}</p>
                {/* <p className='text-[#095EDC] mt-6 md:mt-11 lg:mt-14'>Respond</p> */}
            </div>
          </div>
        </div>
      ))
      )}

</div>



{reviews.length > 4 && (
        <button onClick={toggleShowAllReviews} className='text-[#095EDC] text-xl md:text-2xl font-semibold text-end w-full mt-3'>
          {showAllReviews ? 'See less' : 'See more'}
        </button>
      )}


    </div>
  );
};

export default ServiceReview;
