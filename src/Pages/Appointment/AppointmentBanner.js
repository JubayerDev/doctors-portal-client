import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div style={{background: `url('${bg}')`}} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                <img src={chair} className='w-2/4' alt='chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        />
                        <p className='ml-5'>You have selected: {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;