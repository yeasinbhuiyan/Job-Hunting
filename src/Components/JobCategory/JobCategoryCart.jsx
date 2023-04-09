import React from 'react';

const JobCategoryCart = ({JobCategory}) => {
    const {logo,id,name,jobs} = JobCategory
    return (
        <>

            <div className='bg-gray-100 rounded-xl p-4'>
                <img className='bg-indigo-200 bg-opacity-95 p-2 rounded-xl' src={logo} alt="" />
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p>{jobs}</p>

            </div>
            
        </>
    );
};

export default JobCategoryCart;