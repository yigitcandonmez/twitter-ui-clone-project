import React from "react";

type SideLinkProps = {
  name: string;
  Icon: React.FC;
  active: string;
  handleMenuItemClick: (name: string) => void;
};

const SideLink = ({
  name,
  Icon,
  active,
  handleMenuItemClick,
}: SideLinkProps) => {
  const isActive = active === name;
  return (
    <li
      onClick={() => {
        handleMenuItemClick(name);
      }}
      className="group"
    >
      <a href={name.toLowerCase()} className="cursor-pointer block ">
        <div className="inline-block group-hover:bg-opacity-30 group-hover:bg-zinc-600 rounded-full transition ease-in-out delay-75">
          <div
            className={`flex  group-hover:rounded-full text-white items-center pl-3 pr-5 py-4 ${
              isActive ? "font-medium stroke-2" : ""
            }`}
          >
            <span>
              <Icon />
            </span>
            <span className="ml-4 text-xl">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
