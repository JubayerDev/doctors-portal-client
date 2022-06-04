import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary text-center block">{name}</h2>
                <p>{
                    slots.length > 0 ?
                        <span>{slots[0]} </span> :
                        <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className='btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary mt-5'
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;