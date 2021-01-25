import React, { useState } from 'react';
import styled from 'styled-components';



const Button = ({feu} ) => {
    
    const StyledButton = styled.div`
        width: 30rem;
        height: 4rem;
        background-color: blue;
        border-radius: 10px;
        box-shadow: 0 0 22px rgba(0,0,0,0.15);
        cursor: pointer;
        margin: 1%;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
        font-size: 3.5rem;
        transition: all 0.4s ease-out;
        &:hover {
            background: white;
            color: blue;
            border: 2px solid blue;
        }
    `
    
    return (
        <StyledButton onClick={feu}>FEU !</StyledButton>
    );
}




export default Button;