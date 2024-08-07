import { useState } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

const Editor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="">
      <div className="font-medium text-2xl text-start border-b-2 mb-10">
        1 of 2: Tell us about the role
      </div>
      <div className="py-1 px-2">
        <label
          htmlFor="Description"
          className="block text-lg font-bold text-left"
        >
          Description*
        </label>
      </div>
      <div className=" bg-slate-50 h-96 border-2 ">
        <div className="h-full">
          <div className="h-full">
            <ReactQuill
              theme="snow"
              value={value}
              placeholder="Write your description here"
              onChange={setValue}
              className="h-full w-full"
              modules={modules}
            />
          </div>
          {/* <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: value }}
          /> */}
        </div>
        <div className="mt-14 flex items-center justify-end gap-x-6">
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
    </div>
  );
};

export default Editor;
