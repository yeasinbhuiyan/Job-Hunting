import React from 'react';
import bannerImg from '../../../public/All Images/P3OLGJ1 copy 1.png'
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobFeatures from '../JobFeatures/JobFeatures';

const Banner = () => {
    const jobCategoryData = useLoaderData()
    // console.log(jobCategoryData)
    return (
       <div>
         <div className='bg-gray-100 flex justify-between items-center all-container'>
            <div>
                <div className='text-7xl font-bold'>
                    One Step <br /> Closer To Your <br />
                    <span className='text-indigo-400'> Dream Job</span>

                </div>

                <p className='w-[60%] my-5'>Explore thousands of job opportunities with all the information you  need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div className='mb-3'>
                    <button className='btn btn-info'>Get Started</button>
                </div>
            </div>


            <div  className='bottom-0'>
                <img width={'500px'} src={bannerImg} alt="" />
            </div>

        </div>

            <div>

                <JobCategory jobCategoryData={jobCategoryData}></JobCategory>
            </div>



            <div>
                <JobFeatures></JobFeatures>

            </div>


       </div>
    );
};

export default Banner;