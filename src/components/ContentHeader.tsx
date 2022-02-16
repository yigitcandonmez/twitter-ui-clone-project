import React from "react";
import { StarIcon } from "../icons/Icon";

const pages = [
  { name: "Home" },
  { name: "Explore" },
  { name: "Notifications" },
];

const ContentHeader = ({ children, className }: any) => {
  return (
    <div
      className={`home__header sticky bg-black w-full h-14 flex justify-between items-center px-5 pt-2 ${className}`}
    >
      {children}
    </div>
  );
};

export const HomeContentHeader = ({ optionalProps }: any) => {
  return (
    <ContentHeader className={"cursor-pointer"}>
      <div className={`${optionalProps} text-white font-medium text-lg`}>
        {pages[0].name}
      </div>
      <div className="pr-1">
        <StarIcon />
      </div>
    </ContentHeader>
  );
};
