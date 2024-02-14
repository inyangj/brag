import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

const StarRating = ({ rating, onRatingChange }) => {
//   const [rating, setRating] = useState(0);
  const [size, setSize] = useState(24);
  const [currentRating, setCurrentRating] = useState(rating);

  const handleChange = newRating => {
    setCurrentRating(newRating);
    onRatingChange(newRating);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(52);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSize(52);
      } else {
        setSize(80);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ReactStars
      count={5}
      value={currentRating}
      size={62}
      half={true}
      color1={'#f4c10f'}
      color2={'#f4c10f'}
      onChange={handleChange}
    />
  );
};

export default StarRating;
