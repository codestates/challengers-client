import React from "react";
import {
  SidebarContainer,
  Icon,
  ShutIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarUpperMenu,
  SidebarUpperLink,
  SidebarLowerMenu,
  SidebarLowerLink,
  SidebarPage
} from "./SidebarElements";
// Home에서 toggle, isRight props로 전달 받는다.
const Sidebar = ({ toggle, isRight }) => {
  return (
    <SidebarContainer onClick={toggle} isRight={isRight}>
      <Icon>
        <ShutIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* toggle 클릭 시 false에서 true로 바뀐 후 앞의 링크로 갈 수 있게 세팅. */}
          <SidebarUpperMenu>
            <SidebarUpperLink to="/challengeList" onClick={toggle}>
              Challenge List
            </SidebarUpperLink>
            <SidebarUpperLink to="/MyPage" onClick={toggle}>
              <SidebarPage>My Page</SidebarPage>
              {/* toggle 클릭 시 false에서 true로 바뀐 후 앞의 링크로 갈 수 있게 세팅. */}
              <SidebarLowerMenu>
                <SidebarLowerLink to="/MyChallenges" onClick={toggle}>
                  My Challenges
                </SidebarLowerLink>
                <SidebarLowerLink to="/PinList" onClick={toggle}>
                  Pin List
                </SidebarLowerLink>
                <SidebarLowerLink to="/ChangeInfo" onClick={toggle}>
                  Change Info
                </SidebarLowerLink>
                <SidebarLowerLink to="/MakeNewChallenge" onClick={toggle}>
                  Make New Chat
                </SidebarLowerLink>
                <SidebarLowerLink to="/Follower" onClick={toggle}>
                  Follower
                </SidebarLowerLink>
              </SidebarLowerMenu>
            </SidebarUpperLink>
          </SidebarUpperMenu>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
