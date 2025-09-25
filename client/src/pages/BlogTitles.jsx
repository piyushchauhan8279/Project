import { Hash, Sparkle } from "lucide-react";
import { useState } from "react";
const BlogTitles = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const blogTitleInfo = [
    "General",
    "Technology",
    "Business",
    "Health",
    "LifeStyle",
    "Education",
    "Food",
    "Travel",
  ];

  const [selectedBlogTitle, setSelectedBlogTitle] = useState("General");
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
          <Sparkle className="w-6 text-[#AE37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Keyword</p>
        <input
          required
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="The future of artificial intelligence is..."
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required"
        />

        <p className="mt-4 text-sm font-semibold">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogTitleInfo.map((item) => (
            <span
              onClick={() => setSelectedBlogTitle(item)}
              className={`px-4 py-1 text-sm border cursor-pointer rounded-full ${
                selectedBlogTitle == item
                  ? "bg-purple-50 text-purple-700"
                  : "text-gr border-gray-300"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] px-4 py-2 mt-6 text-sm rounded-b-lg cursor-pointer text-white ">
          <Hash className="w-5" />
          Generate Title
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-b-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">Generated Title</h1>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm flex flex-col gap-5 items-center text-gray-400 ">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click on "Generate Title" to get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
