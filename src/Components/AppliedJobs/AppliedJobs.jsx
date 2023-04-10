import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../Utitilitis/fakeDb';
import AppliedStoreCart from './AppliedStoreCart';

const AppliedJobs = () => {

    const appliedJobsData= useLoaderData()
    const get = getStoredCart()


    // const [AllJobs,setAllJobs] = useState([])

const storeJobCart = []

    for(const id in get){
        const addedJob = appliedJobsData && appliedJobsData.find(AP => AP.id == id)
        if(addedJob){
            storeJobCart.push(addedJob)
        }
    }
    // setAllJobs(storeJobCart)



  
    return (
        <div className='grid lg:grid-cols-1'>
          <div className='mx-auto w-[70%] gap-7 m-10'>
          {
               storeJobCart && storeJobCart.map(job => <AppliedStoreCart job={job}></AppliedStoreCart>)
            }
         
          </div>
            
        </div>
    );
};

export default AppliedJobs;