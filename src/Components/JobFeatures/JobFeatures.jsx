import React, { useEffect, useState } from 'react';
// import { loadData } from '../../LoaderData/LoaderData';
// import { data } from 'autoprefixer';
import FeatureCart from './FeatureCart';

const JobFeatures = () => {
  
    const [Features, setFeatures] = useState([])

    useEffect(()=>{
        fetch('jobFeatures.json')
        .then(res=> res.json())
        .then(data => setFeatures(data))
    },[])


    console.log(Features)
    return (
        <section className='all-container'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    Features && Features.map(feature => <FeatureCart feature={feature}></FeatureCart> )
                }

                
            </div>

            <div className='text-center my-7'>
                <button className='btn btn-info'>See More </button>
            </div>
        </section>
    );
};

export default JobFeatures; 