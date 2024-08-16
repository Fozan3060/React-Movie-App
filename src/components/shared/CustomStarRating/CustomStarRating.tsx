import { useState } from 'react';
import { IoIosStar } from 'react-icons/io';

interface CustomRatingProps {
  length: string;
  rating: number;
  setRating: (rating: number) => void;
}
const CustomStar: React.FC<CustomRatingProps> = ({
  length = '10',
  setRating,
  rating,
}) => {
  const [hover, onHover] = useState(rating ? rating : -1);
  const [click, setclick] = useState(rating ? rating : -1);
  const handleRating = (index: number) => {
    setclick(index);
    setRating(index + 1);
  };

  return (
    <div className="flex  m-auto">
      {Array.from(Array(Number(length)).keys()).map((_, index) => (
        <div
          className="px-1"
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(click > -1 ? click : -1)}
          onClick={() => handleRating(index)}
        >
          <IoIosStar
            color={hover >= index ? 'yellow' : ''}
            size={22}
          ></IoIosStar>
        </div>
      ))}
    </div>
  );
};

export default CustomStar;
