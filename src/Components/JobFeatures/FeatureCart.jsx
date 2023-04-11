import React from 'react';
import './FeatureCart.css'
import { Link } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeatureCart = ({feature}) => {
    
    const {image,id,name,location,job_position,salary} = feature
    
    return (
        <div>
            <div className='feature-cart h-full'>
                <img className='h-20 w-40' src={image} alt="" />
               <div className='my-5'>
               <h1 className='text-xl font-bold'>{job_position}</h1>
                <p>{name}</p>
               </div>

                {/* <div className='flex gap-7'>
                    <button className='btn btn-info'>Onsite</button>
                    <button className='btn btn-info'>Outsite</button>

                </div> */}

                <div className='flex items-center gap-6 my-3'>

                    <p className='flex items-center'><MapPinIcon className="h-4 items-center w-4 text-indigo-400" />{location}</p>

                    <p className='flex items-center'><CurrencyDollarIcon className="h-4 items-center w-4 text-indigo-400" />Salary: {salary}</p>
                    
                </div>
                <div>
                    <Link to={`/jobDetails/${id}`} className='btn btn-info'>View Details</Link>
                </div>

            </div>
            
        </div>
    );
};

export default FeatureCart;