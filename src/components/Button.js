import React, { useState } from 'react';
import styled from 'styled-components';




const Button = ( { listeEmail, classe } ) => {
    const [toggle, setToggle] = useState(false);
    
    const clickHandler = () => {
        setToggle(!toggle);
        console.log(classe + " " + !toggle);
        window.open("https://webmel.u-bordeaux.fr/h/search?action=compose&to=a@b.com&subject=hello%20world&body=test");
    }
    const StyledButton = styled.div`
    width: 20rem;
    height: 4rem;
    background-color: ${toggle ? 'green' : 'white'};
    border-radius: 10px;
    box-shadow: 0 0 22px rgba(0,0,0,0.15);
    cursor: pointer;
    margin: 1%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3.5rem;
    &:hover {
        background: ${toggle ? 'green' : '#4281A4'};
    }
`
    return (
        <StyledButton onClick={() => clickHandler()}>{ classe }</StyledButton>
    );
}


export default Button;