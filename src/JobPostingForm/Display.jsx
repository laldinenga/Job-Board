import React from 'react'
import { BiSolidBriefcase } from "react-icons/bi";


function Display() {

  const formData = JSON.parse(localStorage.getItem("formData"));
  const JobDescription = JSON.parse(localStorage.getItem("JobDescription"));

  return (
    <div className='bg-gray-100 min-h-screen '>
      <div className='flex flex-row justify-between p-4 '>
        <div className='flex flex-col justify-start items-start'>
          <p className='font-bold text-xl'>{formData.jobtitle}</p>
          <p>{formData.jobLocation}</p>
        </div>
        <div className='mr-8'>
          <p className='text-lg font-semibold'>{formData.company}</p>
        </div>
      </ div>
      <div className='flex flex-row p-4 place-items-center space-x-4 '>
        <div className='size-10'>
          <img src="/Image/briefcase.png" alt="briefcase picture" />
        </div>
        <ul className='flex flex-row space-x-3 '>
          <li>#{formData.workplaceType}</li>
          <li>#{formData.jobType}</li>
        </ul>
      </div>
      <div className='flex justify-start p-4'>
        <button className='bg-amber-500 rounded-2xl px-8 text-lg text-center shadow-xl border-2 hover:bg-amber-400 focus:ring focus:ring-amber-200'>Apply</button>
      </div>
      <div className='flex flex-col justify-start items-start p-4'> 
        <h1 className='font-bold text-lg'>About The Job</h1>
        <p className='text-justify mt-2'>{JobDescription}</p>
      </div>
    </div>
  )
}

export default Display