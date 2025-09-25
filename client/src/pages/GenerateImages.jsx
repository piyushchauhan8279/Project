import { Image,Hash, Sparkle } from "lucide-react";
import { useState } from "react";
const GenerateImages = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const imageStyle = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "Realistic style",
    "3D style",
    "Portrait style",
  ];

  const [selectedImage, setSelectedImage] = useState("Realistic");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);

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
          <Sparkle className="w-6 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Describe your image</p>
        <textarea
          rows={4}
          required
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Describe what you want to see in the image..."
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required"
        />

        <p className="mt-4 text-sm font-semibold">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {imageStyle.map((item) => (
            <span
              onClick={() => setSelectedImage(item)}
              className={`px-4 py-1 text-sm border cursor-pointer rounded-full ${
                selectedImage == item
                  ? "bg-green-50 text-green-700"
                  : "text-gr border-gray-300"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex my-6 gap-2 items-center">
          <label className="relative cursor-pointer">
            <input type="checkbox" onChange={(e)=>setPublish(e.target.checked)} checked={publish} className='sr-only peer' />

            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition">
            </div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>

          <p>Make this image public</p>

        </div>
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] px-4 py-2 mt-6 text-sm rounded-b-lg cursor-pointer text-white ">
          <Image className="w-5" />
          Generate Image
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-b-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">Generated Image</h1>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm flex flex-col gap-5 items-center text-gray-400 ">
            <Image className="w-9 h-9" />
            <p>Enter a topic and click on "Generate Image" to get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
