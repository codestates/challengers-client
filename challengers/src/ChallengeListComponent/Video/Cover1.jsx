import React from "react";
import Play from "../../videos/video2.mp4";
import { CoverContainer, CoverVideoArea, VideoPlay } from "./CoverElements";

const Cover1 = () => {
  return (
    <CoverContainer>
      <CoverVideoArea>
        <VideoPlay autoPlay loop muted src={Play} type="video/mp4" />
      </CoverVideoArea>
    </CoverContainer>
  );
};
export default Cover1;
