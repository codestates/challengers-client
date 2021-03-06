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
  SidebarLowerLink1,
  SidebarLowerLink2,
  SidebarLowerLink3,
  SidebarLowerLink4,
  SidebarLowerLink5,
  SidebarPage
} from "./SidebarElements";

import { connect } from 'react-redux'; // react, redux연결 
import {mapStateToProps,mapDispatchToProps} from "../../redux/components/getAndEdit_State";

// Home에서 oggle, isRight props로 전달 받는다.
const Sidebar = (props) => {
  console.log('SideBar : ', props);

  

  return (
    <SidebarContainer onClick={props.toggle} isRight={props.isRight}>
      <Icon>
        <ShutIcon onClick={props.toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* props.toggle 클릭 시 false에서 true로 바뀐 후 앞의 링크로 갈 수 있게 세팅. */}
          <SidebarUpperMenu>
            <SidebarUpperLink to="/tag" onClick = {()=>{
              console.log("Hello World");
              props.getMyChallengeList("No Tag")
              }}>Challenge List</SidebarUpperLink>

            <SidebarUpperLink to="/my-challenges" onClick={props.toggle}>
              <SidebarPage>My Page</SidebarPage>

              {/* props.toggle 클릭 시 false에서 true로 바뀐 후 앞의 링크로 갈 수 있게 세팅. */}
              <SidebarLowerMenu>
                <SidebarLowerLink1 to="/my-challenges" onClick={props.toggle}>
                  My Challenges
                </SidebarLowerLink1>
                <SidebarLowerLink2 to="/pin" onClick={props.toggle}>
                  Pin List
                </SidebarLowerLink2>
                <SidebarLowerLink3 to="/change-info" onClick={props.toggle}>
                  Change Info
                </SidebarLowerLink3>
                <SidebarLowerLink4 to="/challenge" onClick={props.toggle}>
                  Make New Challenge
                </SidebarLowerLink4>
                <SidebarLowerLink5 to="/following" onClick={props.toggle}>
                  Follower
                </SidebarLowerLink5>
              </SidebarLowerMenu>
            </SidebarUpperLink>
          </SidebarUpperMenu>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// export default Sidebar;
