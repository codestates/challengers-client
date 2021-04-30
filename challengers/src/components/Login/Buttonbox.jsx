import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function Buttonbox(props) {
    console.log(props)
    return (
        <div className="button-box">
            <button 
                className="login"
                type="button"
                onClick={props.loginClick}>
            Login
            </button>
            <button 
                className="backward"
                type="button"
                onClick={props.backClick}>
            Back
            </button>
        </div>
    );
}

export default Buttonbox;