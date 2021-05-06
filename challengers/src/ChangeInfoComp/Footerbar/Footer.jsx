import React from "react";
import { image } from "../../data/ImageData";
// Get teamName data
import { teamName } from "../../data/teamData";
import NameList from "./NameList";
import {
  FooterContainer,
  FooterTeamInfo,
  FooterTeamList,
  FooterLast,
  FooterCopyRight,
  FooterSnsImg,
  FooterImgList,
  Img
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTeamInfo>
        {/* 팀원 이름을 mapping하여 표시하기 위한 코드  */}
        <FooterTeamList>
          {/* console로 찍을 시 출력값은 id와 name이 객체 형태로 display된다. */}
          {teamName.map((person) => {
            return <NameList key={person.id} name={person.name} />;
          })}
        </FooterTeamList>
      </FooterTeamInfo>
      <FooterLast>
        <FooterCopyRight>© Challengers</FooterCopyRight>
      </FooterLast>
      <FooterSnsImg>
        {/*이미지를 mapping하여 표시하기 위한 코드  */}
        <FooterImgList>
          {image.map((img) => {
            return <Img key={img.id} src={img.img} />;
          })}
        </FooterImgList>
      </FooterSnsImg>
    </FooterContainer>
  );
};

export default Footer;
