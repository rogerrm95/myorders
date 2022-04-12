import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    background:  rgba(0,0,0,0.75);
    left:  0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media(min-width: 768px){
        display: none;
    }
`

export const Modal = styled.div`
    background: var(--primary);
    height: 100%;
    max-width: 15rem;
    flex: 1;
`