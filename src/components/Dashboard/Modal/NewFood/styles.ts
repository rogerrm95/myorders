import styled from "styled-components";

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    
    .third-line{
        display: flex;
        justify-content: center;
    }
`

export const ButtonGroup = styled.div`
    align-self: center;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 75%;

    span {
        font-size: 1.25rem;
    }
`

export const XButton = styled.button`
    position: absolute;
    right: 2rem;
    top: 1rem;
    place-items: center;

    border-radius: 4px;
    background: var(--primary);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s ease;

    svg {
        color: var(--white);
    }

    &:hover{
        opacity: 0.5;
    }
`