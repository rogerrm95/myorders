import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 4rem;
    width: 100%;
    border-radius: 8px;
    margin-top: 1.5rem;
    background-color: var(--red-500);
    transition: filter 0.3s;

    span {
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);

        svg {
            margin-left: 0.5rem;
        }
    }

    &:hover {
        filter: brightness(0.9)
    }
`