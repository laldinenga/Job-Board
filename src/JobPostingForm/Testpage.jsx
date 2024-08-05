import React, { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
   { key: "backGroundCheck", label: "Background Check", head: "Are you willing to undergo a background check, in accordance with local law/regulations" },
   { key: "certifications", label: "Certifications", head: "Do you have the following license or certification: [License/Certification]" },
   { key: "driverLicense", label: "Driver License", head: "Do you have a valid driver's license" },
   { key: "drugTest", label: "Drug Test", head: "Are you willing to take a drug test, in accordance with local law/regulations" },
   { key: "education", label: "Education", head: "Have you completed the following level of education: [Degree]" },
   { key: "expertiseWithSkills", label: "Expertise With Skills", head: "How many years of work experience do you have with [Skill]" },
   { key: "hybridWork", label: "Hybrid Work", head: "Are you comfortable working in a hybrid setting" },
   { key: "industryExperience", label: "Industry Experience", head: "How many years of [Industry] experience do you currently have" },
   { key: "language", label: "Language", head: "What is your level of proficiency in [Language]" },
   { key: "location", label: "Location", head: "Are you comfortable commuting to this job's location" },
   { key: "onSiteWork", label: "On-Site Work", head: "Are you comfortable working in an onsite setting" },
   { key: "remoteWork", label: "Remote Work", head: "Are you comfortable working in a remote setting" },
   { key: "urgentHiringNeed", label: "Urgent Hiring Need", head: "We must fill this position urgently. Can you start immediately" },
   { key: "visaStatus", label: "Visa Status", head: "Will you now or in the future require sponsorship for employment visa status" },
   { key: "workAuthorization", label: "Work Authorization", head: "Are you legally authorized to work in Australia" },
   { key: "workExperience", label: "Work Experience", head: "How many years of [Job Function] experience do you currently have" },
   { key: "customQuestion", label: "Custom Question", head: "Write a custom screening question" },
];

export default function ScreeningPage() {
   const [states, setStates] = useState(
      Object.fromEntries(questions.map((q) => [q.key, false])),
      // Object.fromEntries(questions.map((q) => [q.key, {clicked: false}]))
   );

   const toggleState = (key) => {
      setStates((prev) => ({ ...prev, [key]: !prev[key] }));
   };

   const [selectedOption, setSelectedOption] = useState('email');

   const handleChange = (event) => {
      setSelectedOption(event.target.value);
   };

   return (
      <div>
         <div className="font-medium text-xl text-start border-b-2 mb-10">
            2 of 2: Receive qualified applicants
         </div>
         <h2 className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
         </h2>
         <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
         </p>
         <div>
         {/* grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 */}
            <div className="mt-10 ">
               <div className="">
                  <label
                     htmlFor="receiving-mode"
                     className="flex text-sm font-medium leading-6 text-gray-900"
                  >
                     Application Collection
                  </label>
                  <div className="inline justify-between mt-2">
                     <select
                        id="receiving-mode"
                        name="receiving-mode"
                        autoComplete="receiving-mode"
                        value={selectedOption} 
                        onChange={handleChange}
                        className="flex w-full rounded-md p-1 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                     >
                        <option value="email">Email</option>
                        <option value="externalSite">External Website</option>
                     </select>
                     {selectedOption === 'email' && (
                        <div className="w-96 justify-between">
                           <label
                              htmlFor="last-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Email Address
                           </label>
                           <div className="mt-2">
                              <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 autoComplete="Email"
                                 className="block w-full items-end py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>
                     )}
                     {selectedOption === 'externalSite' && (
                        <div className="">
                           <label
                              htmlFor="last-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              External Website
                           </label>
                           <div className="mt-2">
                              <input
                                 id="last-name"
                                 name="last-name"
                                 type="text"
                                 autoComplete="family-name"
                                 className="block w-full items-end py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>
                     )}
                  </div>
               </div>


            </div>
            {/* <label htmlFor="options">Choose an option:</label>
            <select id="options" value={selectedOption} onChange={handleChange}>
               <option value="email">Option 1</option>
               <option value="externalSite">Option 2</option>
            </select>

            {selectedOption === 'email' && (
               <div>
                  <h2>Content for Option 1</h2>
                  <p>Hi ther im using whatsapp.</p>
               </div>
            )}
            {selectedOption === 'externalSite' && (
               <div>
                  <h2>Content for Option 2</h2>
                  <p>Get the hell out of here.</p>
               </div>
            )} */}
         </div>
      </div>
   );
};


