import React from "react";
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
function Buttonbox({ loginClick, backClick }) {
  console.log({ loginClick, backClick });
  return (
    <div className="button-box">
      <button className="login" type="button" onClick={loginClick}>
        Login
      </button>
      <button className="backward" type="button" onClick={backClick}>
        Back
      </button>
    </div>
  );
}

export default Buttonbox;
