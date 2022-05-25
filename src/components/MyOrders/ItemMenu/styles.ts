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

    // Mobile //
    @media (max-width: 400px) {
        & {
            grid-template-columns: 1fr 32px;
            grid-template-rows: 80px;
        }
    }
`

export const Labels = styled.div`
    grid-area: textos;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    transition: color 0.3s;

    // Mobile //
    @media (max-width: 400px) {
        h2 {
            font-size: 1.25rem;
        }

        p {
            font-size: 0.85rem;
        }
    }
`

export const IconBox = styled.div`
    grid-area: icone;

    display: flex;
    justify-content: center;
    align-items: center;

    // Mobile //
    @media (max-width: 400px) {
        img {
            width: 28px;
        }
    }
`
