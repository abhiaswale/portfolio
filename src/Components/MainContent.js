import React from "react";
import MyWork from "./MyWork/MyWork";

const MainContent = () => {
  return (
    <div>
      <div>
        <h1>
          Hi there! I'm Abhishek <br /> A Front End Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <h1>My Work</h1>
        <MyWork />
      </div>
    </div>
  );
};

export default MainContent;
