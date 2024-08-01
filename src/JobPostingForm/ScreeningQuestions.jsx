import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function ScreeningPage() {
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
      </div>
      <div>
          <p className="text-left">Add screening questions:</p>
          <div className="flex flex-col ">
            <button className="bg-indigo-600">Background Check</button>
            <button>Certification</button>
            <button>Driver's license</button>
            <button>Drug Test</button>
            <button>Education</button>
            <button>Expertise with Skill</button>
            <button>Hybrid Work</button>
            <button>Industry Experience</button>
            <button>Language</button>
            <button>Location</button>
            <button>Onsite Work</button>
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
