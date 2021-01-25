import React, { useState } from 'react';
import styled from 'styled-components';

// color: /*${toggle ? 'white' : '#48ACF0'}*/ '#48ACF0';
// background-color: /*${toggle ? '#48ACF0' : ''}*/ 'white';
// background: /* ${toggle ? 'green' : '#4281A4'} */ 'green';
    const StyledButton = styled.div`
        min-width: 20rem;
        min-height: 4rem;
        color: '#48ACF0';
        border: 5px solid #48ACF0;
        background: 'white';
        border-radius: 10px;
        box-shadow: 0 0 22px rgba(0,0,0,0.15);
        cursor: pointer;
        margin: 1%;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
        font-size: 2.5rem;
        transition: all 0.4s ease-out;
        &:hover {
            background: 'green';
        }
    `
const Button = ( { id, toggleRecipient, mail, classe, selected, dispatch } ) => {
    const [toggle, setToggle] = useState(selected);

    
    
    const clickHandler = () => {
        setToggle(!toggle);
        toggleRecipient(classe, mail);
        // window.open("https://webmel.u-bordeaux.fr/h/search?action=compose&to=a@b.com&subject=Bonjourcesthickel&body=Sucezmescouilles");
    }
    
    return (
        <StyledButton onClick={() => dispatch({type: 'toggle_recipient', payload: {email: mail, id: id}})}>{ id }</StyledButton>
    );
}




export default Button;