import React from "react";
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function ButtonSignbox({ submitClick, cancelClick }) {
  console.log({ submitClick, cancelClick });
  return (
    <div className="button-box">
      <button className="sign" type="submit" onClick={submitClick}>
        Submit
      </button>
      <button className="cancel" type="button" onClick={cancelClick}>
        Cancel
      </button>
    </div>
  );
}

export default ButtonSignbox;
