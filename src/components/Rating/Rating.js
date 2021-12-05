import { Rate } from "antd";
import './Rating.css'

const Rating = ({ rating, isFilter, ratingValue, setRatingValue }) => {
  const handleChange = (value) => {
    setRatingValue(value);
  };

  return (
    <span className="rate">
      {isFilter ? (
        // Rate for filter
        <Rate onChange={handleChange} value={ratingValue} />
      ) : (
        // Rate for movieCard
        <Rate disabled value={rating} />
      )}
    </span>
  );
};

export default Rating;