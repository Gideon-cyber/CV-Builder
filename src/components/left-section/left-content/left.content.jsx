import React from "react";

import "./left.content.styles.css";

import "./Picture-frame/profile-22.jpg";

// import { PictureFrame } from "./Picture-frame/picture-frame";

export const LeftContent = () => {
  return (
    <div className="left-content">
      {/* <PictureFrame></PictureFrame> */}
      <img src="./Picture-frame/profile-22.jpg" alt="" />
    </div>
  );
};
