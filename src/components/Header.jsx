import React from "react";

const Header = () => {
  const name = JSON.parse(localStorage.getItem("user")).name;
  const imgUrl = JSON.parse(localStorage.getItem("user")).picture;

  return (
    <div className="w-screen h-24 bg-slate-400 p-5 flex justify-between">
      <div className="flex w-7/12 justify-between">
        <button className="w-32 rounded-xl border-2 font-bold bg-slate-500 border-red-200 border-double">
          About
        </button>
        <button className="w-32 rounded-xl border-2 font-bold bg-slate-500 border-red-200 border-double">
          Articles
        </button>
        <button className="w-32 rounded-xl border-2 font-bold bg-slate-500 border-red-200 border-double">
          Friends
        </button>
        <button className="w-32 rounded-xl border-2 font-bold bg-slate-500 border-red-200 border-double">
          Statistics
        </button>
        <button className="w-32 rounded-xl border-2 font-bold bg-slate-500 border-red-200 border-double">
          Trends
        </button>
      </div>

      <div className="flex items-center w-3/12 justify-between">
        <span className="text-2xl font-bold bg-gradient-to-tl to-purple-400 from-pink-600 bg-clip-text text-transparent">
          {name}
        </span>
        <img src={imgUrl} alt="your avatar" className="w-1/4 rounded" />
      </div>
    </div>
  );
};

export default Header;
