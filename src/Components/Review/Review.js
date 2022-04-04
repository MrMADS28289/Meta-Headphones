import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';


const Review = (props) => {

    const { name, img, rating, review } = props.review;

    return (
        <div className='m-4 p-6 border-2 border-gray-200 bg-[#FAFAFA] flex flex-col items-center'>
            <div>
                <img className='rounded-[50%] h-14 w-14' src={img} alt="" />
            </div>
            <h1 className='text-xl font-bold mt-3'>{name}</h1>
            <h5><Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: '#ffd700' }} icon={faStar} />}
                readonly
            ></Rating> </h5>
            <p className='text-lg'>{review}</p>
        </div>
    );
};

export default Review;