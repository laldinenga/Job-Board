import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from 'react';

export default function ScreeningPage() {
  const [backGroundCheck, setBackGroundCheck] = useState(true);
  const [certifications, setCertifications] = useState(true);
  const [driverLicense, setDriverLicense] = useState(true);
  const [drugTest, setDrugTest] = useState(true);
  const [education, setEducation] = useState(true);
  const [expertiseWithSkills, setExpertiseWithSkills] = useState(true);
  const [hybridWork, setHybridWork] = useState(true);
  const [industryExperience, setIndustryExperience] = useState(true);
  const [language, setLanguage] = useState(true);  
  const [onSiteWork, setOnSiteWork] = useState(true);  
  return (
    <form>
      <div className="space-y-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="receiving-mode"
                className="flex text-sm font-medium leading-6 text-gray-900"
              >
                Application Collection
              </label>
              <div className="mt-2 ">
                <select
                  id="receiving-mode"
                  name="receiving-mode"
                  autoComplete="receiving-mode"
                  className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Email</option>
                  <option>External Website</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full items-end rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left ">
        <h1 className="font-bold text-xl">Screening Questions</h1>
        <p className="text-sm">We recommend adding 3 or more questions. Applicants must answer each question. </p>
      </div>
      <div>
        Render the questions here
        {backGroundCheck && (
          <div>
            <p>Background Check</p>
          </div>
        )}
        {certifications && (
          <div>
            <p>checkCertifications</p>
          </div>
        )}
        {driverLicense && (
          <div>
            <p>Driver License</p>
          </div>
        )}
        {drugTest && (
          <div>
            <p>Drug Test</p>
          </div>
        )}
        {education && (
          <div>
            <p>Education</p>
          </div>
        )}
        {expertiseWithSkills && (
          <div>
            <p>Expertise With Skills</p>
          </div>
        )}
        {hybridWork && (
          <div>
            <p>Hybrid Work</p>
          </div>
        )}
        {industryExperience && (
          <div>
            <p>Industry Experience</p>
          </div>
        )}
        {language && (
          <div>
            <p>Language</p>
          </div>
        )}
        {onSiteWork && (
          <div>
            <p>On-Site Work</p>
          </div>
        )}
      </div>
      <div>
        <p className="text-left">Add screening questions:</p>
        <div className="flex-wrap gap-4 p-2 rounded-lg place-items-start">
          {/* Backgroundchek */}
          {backGroundCheck && <button onClick={() => setBackGroundCheck(false)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Background Check</button>}

          {!backGroundCheck && <button onClick={() => setBackGroundCheck(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Background Check</button>}
         {/* Certification check */}
          {certifications && <button onClick={() => setCertifications(false)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Certifications</button>}

          {!certifications && <button onClick={() => setCertifications(true)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Certifications</button>}
          {/* Driverlicense check */}
          {driverLicense && <button onClick={() => setDriverLicense(false)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Driver License</button>}

          {!driverLicense && <button onClick={() => setDriverLicense(true)} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Driver License</button>}
          
          {drugTest && <button onClick={() => setDrugTest(false)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Drug Test</button>}

          {!drugTest && <button onClick={() => setDrugTest(true)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Drug Test</button>}
          
          {education && <button onClick={() => setEducation(false)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Education</button>}

          {!education && <button onClick={() => setEducation(true)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Education</button>}

          {expertiseWithSkills && <button onClick={() => setExpertiseWithSkills(false)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Expertise With Skills</button>}

          {!expertiseWithSkills && <button onClick={() => setExpertiseWithSkills(true)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Expertise With Skills</button>}
          
          {hybridWork && <button onClick={() => setHybridWork(false)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hybrid Work</button>}

          {!hybridWork && <button onClick={() => setHybridWork(true)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Hybrid Work</button>}

          {industryExperience && <button onClick={() => setIndustryExperience(false)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Industry Experience</button>}

          {!industryExperience && <button onClick={() => setIndustryExperience(true)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Industry Experience</button>}


          {language && <button onClick={() => setLanguage(false)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Language</button>}

          {!language && <button onClick={() => setLanguage(true)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Language</button>}

          {onSiteWork && <button onClick={() => setOnSiteWork(false)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">On-Site Work</button>}

          {!onSiteWork && <button onClick={() => setOnSiteWork(true)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">On-Site Work</button>}
        
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm bg-slate-200 rounded-lg px-3 py-2 font-semibold leading-6 text-gray-900"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post Job
        </button>
      </div>
    </form>
  );
}
