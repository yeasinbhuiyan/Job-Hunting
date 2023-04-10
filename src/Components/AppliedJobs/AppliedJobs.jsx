import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../Utitilitis/fakeDb';
import AppliedStoreCart from './AppliedStoreCart';
import JobDetailAndAppliedBanner from '../JobDetails&JobAppliedBanner/JobDetailAndAppliedBanner';

const AppliedJobs = () => {

    const appliedJobsData = useLoaderData()
    const get = getStoredCart()


    // const [AllJobs,setAllJobs] = useState([])

    const storeJobCart = []

    for (const id in get) {
        const addedJob = appliedJobsData && appliedJobsData.find(AP => AP.id == id)
        if (addedJob) {
            storeJobCart.push(addedJob)
        }
    }
    // setAllJobs(storeJobCart)




    return (
        <div className='bg-gray-100'>
            <div className='mb-52'>
                <JobDetailAndAppliedBanner></JobDetailAndAppliedBanner>
            </div>
            <div className='grid lg:grid-cols-1'>
                <div className='mx-auto w-[70%] gap-7 m-10'>
                    {
                        storeJobCart && storeJobCart.map(job => <AppliedStoreCart job={job}></AppliedStoreCart>)
                    }

                </div>

            </div>
        </div>

    );
};

export default AppliedJobs;