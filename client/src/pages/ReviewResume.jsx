import {FileTextIcon, Sparkles } from "lucide-react";
import { useState } from "react";
const ReviewResume = () => {
  const onSubmitHandler = async (e) => {
        e.preventDefault();
      };
  
      const [input, setInput] = useState("");
  return (
    <div
      className="flex h-full overflow-y-scroll p-6 
    items-start flex-wrap gap-4 text-slate-700 "
    >
      {/* left col */}
      <form
        onSubmit={onSubmitHandler}
        className=" p-4 w-full max-w-lg bg-white border border-gray-200 rounded-lg"
      >
        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Review Resume</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Upload Resume</p>
        <input
          required
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="application/pdf"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required text-gray-600"
        />
        <p className="text-xs text-gray-500 font-light mt-1">Supports PDF resume only.</p>
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] px-4 py-2 mt-6 text-sm rounded-b-lg cursor-pointer text-white ">
          <FileTextIcon className="w-5" />
          Review Resume
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-b-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <FileTextIcon className="w-5 h-5 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Analysis Result</h1>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm flex flex-col gap-5 items-center text-gray-400 ">
            <FileTextIcon className="w-9 h-9" />
            <p>Upload a Resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ReviewResume
