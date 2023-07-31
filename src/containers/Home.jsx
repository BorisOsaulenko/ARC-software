import React from "react";
import Header from "../components/Header";
import { getHomeStats, getPictureUrl } from "../utils";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-slate-200">
      <Header />
      <div className="flex justify-between p-5">
        <div className="w-19/24">
          <img src={getPictureUrl()} alt="your avatar" className="w-full" />
        </div>

        <div className="w-full ml-5 bg-slate-400 flex flex-col items-center">
          {getHomeStats().map((stat) => {
            return (
              <div
                className="flex w-full p-4 justify-between border-b-2 border-double border-b-red-200 relative"
                key={stat.stat}
              >
                <div className="font-bold">{stat.stat}:</div>
                <div className="font-bold flex-grow left-64 absolute">
                  {stat.value}
                </div>
                <div
                  className=" font-mono border-b-2 border-b-neutral-700 cursor-pointer"
                  onClick={() => {
                    navigate(stat.hintUrl);
                  }}
                >
                  {stat.hint}
                </div>
              </div>
            );
          })}
          <div className="flex h-full items-center w-full justify-between px-4">
            <button
              className="p-6 border-2 font-bold bg-slate-500 rounded-xl border-red-200 border-double h-2/3 w-8/24"
              onClick={() => navigate("/settings")}
            >
              Account settings
            </button>

            <button
              className="p-6 border-2 font-bold bg-slate-500 rounded-xl border-red-200 border-double h-2/3 w-7/24"
              onClick={() => navigate("/Q&A")}
            >
              Questions?
            </button>

            <button
              className="p-6 border-2 font-bold bg-slate-500 rounded-xl border-red-200 border-double h-2/3 w-8/24"
              onClick={() => navigate("/statistics")}
            >
              Advanced statistics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
