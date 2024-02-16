import ReactStars from "react-rating-stars-component";

const RatingOnly = ({ rating }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      size={34}
      half={true}
      color1={'#f4c10f'}
      color2={'#f4c10f'}
      edit={false}
    />
  );
};

export default RatingOnly;
