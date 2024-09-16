import React, { useEffect, useRef, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

// Google Maps libraries used in this app
const libraries = ["places"];

function LocationSearch() {
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current);
      autocompleteInstance.addListener("place_changed", () => {
        const place = autocompleteInstance.getPlace();
        console.log("Selected place:", place.formatted_address);
      });
      setAutocomplete(autocompleteInstance);
    }
  }, [isLoaded]);

  return (
    <div style={{ marginTop: "10%", textAlign: "center" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Start typing your address"
        style={{
          boxSizing: "border-box",
          border: "1px solid transparent",
          width: "50%",
          height: "50px",
          padding: "0 12px",
          borderRadius: "3px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          fontSize: "14px",
          outline: "none",
          textOverflow: "ellipsis",
          marginTop: "30px",
        }}
      />
    </div>
  );
}

export default LocationSearch;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Question Definitions
// const questions = [
//   { key: "certifications", label: "Certifications", head: "Do you have the following license or certification: [License/Certification]" },
//   { key: "education", label: "Education", head: "Have you completed the following level of education: [Degree]" },
//   { key: "expertiseWithSkills", label: "Expertise With Skills", head: "How many years of work experience do you have with [Skill]" },
//   { key: "industryExperience", label: "Industry Experience", head: "How many years of [Industry] experience do you currently have" },
//   { key: "language", label: "Language", head: "What is your level of proficiency in [Language]" },
//   { key: "workExperience", label: "Work Experience", head: "How many years of [Job Function] experience do you currently have" },
//   { key: "customQuestion", label: "Custom Question", head: "Write a custom screening question" },
// ];

// // Input Field Configuration
// const inputConfig = {
//   certifications: { label: "License/Certifications", type: "text" },
//   education: { label: "Degree", type: "text" },
//   expertiseWithSkills: { label: "Years of Experience with Skill", type: "number" },
//   industryExperience: { label: "Years of Industry Experience", type: "number" },
//   language: { label: "Language Proficiency", type: "text" },
//   workExperience: { label: "Years of Work Experience", type: "number" },
//   customQuestion: { label: "Custom Question", type: "text" },
// };

// // Component
// export default function ScreeningPage() {
//   const [states, setStates] = useState(
//     Object.fromEntries(questions.map((q) => [q.key, false]))
//   );

//   const [clickOrder, setClickOrder] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("email");

//   const toggleState = (key) => {
//     setStates((prev) => ({ ...prev, [key]: !prev[key] }));

//     if (!clickOrder.includes(key)) {
//       setClickOrder((prevOrder) => [...prevOrder, key]);
//     }
//   };

//   const sortedQuestions = questions
//     .filter(({ key }) => clickOrder.includes(key)) 
//     .sort((a, b) => clickOrder.indexOf(a.key) - clickOrder.indexOf(b.key));

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <form>
//       <div className="bg-custom-gray border border-black">
//         <div className="space-y-8 m-4">
//           <div className="font-medium text-xl text-start border-b-2 mb-10">
//             2 of 2: Receive qualified applicants
//           </div>
//           <div className="text-gray-800">
//             <h2 className="text-base font-semibold leading-7">
//               Applicant Information
//             </h2>
//             <p className="mt-1 text-sm leading-6">
//               Use a permanent address where you can receive mail.
//             </p>
//           </div>
//           <div className="mt-10">
//             <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-3">
//                 <label
//                   htmlFor="receiving-mode"
//                   className="flex text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Application Collection
//                 </label>
//                 <div className="mt-2 sm:col-span-3">
//                   <select
//                     id="receiving-mode"
//                     name="receiving-mode"
//                     autoComplete="receiving-mode"
//                     value={selectedOption}
//                     onChange={handleChange}
//                     className="flex w-full rounded-md p-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                   >
//                     <option value="email">Email</option>
//                     <option value="externalSite">External Website</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="sm:col-span-3">
//                 {selectedOption === "email" && (
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="text-sm font-medium leading-6 text-gray-900"
//                     >
//                       Email Address
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="example@gmail.com"
//                         autoComplete="Email"
//                         className="w-full items-end py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                       />
//                     </div>
//                   </div>
//                 )}
//                 {selectedOption === "externalSite" && (
//                   <div>
//                     <label
//                       htmlFor="website"
//                       className="block text-sm font-medium leading-6 text-gray-900"
//                     >
//                       External Website
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="website"
//                         name="website"
//                         type="website"
//                         placeholder="www.example.com"
//                         autoComplete="website"
//                         className="w-full items-end py-2 pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="mt-2 sm:col-span-6">
//                 {selectedOption === "email" && (
//                   <div>
//                     <div className="text-left">
//                       <h1 className="font-bold text-xl">Screening Questions</h1>
//                       <p className="text-sm">
//                         We recommend adding 3 or more questions. Applicants must
//                         answer each question.
//                       </p>
//                     </div>
//                     <div>
//                       {sortedQuestions.map(({ key, head }) =>
//                         states[key] ? (
//                           <div
//                             className="bg-stone-300 p-1 rounded-xl mt-5"
//                             key={key}
//                           >
//                             <div className="flex justify-between ml-2 mr-3">
//                               <h3>{`${head}?`}</h3>
//                               <button
//                                 onClick={() =>
//                                   setStates((prev) => ({
//                                     ...prev,
//                                     [key]: false,
//                                   }))
//                                 }
//                                 className="hover:bg-slate-200 rounded-full"
//                               >
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                   strokeWidth={1.5}
//                                   stroke="currentColor"
//                                   className="size-6"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M6 18 18 6M6 6l12 12"
//                                   />
//                                 </svg>
//                               </button>
//                             </div>
//                             <div className="bg-white rounded-xl shadow-xl flex flex-col p-2">
//                               <p>Ideal Answer:</p>
//                               <p>Yes</p>
//                               {inputConfig[key] && (
//                                 <div className="mt-2">
//                                   <label htmlFor={key}>{inputConfig[key].label}</label>
//                                   <input
//                                     className="rounded-md mt-1"
//                                     id={key}
//                                     type={inputConfig[key].type}
//                                   />
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         ) : null
//                       )}
//                     </div>
//                     <div>
//                       <p className="text-left">Add screening questions:</p>
//                       <div className="flex flex-wrap gap-2 mt-2 justify-start">
//                         {questions.map(({ key, label }) => (
//                           <button
//                             type="button"
//                             key={key}
//                             onClick={() => toggleState(key)}
//                             className="text-black bg-transparent hover:bg-slate-200 font-semibold py-1 px-2 border border-black hover:border-gray-300 rounded-full"
//                           >
//                             {label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end space-x-4 mt-4">
//         <Link to="/" className="btn btn-secondary">Back</Link>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </div>
//     </form>
//   );
// }

