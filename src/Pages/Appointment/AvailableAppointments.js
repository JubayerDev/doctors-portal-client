import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className='mb-20'>
            <h3 className='text-xl text-secondary text-center font-semibold py-5'>Available Appointments on {format(date, 'PP')}</h3>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <Service service={service} key={ service._id}/>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;