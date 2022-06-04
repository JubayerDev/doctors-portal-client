import React from 'react';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Info />
            <Services />
            <DentalCare />
            <MakeAppointment/>
        </div>
    );
};

export default Home;