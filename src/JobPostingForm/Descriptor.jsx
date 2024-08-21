import React, { useRef, useState, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import axios from 'axios'; // Import Axios for API requests
import { Link } from 'react-router-dom';

const prompt = "Write Job Description for Java Developer?"; // Define the prompt

const QuillEditor = () => {
    const quillContainerRef = useRef(null);
    const quillInstanceRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (quillContainerRef.current && !quillInstanceRef.current) {
            // Initialize Quill editor
            quillInstanceRef.current = new Quill(quillContainerRef.current, {
                theme: 'snow'
            });
        }
    }, []);

    const fetchContentFromAPI = async () => {
        const controller = new AbortController();
        const signal = controller.signal;

        try {
            setIsLoading(true);
            // Replace with your API endpoint
            const response = await axios.post('http://localhost:3000/openai/query', { prompt }, { signal });

            // Assuming the response data is in the Delta format
            const jsonResponse = response.data;

            console.log(jsonResponse);


            // Convert JSON response to Delta format if needed
            const delta = convertJsonToDelta(jsonResponse);

            if (quillInstanceRef.current) {
                // Update editor content with Delta object
                quillInstanceRef.current.updateContents(delta);
            }
        } catch (error) {
            if (error.name === 'CanceledError') {
                console.log('Request was canceled');
            } else {
                console.error('Error fetching data from API', error);
            }
        } finally {
            setIsLoading(false);
        }

        // Cleanup function to abort the request on component unmount
        return () => {
            controller.abort();
        };
    };

    const convertJsonToDelta = (jsonResponse) => {
        // Implement your conversion logic here
        // For example, if the JSON response has a "text" field
        return {
            ops: [
                { insert: jsonResponse || 'No content' }
            ]
        };
    };

    return (
        <div>
            <div className="font-medium text-2xl text-start border-b-2 mb-10">
                1 of 2: Tell us about the role
            </div>
            <div className="flex justify-between py-1 px-2">
                <h5 className="block text-lg font-bold text-left">Job Description*</h5>
                <a
                    className="border-2 hover:bg-blue-100 rounded-lg font-semibold"
                    href="#"
                    type="button"
                    onClick={fetchContentFromAPI} disabled={isLoading}
                >
                     {isLoading ? 'Loading...' : 'Generate Description with AI *'}
                </a>
            </div>
            <div>
                {/* <button onClick={fetchContentFromAPI} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Fetch Content'}
                </button> */}
                <div ref={quillContainerRef} style={{ height: '400px', padding: '40px' }}></div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link
          to={"/jobposting"}
          type="button"
          className="text-sm bg-slate-200 rounded-lg px-3 py-2 font-semibold leading-6 text-gray-900"
        >
          Back
        </Link>
        <Link
          to={"/questionpage"}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </Link>
      </div>
        </div>
    );
};

export default QuillEditor;
