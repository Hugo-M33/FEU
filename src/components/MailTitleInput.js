import React, { useState }from "react";
import styled from 'styled-components';

const MailTitleInput = ({setTitleInput, titleInput}) => {

    const userInputHandler = (e) => {
        setTitleInput(e.target.value);
    }
    return (
        <StyledTextInput value={titleInput} onChange={e => userInputHandler(e)} placeholder="Titre du mail"/>
    );
}

const StyledTextInput = styled.textarea`
    width: 50vw;
    height: 5vh;
    margin: 1rem 0;
    border-radius: 10px;
    border: none;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.2);
`

export default MailTitleInput;