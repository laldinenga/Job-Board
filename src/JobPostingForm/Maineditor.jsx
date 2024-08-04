import React, { useRef, useState } from "react";
import Editor from "./Editor";
import Quill from "quill";
import { Link } from "react-router-dom";
import "quill/dist/quill.snow.css";

const Delta = Quill.import("delta");

const App = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
    <div>
      <div className="font-medium text-2xl text-start border-b-2 mb-10">
        1 of 2: Tell us about the role
      </div>
      <div className="py-2 px-2">
        <label
          htmlFor="jobDescription"
          className="block text-lg font-bold text-left"
        >
          Job Description
        </label>
      </div>
      <div className="bg-white">
        <Editor
          ref={quillRef}
          defaultValue={new Delta()
            .insert("Type Your Job Description Here")
            .insert("\n", { header: 1 })
            .insert("Implement")
            .insert(" ")
            .insert("AI", { bold: true })
            .insert(" ")
            .insert("LATER", { underline: true })
            .insert("\n")}
          onSelectionChange={setRange}
          onTextChange={setLastChange}
        />
      </div>
      <div className="p-2.5 text-right">
        {quillRef.current?.getLength() - 1}
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={"/jobposting"}
          type="button"
          className="text-sm bg-slate-200 rounded-lg px-3 py-2 font-semibold leading-6 text-gray-900"
        >
          Back
        </Link>
        <Link to={"/another"}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default App;
