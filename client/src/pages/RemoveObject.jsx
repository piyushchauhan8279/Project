import {Scissors, Sparkles } from "lucide-react";
import { useState } from "react";
const RemoveObject = () => {
   const onSubmitHandler = async (e) => {
      e.preventDefault();
    };

    const [input, setInput] = useState("");
    const [object,setObject]=useState("");
  
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
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Object Removal</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Upload Image</p>
        <input
          required
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required text-gray-600"
        />
        <p className="mt-6 text-sm font-semibold">Describe object name to remove</p>
        <textarea
          rows={4}
          required
          onChange={(e) => setObject(e.target.value)}
          value={input}
          placeholder="e.g. watch or spoon , only single object name"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required"
        />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417Df6] to-[#8E37EB] px-4 py-2 mt-6 text-sm rounded-b-lg cursor-pointer text-white ">
          <Scissors className="w-5" />
          Remove Object
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-b-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm flex flex-col gap-5 items-center text-gray-400 ">
            <Scissors className="w-9 h-9" />
            <p>Upload an image and click "Remove Object" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveObject
