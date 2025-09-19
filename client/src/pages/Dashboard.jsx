import { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkle } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import Creations from "../components/Creations";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);

  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <div className="h-full p-6 overflow-y-scroll">
      <div className="flex flex-wrap justify-start gap-4">
        <div className="flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-lg font-semibold">
              {dummyCreationData.length}
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] flex justify-center items-center">
            <Sparkle className="w-5 text-white"></Sparkle>
          </div>
        </div>

        <div className="flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-lg font-semibold">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3C81F6] to-[#9234EA] flex justify-center items-center">
            <Gem className="w-5 text-white"></Gem>
          </div>
        </div>
      </div>

      <div className="space-y-3 ">
        <p className="mt-6 mb-4 ">Recent Creations</p>
        {creations.map((item) => (
          <Creations key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
