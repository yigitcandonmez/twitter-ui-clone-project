import React from "react";
import { SearchIcon, SettingsIcon } from "../icons/Icon";
import TrendLink from "../components/TrendLink";
import FollowLink from "../components/FollowLink";

const trendLinks = [
  {
    inCountry: "Turkey",
    hashtag: "#bornova",
    totalTweet: "499K Tweets",
  },
  {
    inCountry: "Turkey",
    hashtag: "#buca",
    totalTweet: "1.02M Tweets",
  },
  {
    inCountry: "Turkey",
    hashtag: "#Sigara",
    totalTweet: "24.5K Tweets",
  },
  {
    inCountry: "Turkey",
    hashtag: "#SedatPeker",
    totalTweet: "5,577 Tweets",
  },
];

const whoToFollow = [
  {
    name: "Ryan Florence",
    id: "@ryanflorence",
    img: "https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_400x400.jpg",
  },
  {
    name: "MongoDB",
    id: "@MongoDB",
    img: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
  },
];

const Widgets = () => {
  return (
    <aside className="pl-6 text-white" style={{ width: "21.875rem" }}>
      <div className="flex  py-2 px-5 mt-2  rounded-full bg-search bg-opacity-90">
        <SearchIcon />
        <input
          type="text"
          className="w-full bg-transparent outline-none pl-3 placeholder:text-gray-500 placeholder:text-base"
          placeholder="Search Twitter"
        ></input>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex bg-trendLink rounded-tl-3xl rounded-tr-3xl py-3 px-4 items-center justify-between">
          <p className="text-lg font-bold">Trends For You</p>
          <SettingsIcon optionalClass={"mr-1"} />
        </div>
        {trendLinks.map(({ inCountry, hashtag, totalTweet }) => {
          return (
            <TrendLink
              inCountry={inCountry}
              hashtag={hashtag}
              totalTweet={totalTweet}
            />
          );
        })}
        <div className="bg-trendLink rounded-bl-3xl rounded-br-3xl pt-3 pb-4 px-4 hover:bg-trendLinkHover cursor-pointer">
          <a className="text-primary">Show more</a>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex bg-trendLink rounded-tl-3xl rounded-tr-3xl py-3 px-4 items-center justify-between">
          <p className="text-lg font-bold">Who to follow</p>
        </div>
        {whoToFollow.map(({ name, id, img }) => {
          return <FollowLink name={name} id={id} img={img} />;
        })}
        <div className="bg-trendLink rounded-bl-3xl rounded-br-3xl pt-3 pb-4 px-4 hover:bg-trendLinkHover cursor-pointer">
          <a className="text-primary">Show more</a>
        </div>
      </div>
    </aside>
  );
};

export default Widgets;
