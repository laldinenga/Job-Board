import React, { useRef, useState } from "react";
import Editor from "./Editor";
import Quill from "quill";
import 'quill/dist/quill.snow.css'

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
            .insert("Hello")
            .insert("\n", { header: 1 })
            .insert("Some ")
            .insert("initial", { bold: true })
            .insert(" ")
            .insert("content", { underline: true })
            .insert("\n")}
          onSelectionChange={setRange}
          onTextChange={setLastChange}
        />
      </div>
      <div className="p-2.5 text-right">
        {quillRef.current?.getLength()-1}
      </div>
    </div>
  );
};

export default App;
