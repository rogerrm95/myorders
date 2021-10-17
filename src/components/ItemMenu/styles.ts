import styled from "styled-components";

export const Box = styled.a`
    display: grid;
    grid-template-columns: 100px 1fr 64px;
    grid-template-rows: 100px;
    grid-template-areas: 
    "card textos icone"
    "card textos icone";

    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`

export const Card = styled.div`
    grid-area: card;
    height: 100%;

    display:  flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    margin-right: 0.5rem;
    background: var(--primary);
    
    
    img {
        max-width: 64px;
    } 
    
`

export const Labels = styled.div`
    grid-area: textos;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 1.5rem;

    transition: color 0.3s;
`

export const IconBox = styled.div`
    grid-area: icone;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;

`
