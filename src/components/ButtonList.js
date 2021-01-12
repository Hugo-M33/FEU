import React from "react";
import styled from 'styled-components';
import Button from './Button.js'

const S1C = ["hugo.martin.3@etu.u-bordeaux.fr", "alalexandre@u-bordeaux.fr"];

const ButtonList = () => {
    return (
        <StyledButtonList>
            <Button classe="S1A" listeEmail={S1C}/>
            <Button classe="S1B" />
            <Button classe="S1C" />
            <Button classe="S1D" />
        </StyledButtonList>
    );
}

const StyledButtonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`



export default ButtonList;