import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    gap: 0.5rem;

    span {
        color: var(--primary);
        font-weight: 700;
        font-size: 1.15rem;
    }

    input {
        height: 2rem;
        padding: 0.2rem 0.5rem;
        background: var(--background);
        border: 1px solid var(--input-border);
        border-radius: 4px;
        caret-color: var(--primary);

        &::placeholder {
            color: var(--secondary);
            opacity: 0.5;
            font: 1rem normal Roboto, sans-serif;
        }
    }
`