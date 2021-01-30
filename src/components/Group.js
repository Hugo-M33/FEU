import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { ImCross } from 'react-icons/im'

const StyledGroup = styled.div`
min-height: 3px;
width: 80vw;
position: relative;
border: 3px solid white;
margin: 5vh 0;
background-color: white;
border-radius: 10px;
color: 'black';
display: flex;
flex-wrap: wrap;
`

const StyledButton = styled(Button)`
background-color: '${props => props.selected ? 'blue' : 'white'}';
`

const IconContainer = styled.div`
position: absolute;
right: 10px;
top: 10px;
z-index: 999;
`

const Group = ({ id, groupe, toggleRecipient, dispatch, className }) => {
    const [toggle, setToggle] = useState(false);


    return (
        <StyledGroup onClick={() => toggle ? '' : setToggle(true)} className={className}>
            {toggle ? <IconContainer onClick={() => setToggle(false)}><ImCross  size={32}/></IconContainer> : ''}
            {toggle ? groupe[id].map(element => {
                return <Button dispatch={dispatch} classe={id} id={element.id} key={element.id} toggleRecipient={toggleRecipient} mail={element.mail} selected={element.selected}></Button>
            }) : ''}
        </StyledGroup>
    )
}

export default Group
