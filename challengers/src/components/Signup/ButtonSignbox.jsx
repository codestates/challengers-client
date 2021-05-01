import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import {
    BtnboxDiv,
    SignupBtn,
    CancelBtn
} from './ButtonsignboxElements';

function ButtonSignbox(props) {
    console.log(props)
    return (
        <BtnboxDiv>
            <SignupBtn
                type="submit"
                onClick={props.submitClick}>
            Submit
            </SignupBtn>
            <CancelBtn 
                type="button"
                onClick={props.cancelClick}>
            Cancel
            </CancelBtn>
        </BtnboxDiv>
    );
}

export default ButtonSignbox;