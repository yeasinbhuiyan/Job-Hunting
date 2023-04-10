import React from 'react';
import './AppliedStoreCart.css'
import { Link } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'


const AppliedStoreCart = ({ job }) => {
    const { job_position, name, location, salary, image,id } = job
    return (
   
           
           <div className="appliedCart flex justify-between items-center mb-5">
            <div className='flex gap-12 items-center'>
                <img width={'150px'} src={image} alt="" />

                <div>
                    <h1 className='text-xl font-bold'>{job_position}</h1>
                    <h4 className='font-medium'>{name}</h4>
                    <div className='flex gap-5'>
                    <p className='flex items-center'><MapPinIcon className="h-4 items-center w-4 text-indigo-400" />{location}</p>

                    <p className='flex items-center'><CurrencyDollarIcon className="h-4 items-center w-4 text-indigo-400" />Salary: {salary}</p>

                    </div>
                </div>
            </div>

            <div>
                <Link to={`/jobDetails/${id}`} className='btn btn-info'>View Details</Link>
            </div>
        </div>
       
    );
};

export default AppliedStoreCart;