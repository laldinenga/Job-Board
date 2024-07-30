
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
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="workplace type" className="block text-sm font-medium leading-6 text-gray-900">
                                    Workplace Type
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="workplace type"
                                    name="workplace type"
                                    type="workplace type"
                                    required
                                    autoComplete="workplace type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
                        {/* <Listbox value={selected} onChange={setSelected}>
                            <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label>
                            <div className="relative mt-2">
                                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                    <span className="flex items-center">
                                        <img alt="" src={selected.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
                                        <span className="ml-3 block truncate">{selected.name}</span>
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                    </span>
                                </ListboxButton>

                                <ListboxOptions
                                    transition
                                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                >
                                    {people.map((person) => (
                                        <ListboxOption
                                            key={person.id}
                                            value={person}
                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                        >
                                            <div className="flex items-center">
                                                <img alt="" src={person.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                                    {person.name}
                                                </span>
                                            </div>

                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                            </span>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox> */}

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