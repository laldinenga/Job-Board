import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  export default function Test1() {

    const [formData, setFormData] = useState({
      jobtitle: '',
      company: '',
      workplaceType: '',
      jobLocation: '',
      jobType: ''
    });
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.clear();
      localStorage.setItem("userInfo", JSON.stringify(formData));
      alert("Data recorded!");
      // Redirect or pass data to another component
      navigate('/test2');
    };
    
    return (
      <div className="bg-grey-100 shadow-lg">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Post a Job
            </h2>
            <h6 className="mt-1 text-center text-md leading-9 tracking-tight text-gray-900">
              Hire in Under 2 hours
            </h6>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="jobtitle"
                  className="flex text-sm font-medium leading-6 text-gray-900"
                >
                  Job Title
                </label>
                <div className="mt-2">
                  <input
                    id="jobtitle"
                    name="jobtitle"
                    type="jobtitle"
                    required
                    autoComplete="jobtitle"
                    value={formData.jobtitle}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="company"
                    name="company"
                    type="company"
                    required
                    autoComplete="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="workplaceType"
                  className="flex text-sm font-medium leading-6 text-gray-900"
                >
                  Workplace Type
                </label>
                <div className="mt-2 ">
                  <select
                    id="workplaceType"
                    name="workplaceType"
                    autoComplete="workplaceType"
                    value={formData.workplaceType}
                    onChange={handleChange}
                    className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                  >
                    <option value="">Select</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="jobLocation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Location
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="jobLocation"
                    name="jobLocation"
                    type="jobLocation"
                    required
                    autoComplete="jobLocation"
                    value={formData.jobLocation}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="jobtype"
                  className="flex text-sm font-medium leading-6 text-gray-900"
                >
                  Job Type
                </label>
                <div className="mt-2 ">
                  <select
                    id="jobType"
                    name="jobType"
                    autoComplete="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                  >
                    <option value="">Select</option>
                    <option value="Internship">Internship</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Casual">Casual</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              
              <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Write Job Description
              </button>
            </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              If you want help writing job description write with AI option will
              write it for you using information above with the help of AI.
            </p>
          </div>
        </div>
      </div>
    );
  }
