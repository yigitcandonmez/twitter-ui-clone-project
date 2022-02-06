import React from "react";
import { SearchIcon } from "../icons/Icon";

const Widgets = () => {
  return (
    <aside className="w-80 px-3 text-white">
      <div className="flex  py-2 px-5 mt-2  rounded-full bg-zinc-800 bg-opacity-90">
        <SearchIcon />
        <input
          type="text"
          className="w-full bg-transparent outline-none pl-3 placeholder:text-gray-500 placeholder:text-base"
          placeholder="Search Twitter"
        ></input>
      </div>
    </aside>
  );
};

export default Widgets;
