import React from "react";

const TrendLink = ({ inCountry, hashtag, totalTweet }: any) => {
  return (
    <div className="bg-trendLink hover:bg-trendLinkHover cursor-pointer py-2.5 px-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-sm">Trending in {inCountry}</span>
          <div className="flex items-center">
            <div className="w-1 h-1 rounded-full bg-zinc-500 bg-opacity-90"></div>
            <div className="w-1 h-1 rounded-full bg-zinc-500 bg-opacity-90 ml-1"></div>
            <div className="w-1 h-1 rounded-full bg-zinc-500 bg-opacity-90 ml-1"></div>
          </div>
        </div>
        <span className="font-medium">{hashtag}</span>
        <span>{totalTweet}</span>
      </div>
    </div>
  );
};

export default TrendLink;
