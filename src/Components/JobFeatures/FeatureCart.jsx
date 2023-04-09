import React from 'react';
import './FeatureCart.css'
import { Link } from 'react-router-dom';

const FeatureCart = ({feature}) => {
    console.log(feature)
    const {image,id,name,location,job_position,salary} = feature
    
    return (
        <div>
            <div className='feature-cart h-full'>
                <img src={image} alt="" />
               <div className='my-5'>
               <h1 className='text-xl font-bold'>{job_position}</h1>
                <p>{name}</p>
               </div>

                <div className='flex gap-7'>
                    <button className='btn btn-info'>Onsite</button>
                    <button className='btn btn-info'>Outsite</button>

                </div>

                <div className='flex items-center gap-6 my-3'>

                    <p>{location}</p>

                    <p>Salary: {salary}</p>
                    
                </div>
                <div>
                    <Link to={`/jobDetails/${feature,id}`} className='btn btn-info'>View Details</Link>
                </div>

            </div>
            
        </div>
    );
};

export default FeatureCart;