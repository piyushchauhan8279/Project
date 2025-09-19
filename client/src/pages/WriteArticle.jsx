import { Sparkle } from "lucide-react";
import React from "react";

const WriteArticle = () => {
  const articleInfo = [
    {
      length: 800,
      text: "Short (500-800) words",
    },
    {
      length: 1200,
      text: "Medium (800-1200) words",
    },
    {
      length: 1600,
      text: "Long (1200-1600) words",
    },
  ];
  return (
    <div
      className="flex h-full overflow-y-scroll p-6 
    items-start flex-wrap gap-4 text-slate-700 "
    >
      {/* left col */}
      <form className=" p-4 w-full max-w-lg bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center gap-3 ">
          <Sparkle className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Article Topic</p>
        <input
          type="text"
          placeholder="The future of artificial intelligence is..."
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required"
        />

        <p className="mt-4 text-sm font-semibold">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleInfo.map((item,idx)=>(<span className=" px-4 py-1 text-sm border cursor-pointer rounded-full" key={idx}>
            {item.text}
          </span>))}
        </div>
      </form>
      {/* right col */}
      <div></div>
    </div>
  );
};

export default WriteArticle;
