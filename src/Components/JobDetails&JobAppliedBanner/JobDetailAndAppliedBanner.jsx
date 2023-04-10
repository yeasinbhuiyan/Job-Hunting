import React from 'react';
import Header from '../Header/Header';
import './JobDetailAndAppliedBanner.css'


const JobDetailAndAppliedBanner = () => {
    return (
        <div className='min-w-full bg-gray-100 '>
            <Header></Header>
            <img className='absolute right-0 top-0' src={"All-Images/Vector-1.png"} alt="" />
            <img className='absolute left-0 ' src={"All-Images/Vector.png"} alt="" />


        </div>
    );
};

export default JobDetailAndAppliedBanner;