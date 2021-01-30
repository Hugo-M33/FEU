import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button.js";
import SendButton from "./SendButton.js";
import { v4 as uuidv4 } from 'uuid';
import Group from "./Group.js";

const StyledGroup = styled(Group)`
&:before {
        content: '${props => props.id}';
        position: absolute;
        font-size: 4.5em;
        left: 0;
        top: -4.5rem;
    }
    `
const ButtonList = ({ lists, setRecipients, key, toggleRecipient, dispatch, className }) => {
  const [sendToggle, setSendToggle] = useState(false);
  return (
    <StyledButtonList>
      {lists.map(groupe => {
        return <StyledGroup className={className} dispatch={dispatch} id={Object.keys(groupe).toString()} key={Object.keys(groupe).toString()} groupe={groupe} toggleRecipient={toggleRecipient}></StyledGroup>
      })}
    </StyledButtonList>
  );
};

const StyledButtonList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;



export default ButtonList;
