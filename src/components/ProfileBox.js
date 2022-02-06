import React from "react";

const ProfileBox = () => {
  return (
    <div className="flex items-center mb-4 cursor-pointer justify-center hover:bg-neutral-600 hover:rounded-full hover:bg-opacity-30 mr-4 pr-1 pt-2 pb-2">
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1262086688790261762/5SzWPJLb_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full ml-1"
        />
      </div>
      <div className="ml-3 flex flex-col items-start justify-center">
        <div className="font-medium">Yiğitcan Dönmez</div>
        <div className="text-gray-600">@ksealyen</div>
      </div>
      <div className="flex ml-6">
        <div className="w-1 h-1 rounded-full bg-zinc-500 bg-opacity-90"></div>
        <div className="w-1 h-1 rounded-full bg-zinc-500 bg-opacity-90 ml-1"></div>
        <div className="w-1 h-1 rounded-full bg-zinc-500 bg-opacity-90 ml-1"></div>
      </div>
    </div>
  );
};

export default ProfileBox;
