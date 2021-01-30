import React from 'react';
import styled from 'styled-components';
import { ImCross } from 'react-icons/im';

const StyledEtiquette = styled.div`
height: 1rem;
width: fit-content;
padding: 0.4rem;
background: white;
display: flex;
border-radius: 20px;
align-items: center;
`

const StyledIconContainer = styled.div`
padding:2px 5px;
display: inline;
`

const Etiquette = ({id, mail, dispatch}) => {
    return (
        <StyledEtiquette>
        <StyledIconContainer>
        <ImCross onClick={() => dispatch({type: 'toggle_recipient', payload: {email: mail, id: id}})}/></StyledIconContainer>
            {id}
        </StyledEtiquette>
    )
}

export default Etiquette
