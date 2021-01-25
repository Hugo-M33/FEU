import React, { useState }from "react";
import styled from 'styled-components';

const MailBodyInput = ({bodyInput, setBodyInput}) => {
    

    const userInputHandler = (e) => {
        setBodyInput(e.target.value);
    }
    return (
        <StyledTextInput value={bodyInput} onChange={e => userInputHandler(e)} placeholder="Corps du mail"/>
    );
}

const StyledTextInput = styled.textarea`
    width: 50vw;
    height: 20vh;
    margin: 1rem 0;
    border-radius: 10px;
    border: none;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.2);
`

export default MailBodyInput;