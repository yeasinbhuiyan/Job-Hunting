import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../Utitilitis/fakeDb';
import AppliedStoreCart from './AppliedStoreCart';
import JobDetailAndAppliedBanner from '../JobDetails&JobAppliedBanner/JobDetailAndAppliedBanner';

const AppliedJobs = () => {

    const appliedJobsData = useLoaderData()
    // const get = getStoredCart()


    const [remote, setRemote] = useState(false)
    const [onsite, setOnsite] = useState(false)
    const [dJobs,setDJobs]=useState([]);




    useEffect(() => {
        const appliedJobs = getStoredCart()
        const storedJobs = [];

        for (const id in appliedJobs) {
            const addedJob = appliedJobsData && appliedJobsData.find(AP => AP.id == id)

            if (addedJob) {
                if (remote == true) {
                    if (addedJob.job_type == "Remote") {
                        storedJobs.push(addedJob)
                    }
                }

                else if (onsite == true) {
                    if (addedJob.job_type == "Onsite") {
                        storedJobs.push(addedJob)
                    }
                } else {
                    storedJobs.push(addedJob)
                }

            }
        }
        setDJobs(storedJobs)
    }, [remote, onsite])




// setDJob








    // const storeJobCart = []

    // for (const id in get) {
    //     const addedJob = appliedJobsData && appliedJobsData.find(AP => AP.id == id)
    //     if (addedJob) {
    //         storeJobCart.push(addedJob)
    //     }
    // }

   




    return (
        <div className='bg-gray-100'>
            <div className='mb-52'>
                <JobDetailAndAppliedBanner></JobDetailAndAppliedBanner>
            </div>

            <div className='grid lg:grid-cols-1'>

                <div className='mx-auto w-[70%] gap-7 m-10'>
                    <div className='m-2 right-4 text-end'>
                        <button onClick={() =>{setRemote(true),setOnsite(false)}} className='btn-info mr-4'>Remote</button>
                        <button onClick={() =>{setRemote(false),setOnsite(true)}} className='btn-info'>Onsite</button>
                    </div>
                    {
                        dJobs && dJobs.map(job => <AppliedStoreCart key={job.id} job={job}></AppliedStoreCart>)
                    }

                </div>

            </div>
        </div>

    );
};

export default AppliedJobs;