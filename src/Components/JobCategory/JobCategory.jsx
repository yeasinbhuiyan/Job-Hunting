import React from 'react';
import JobCategoryCart from './JobCategoryCart';

const JobCategory = ({jobCategoryData}) => {
    return (
        <section className='all-container my-36'>
            <div className='text-center my-10'>
                <h1 className='my-2 text-2xl font-bold'>Job Category List</h1>
                <p className='text-sm'>Here are some common job categories that you may find in various industries</p>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {
                        jobCategoryData.map(JobCategory =>  <JobCategoryCart key={JobCategory.id} JobCategory={JobCategory}></JobCategoryCart>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default JobCategory;