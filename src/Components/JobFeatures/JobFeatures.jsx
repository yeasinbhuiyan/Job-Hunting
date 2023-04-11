import React, { useEffect, useState } from 'react';

import FeatureCart from './FeatureCart';

const JobFeatures = () => {

    const [Features, setFeatures] = useState([])

    const [allBtn, setAllBtn] = useState(false)



    // start useEffect job features 
    useEffect(() => {
        fetch('/jobFeatures.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])


    return (
        <section className='all-container'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold'>Featured Jobs</h1>
                <p>
                    Here are some common job descriptions</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>


                {
                    !allBtn && Features.slice(0, 4).map(feature => <FeatureCart key={feature.id} feature={feature}></FeatureCart>)
                }
                {
                    allBtn && Features.map(feature => <FeatureCart key={feature.id} feature={feature}></FeatureCart>)
                }


            </div>

            {
                !allBtn && <div className='text-center my-7'>
                    <button onClick={() => setAllBtn(!allBtn)} className='btn btn-info'>See More </button>
                </div>
            }
        </section>
    );
};

export default JobFeatures; 