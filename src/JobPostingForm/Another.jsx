import React, { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  { key: "backGroundCheck", label: "Background Check", head: "Are you willing to undergo a background check, in accordance with local law/regulations"},
  { key: "certifications", label: "Certifications",  head: "Do you have the following license or certification: [License/Certification]"},
  { key: "driverLicense", label: "Driver License",  head: "Do you have a valid driver's license"},
  { key: "drugTest", label: "Drug Test", head: "Are you willing to take a drug test, in accordance with local law/regulations"},
  { key: "education", label: "Education", head: "Have you completed the following level of education: [Degree]"},
  { key: "expertiseWithSkills", label: "Expertise With Skills", head: "How many years of work experience do you have with [Skill]"},
  { key: "hybridWork", label: "Hybrid Work", head: "Are you comfortable working in a hybrid setting"},
  { key: "industryExperience", label: "Industry Experience", head: "How many years of [Industry] experience do you currently have"},
  { key: "language", label: "Language", head: "What is your level of proficiency in [Language]"},
  { key: "location", label: "Location", head: "Are you comfortable commuting to this job's location"},
  { key: "onSiteWork", label: "On-Site Work", head: "Are you comfortable working in an onsite setting"},
  { key: "remoteWork", label: "Remote Work", head: "Are you comfortable working in a remote setting"},
  { key: "urgentHiringNeed", label: "Urgent Hiring Need", head: "We must fill this position urgently. Can you start immediately"},
  { key: "visaStatus", label: "Visa Status", head: "Will you now or in the future require sponsorship for employment visa status"},
  { key: "workAuthorization", label: "Work Authorization", head: "Are you legally authorized to work in Australia"},
  { key: "workExperience", label: "Work Experience", head: "How many years of [Job Function] experience do you currently have"},
  { key: "customQuestion", label: "Custom Question", head: "Write a custom screening question"},
];

export default function ScreeningPage() {
  const [states, setStates] = useState(
    Object.fromEntries(questions.map((q) => [q.key, false])),
    // Object.fromEntries(questions.map((q) => [q.key, {clicked: false}]))
  );

  const toggleState = (key) => {
    setStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <form>
      <div className="font-medium text-xl text-start border-b-2 mb-10">
      2 of 2: Receive qualified applicants
      </div>
      <div className="bg-custom-gray border border-black">
        <div className="space-y-8 m-4">
          <div className="border-b border-l-violet-950 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Applicant Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
            <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="receiving-mode"
                  className="flex text-sm font-medium leading-6 text-gray-900">
                  Application Collection
                </label>
                <div className="mt-2">
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

          <div className="text-left">
            <h1 className="font-bold text-xl">Screening Questions</h1>
            <p className="text-sm">
              We recommend adding 3 or more questions. Applicants must answer
              each question.
            </p>
          </div>

          <div>
            {questions.map(({ key, head }) =>
              states[key] ? (
                <div className="bg-stone-300 p-1 rounded-xl mt-5" key={key}>
                  <div className="flex justify-between ml-2 mr-3">
                    <h3>
                      {`${head}?`}
                    </h3>
                    <button
                      onClick={() =>
                        setStates(prev => ({
                          ...prev,
                          [key]: false
                        }))
                      }
                      className="hover:bg-slate-200 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="bg-white rounded-xl shadow-xl flex justify-between">
                    <div className="p-2">
                      <p>Ideal Answer:</p>
                      <p>Yes</p>
                    </div>
                    <div className="p-2">
                      <input type="checkbox" id={key} name={key} value="Yes" />
                      <label htmlFor={key}> Must have qualification</label>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>

          <div>
            <p className="text-left">Add screening questions:</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-start">
              {questions.map(({ key, label}) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => toggleState(key)}
                  disabled={states[key]?.clicked} 
                  className={"text-black bg-transparent hover:bg-slate-200 font-semibold py-1 px-2 border border-black hover:border-gray-300 rounded-full "}
                  // ${ states[key]?.clicked ? "opacity-50 cursor-not-allowed" : ""}
                >
                
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to={"/editor"}
              type="button"
              className="text-sm bg-slate-200 rounded-lg px-3 py-2 font-semibold leading-6 text-gray-900"
            >
              Back
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Post Job
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
