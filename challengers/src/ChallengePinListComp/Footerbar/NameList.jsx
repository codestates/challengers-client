import React from "react";
import { NameListContainer } from "./NameListElements";

// Footer에서 props로 name을 전달
const NameList = ({ name }) => {
  return <NameListContainer>Team Challenges : {name}</NameListContainer>;
};

export default NameList;
