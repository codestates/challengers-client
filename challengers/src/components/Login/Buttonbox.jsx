import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import {
    ButtonBox,
    Login,
    Backward,
    LoginIcon,
    BackIcon
} from './ButtonboxElements';

function Buttonbox({loginClick, backClick}) {
    console.log("버튼", {loginClick}, {backClick})
    return (
        <>
        <ButtonBox>
            <Login 
                type="button"
                onClick={loginClick}>
            Login
            </Login>
            <Backward 
                type="button"
                onClick={backClick}>
            Back
            </Backward>
        </ButtonBox>
        </>
    );
}

export default Buttonbox;