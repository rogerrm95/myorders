import styled from "styled-components";

export const Box = styled.a`
    display: grid;
    grid-template-columns: 1fr 64px;
    grid-template-rows: 100px;
    grid-template-areas: 
    "textos icone"
    "textos icone";

    padding: 0 1rem;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`

export const Labels = styled.div`
    grid-area: textos;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    transition: color 0.3s;
`

export const IconBox = styled.div`
    grid-area: icone;

    display: flex;
    justify-content: center;
    align-items: center;
`
