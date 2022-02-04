import React from "react";

const SideLink = ({ name, Icon }) => {
  return (
    <li>
      <a href={`/${name.toLowerCase()}`}>
        <div className="flex text-white items-center pl-3 pr-8 py-4">
          <span>
            <Icon />
          </span>
          <span className="ml-4 font-medium text-lg">{name}</span>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
