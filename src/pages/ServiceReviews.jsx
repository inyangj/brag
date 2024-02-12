import React, { useState } from 'react';
import facebook from '../assets/review/facebook.svg';
import star from '../assets/review/star.svg'

import { useParams } from 'react-router-dom';
import { icon } from '@fortawesome/fontawesome-svg-core';

const ServiceReview = () => {
  const { serviceId } = useParams();
  const [showAllReviews, setShowAllReviews] = useState(false);



  const reviews = [
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
    {
        icon1: facebook,
        icon2: star,
        date: '13 Jun 2023',
        name: 'Peter Mark',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quisquam quis, itaque molestiae hic, quam ducimus nisi illo cumque eos repudiandae quae nesciunt error nostrum ratione eius beatae corrupti aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quisquam inventore numquam quod doloremque labore asperiores. Quaerat molestiae inventore sapiente velit ducimus. Quaerat recusandae ducimus, odio maiores est modi repellendus.'

    },
  ]

  const toggleShowAllReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

  // Determine the number of reviews to display based on the state
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);


  // Fetch and display reviews for the selected service
  // You can customize this part based on your actual data structure and API
  return (
    <div>
      <h2>Reviews for {serviceId}</h2>
      {/* Display reviews here */}

<div className='grid gap-5 md:gap-10'>

      {reviews.length === 0 ? (
        <p className='text-center md:text-xl lg:text-2xl' >No reviews yet</p>
      ) :(
        
        displayedReviews.map((review, index) => (
        <div key={index}>
          <div className='bg-[#D9D9D933] p-5 md:p-10 lg:p-14 rounded-xl'>
            <div className='flex justify-between gap-4 md:gap-0 flex-wrap md:flex-nowrap items-center'>
                <img src={review.icon1} alt="icon" />
                <img src={review.icon2} alt="icon" />
                <p>{review.date}</p>
            </div>
            <div className='md:text-xl lg:text-2xl'>
                <h3 className='font-medium text-xl md:text-3xl mt-5 md:mt-10 mb-3 '>{review.name}</h3>
                <p>{review.review}</p>
                <p className='text-[#095EDC] mt-6 md:mt-11 lg:mt-14'>Respond</p>
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
