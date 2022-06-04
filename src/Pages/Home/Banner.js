import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <figure><img src={bg} alt="bg" /></figure>
            <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='homeImg'/>
                <div className='w-2/4'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryBtn >Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;