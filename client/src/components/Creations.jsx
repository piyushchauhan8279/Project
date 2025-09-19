import { useState } from "react";
import Markdown from "react-markdown";

const Creations = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 border border-gray-200 rounded-lg cursor-pointer bg-white max-w-5xl text-sm"
    >
      <div className="flex gap-4 justify-between items-center">
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type}-{new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border rounded-full px-4 py-1 border-[#BFDBFE] text-[#1E40AF]">
          {item.type}
        </button>
      </div>
      {expanded && (
        <div>
          {item.type == "image" ? (
            <div>
              <img
                src={item.content}
                className="mt-3 w-full max-w-md"
                alt="image"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Creations;
