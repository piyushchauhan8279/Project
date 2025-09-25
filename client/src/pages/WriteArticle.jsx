import { Edit, Sparkles } from "lucide-react";
import React, { useState } from "react";

const WriteArticle = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
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

  const [selectedLength, setSelectedLength] = useState(articleInfo[0]);
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
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="The future of artificial intelligence is..."
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required"
          required
        />

        <p className="mt-4 text-sm font-semibold">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleInfo.map((item, idx) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`px-4 py-1 text-sm border cursor-pointer rounded-full ${
                selectedLength.text == item.text
                  ? "bg-blue-50 text-blue-700"
                  : "text-gr border-gray-300"
              }`}
              key={idx}
            >
              {item.text}
            </span>
          ))}
        </div>
        <br />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] px-4 py-2 mt-6 text-sm rounded-b-lg cursor-pointer text-white ">
          <Edit className="w-5" />
          Generate Article
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-b-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated Article</h1>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm flex flex-col gap-5 items-center text-gray-400 ">
            <Edit className="w-9 h-9" />
            <p>Enter a topic and click on "Generate Article" to get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
