import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
                <div className='flex mt-7'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt=''/>
                        </div>
                    </div>
                    <h2 class="card-title">{review.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;