import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const reviews = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [reviews] = useReview();



    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default reviews;