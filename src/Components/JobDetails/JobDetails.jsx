import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utitilitis/fakeDb';
import JobDetailAndAppliedBanner from '../JobDetails&JobAppliedBanner/JobDetailAndAppliedBanner';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { PhoneIcon,BriefcaseIcon,CurrencyDollarIcon,EnvelopeIcon,MapPinIcon } from '@heroicons/react/24/solid'

const JobDetails = () => {
    const FeaturesId = useParams()
    console.log(FeaturesId)
    const y = useLoaderData()



    const [details, setDetails] = useState({})
    useEffect(() => {
        if (y && FeaturesId.id) {
            let x = y.find(d => d.id == FeaturesId.id)
            setDetails(x)
        }
    }, [y])

    const handleApplyJob = (id) => {
        
        addToDb(id)

        toast.success("you have Added this product!")
      


    }


    const { id, name, job_description, job_position, salary, address, job_responsibility, educational_requirements, experiences, phone, email } = details



    return (
        <div className='bg-gray-100'>
            <div className='mb-52'>
                <JobDetailAndAppliedBanner></JobDetailAndAppliedBanner>
           
                    {/* <img className='absolute right-0 top-0' src={"/All-Images/Vector-1.png" }alt="" />
                    <img className='absolute left-0 ' src={"/All-Images/Vector.png"} alt="" /> */}
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 all-container'>


                <div>
                    <div className='my-5'>
                        <span className='text-xl font-bold'>Job Description: </span>{job_description}
                    </div>
                    <div>
                        <span className='text-xl font-bold'>Job Responsibility: </span>{job_responsibility}
                    </div>
                    <div className='my-5'>
                        <span className='text-xl font-bold'>Educational Requirements: </span>{educational_requirements}
                    </div>
                    <div>
                        <span className='text-xl font-bold'>Experiences: </span>{experiences}
                    </div>



                </div>

                <div className='bg-indigo-100 bg-opacity-70 m-10 p-4'>


                    <h1 className='my-3 text-xl font-bold'>Job Details</h1>
                    <hr />

                    <h2 className="font-bold flex items-center"> <CurrencyDollarIcon className="mr-1 h-3 w-3 text-blue-500" />Salary: <span className='text-sm'>{salary} (Per Month)</span></h2>

                    <h2 className="font-bold flex items-center"> <BriefcaseIcon className="mr-1 h-3 w-3 text-blue-500" />Job Title: <span className='text-sm'>{job_position}</span></h2>

                    <h1 className='my-3 text-xl font-bold'>Contact Information</h1>

                 
                  <hr />

             

                    <h2 className="font-bold flex items-center">  <PhoneIcon className="mr-1 h-3 w-3 text-blue-500" />Phone: <span className='text-sm'>{phone}</span></h2>
                    <h2 className="font-bold flex items-center"><EnvelopeIcon className="mr-1 h-3 w-3 text-blue-500" />Email: <span className='text-sm'> {email}</span></h2>
                    <h2 className="font-bold flex items-center"><MapPinIcon className="mr-1 h-3 w-3 text-blue-500" />Address: <span className='text-sm'>{address}</span></h2>

                    <div className='mt-5'>
                        <button onClick={() => handleApplyJob(id)} className='btn btn-info'>Apply Now</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default JobDetails;