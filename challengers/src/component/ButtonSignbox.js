import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function ButtonSignbox(props) {
    console.log(props)
    return (
        <div className="button-box">
            <button 
                className="sign"
                type="submit"
                onClick={props.submitClick}>
            Submit
            </button>
            <button 
                className="cancel"
                type="button"
                onClick={props.cancelClick}>
            Cancel
            </button>
        </div>
    );
}

export default ButtonSignbox;