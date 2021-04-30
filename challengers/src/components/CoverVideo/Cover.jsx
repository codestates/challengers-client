import React from "react";
import Video from "../../videos/video.mp4";
import {
  CoverContainer,
  CoverVideoArea,
  CoverText,
  Cover1,
  CoverP,
  VideoPlay
} from "./CoverElements";

const Cover = () => {
  return (
    <CoverContainer>
      <CoverVideoArea>
        {/*video가 자동으로 실행될 수 있기위한 코드 */}
        <VideoPlay autoPlay loop muted src={Video} type="video/mp4" />
      </CoverVideoArea>
      {/* text area 코드 */}
      <CoverText>
        <Cover1> CHALLENGE IS THE REASON FOR MY LIFE </Cover1>
        <CoverP> Challenge makes impossible to possible </CoverP>
      </CoverText>
    </CoverContainer>
  );
};
export default Cover;
