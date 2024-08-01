export default function TextField() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-300 shadow rounded-md py-4 px-32">
        <label
          htmlFor="jobDescription"
          className="block text-xl font-bold text-gray-700"
        >
          Job Description
        </label>
        <div className="flex space-x-4 mb-2">
          <button type="button" className="text-gray-500 hover:text-gray-700  font-bold">
            <strong>B</strong>
          </button>
          <button type="button" className="text-gray-500 hover:text-gray-700  font-bold">
            <em>I</em>
          </button>
          <button type="button" className="text-gray-500 hover:text-gray-700  font-bold">
            <u>U</u>
          </button>
        </div>
        <textarea
          id="jobDescription"                                                                         
          name="jobDescription"
          rows="25"
          placeholder="Write the job description here..."
          className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        ></textarea>
      </div>
    </div>
  );
}