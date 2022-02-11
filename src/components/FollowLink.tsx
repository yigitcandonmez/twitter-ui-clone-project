import React from "react";

const TrendFollowLink = ({ img, name, id }: any) => {
  return (
    <div>
      <div className="bg-trendLink hover:bg-trendLinkHover cursor-pointer py-1.5 px-4">
        <div className="flex items-center justify-between">
          <div>
            <img src={`${img}`} alt="img" className="rounded-full w-12 h-12" />
          </div>
          <div className="flex-1 pl-3 flex flex-col text-left">
            <span>{name}</span>
            <span className="text-gray-600">{id}</span>
          </div>
          <div className=" bg-white py-1 px-3.5 rounded-full text-zinc-900">
            <button className="font-medium">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendFollowLink;
