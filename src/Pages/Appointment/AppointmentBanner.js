import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {
    
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
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;