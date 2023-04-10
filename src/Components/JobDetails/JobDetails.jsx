import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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




    const { id, name, job_description, job_position,job_responsibility,educational_requirements,experiences, phone, email } = details



    return (
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

            <div>

              

            </div>

        </div>
    );
};

export default JobDetails;