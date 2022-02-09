import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div className="App min-h-screen max-w-7xl mx-auto flex">{children}</div>
  );
};

export default Container;
