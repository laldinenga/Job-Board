import React, { useRef, useState, useEffect } from "react";
import Editor from "./Editorcopy";
import axios from "axios";
import { Link } from "react-router-dom";
import Quill from "quill";

const Delta = Quill.import("delta");

const App = () => {
  const [value, setValue] = useState("Hello");
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const quillRef = useRef();
  const [abortController, setAbortController] = useState(new AbortController());

  const prompts = {
    prompt1: "What date is today?",
    prompt2: "Tell me a joke.",
    // Add more prompts as needed
  };

  const handlePromptClick = async (prompt) => {
    if (loading) return; // Prevent multiple requests

    setLoading(true);
    setError(null);

    // Cancel previous request
    if (abortController) {
      abortController.abort();
    }

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await axios.post(
        "http://localhost:3000/openai/query",
        { prompt },
        {
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal, // Pass the signal to axios
        }
      );
      quillRef.current = response.data;

      //   setValue(response.data); // Update ReactQuill value with the API response

      // const jsonResponse = response.data;
      // const htmlResponse = `<p>${jsonResponse}</p>`;
      // setValue(htmlResponse);
      // console.log(htmlResponse);
    } catch (err) {
      if (err.name !== "CanceledError") {
        setError("Error fetching data");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Cleanup function to handle component unmount
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, [abortController]);

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
          onClick={() => handlePromptClick(prompts.prompt1)}
          disabled={loading}
        >
          Generate Description with AI *
        </a>
      </div>
        <div>
          <Editor
            ref={quillRef}
            defaultValue={new Delta().insert(prompts.prompt1)}
            style={{ height: "100%" }}

            // value={value}
            onChange={Quill.updateContents(new Delta().insert("Hi"))}
            onSelectionChange={setRange}
            onTextChange={setLastChange}
          />
        </div>
      {/* <div className="p-2.5 text-right">
        {quillRef.current?.getLength() - 1}
      </div> */}
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
        {/* <button
          onClick={fetchPrompt}
          disabled={loading}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          {loading ? "Loading..." : "Fetch New Prompt"}
        </button> */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default App;
