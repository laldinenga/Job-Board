
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    {
        id: 1,
        name: 'On-site'
    },
    {
        id: 2,
        name: 'Hybrid'

    },
    {
        id: 3,
        name: 'Remote',

    }
    // {
    //   id: 4,
    //   name: 'Tom Cook',
    // },
    // {
    //   id: 5,
    //   name: 'Tanya Fox',

    // },
    // {
    //   id: 6,
    //   name: 'Hellen Schmidt',

    // },
    // {
    //   id: 7,
    //   name: 'Caroline Schultz',
    // },
    // {
    //   id: 8,
    //   name: 'Mason Heaney',
    // },
    // {
    //   id: 9,
    //   name: 'Claudie Smitham',
    // },
    // {
    //   id: 10,
    //   name: 'Emil Schaefer',
    // },
]

export default function JobPosting() {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            /> */}
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Post a Job
                    </h2>
                    <h6 className="mt-1 text-center text-md leading-9 tracking-tight text-gray-900">
                        Hire in Under 2 hours
                    </h6>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="jobtitle" className="flex text-sm font-medium leading-6 text-gray-900">
                                Job Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="jobtitle"
                                    name="jobtitle"
                                    type="jobtitle"
                                    required
                                    autoComplete="jobtitle"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="workplace type" className="flex text-sm font-medium leading-6 text-gray-900">
                                Workplace Type
                            </label>
                            <div className="mt-2">
                                <select
                                id="workplace type"
                                name="workplace type"
                                autoComplete="workplace type"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                <option>Remote</option>
                                <option>On-site</option>
                                <option>Hybrid</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="job location" className="block text-sm font-medium leading-6 text-gray-900">
                                    Job Location
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="job location"
                                    name="job location"
                                    type="job location"
                                    required
                                    autoComplete="job location"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="jobtype" className="flex text-sm font-medium leading-6 text-gray-900">
                                Job Type
                            </label>
                            <div className="mt-2 ">
                                <select
                                id="jobtype"
                                name="jobtype"
                                autoComplete="jobtypes"
                                className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                <option>Internship</option>
                                <option>Part-Time</option>
                                <option>Full-Time</option>
                                <option>Casual</option>
                                <option>Others</option>
                               
                                </select>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Write with AI
                            </button>
                            <button
                                type="submit"
                                className="flex w-full mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Write on my own
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        If you want help writing job description write with AI option will write it for you using information above with the help of AI.
                    </p>
                </div>
            </div>
        </>
    )
}