import React, { useState } from "react";
import ProfileBox from "../components/ProfileBox";
import SideLink from "../components/SideLink";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/Icon";
import TwitterLogo from "../images/logo.svg";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="w-72 bg-secondary flex flex-col justify-between pl-3 pr-3">
      <div className="flex flex-col">
        <div className="flex items-center justify-center twitter__logo w-12 h-12">
          <img
            src={TwitterLogo}
            alt="twitter__logo"
            className="w-7 h-7 cursor-pointer"
          />
        </div>
        <nav className="nav">
          <ul>
            {sideLinks.map(({ icon, name }) => {
              return (
                <SideLink
                  key={name}
                  name={name}
                  Icon={icon}
                  active={active}
                  handleMenuItemClick={handleMenuItemClick}
                />
              );
            })}
          </ul>
        </nav>
        <button className="text-white bg-primary shadow-lg rounded-full py-3 px-5 w-11/12 mt-2 hover:bg-blue-400">
          Tweet
        </button>
      </div>
      <div className="text-white">
        <ProfileBox />
      </div>
    </div>
  );
};

export default Sidebar;
