import React from 'react';
// import bannerImg from '../../../public/'
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobFeatures from '../JobFeatures/JobFeatures';
import Header from '../Header/Header';


const Banner = () => {
    const jobCategoryData = useLoaderData()
    // console.log(jobCategoryData)
    return (
       <div>
        <Header></Header>
       
         <div className='bg-gray-100 grid grid-cols-1 lg:grid-cols-2 md:pl-28'>
            <div className='m-6'>
                <div className='text-7xl font-bold'>
                    One Step <br /> Closer To Your <br />
                    <span className='text-indigo-400'> Dream Job</span>

                </div>

                <p className='w-[60%] my-5'>Explore thousands of job opportunities with all the information you  need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div className='mb-3'>
                    <button className='btn btn-info'>Get Started</button>
                </div>
            </div>


            <div className='bottom-0'>
                <img width={'500px'} src={"All-Images/P3OLGJ1 copy 1.png"} alt="" />
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