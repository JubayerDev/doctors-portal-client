import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn'

const Contact = () => {
    return (
        <div style={{ background: `url('${appointment}')` }} className=' lg:h-screen'>
            <div className='text-center pt-16 pb-10 mb-10'>
                <h3 className='text-xl font-bold text-secondary'>Contact Us</h3>
                <h2 className='text-3xl font-semibold text-white'>Stay Connected With Us</h2>
            </div>
            <div className='w-[33%] mx-auto'>
                <div className="form-control">
                    <label className="input-group mb-5">
                        <input type="text" placeholder="Email Address" className="text-xl w-[450px] input input-bordered" />
                    </label>
                    <label className="input-group mb-5">
                        <input type="text" placeholder="Subject" className="text-xl w-[450px] input input-bordered" />
                    </label>
                    <label className="input-group mb-5">
                        <textarea type="text" placeholder="Your Message" className="text-xl w-[450px] input input-bordered" rows='5' cols='30'/>
                    </label>
                    <PrimaryBtn>Submit</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Contact;