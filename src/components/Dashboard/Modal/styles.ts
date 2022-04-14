import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    background:  rgba(0,0,0,0.75);
    left:  0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;

`
export const Modal = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 1.5rem 2rem;

    border-radius: 8px;
    background: var(--white);

    position: relative;
    display: flex;
    justify-content: center;    

    .modal-header {
        width: 50%;
        position: absolute;
        top: -1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.25rem;

        background: var(--primary);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 25px 25px;
        
        & h2 {
            color: var(--white);
            font-weight: 500;
            font-size: 1.25rem;
        }
    }

    .modal-section {
        width: 100%;
        padding: 1.5rem 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`