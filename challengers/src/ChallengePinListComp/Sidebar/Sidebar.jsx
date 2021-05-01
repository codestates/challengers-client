import React from "react";
import {
  SidebarContainer,
  Icon,
  ShutIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarUpperMenu,
  SidebarUpperLink1,
  SidebarUpperLink2,
  SidebarLowerMenu,
  SidebarLowerLink1,
  SidebarLowerLink2,
  SidebarLowerLink3,
  SidebarLowerLink4,
  SidebarLowerLink5,
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
            <SidebarUpperLink1 to="/tag" onClick={toggle}>
              Challenge List
            </SidebarUpperLink1>

            <SidebarUpperLink2 to="/my-challenges" onClick={toggle}>
              <SidebarPage>My Page</SidebarPage>

              {/* toggle 클릭 시 false에서 true로 바뀐 후 앞의 링크로 갈 수 있게 세팅. */}
              <SidebarLowerMenu>
                <SidebarLowerLink1 to="/my-challenges" onClick={toggle}>
                  My Challenges
                </SidebarLowerLink1>
                <SidebarLowerLink2 to="/pin" onClick={toggle}>
                  Pin List
                </SidebarLowerLink2>
                <SidebarLowerLink3 to="/change-info" onClick={toggle}>
                  Change Info
                </SidebarLowerLink3>
                <SidebarLowerLink4 to="/challenge" onClick={toggle}>
                  Make New Challenge
                </SidebarLowerLink4>
                <SidebarLowerLink5 to="/following" onClick={toggle}>
                  Follower
                </SidebarLowerLink5>
              </SidebarLowerMenu>
            </SidebarUpperLink2>
          </SidebarUpperMenu>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
