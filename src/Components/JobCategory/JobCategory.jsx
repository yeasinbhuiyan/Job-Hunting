import React from 'react';
import JobCategoryCart from './JobCategoryCart';

const JobCategory = ({jobCategoryData}) => {
    return (
        <section className='all-container my-36'>
            <div className='text-center my-10'>
                <h1 className='my-2 text-2xl font-bold'>Job Category List</h1>
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
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