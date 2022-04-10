import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    width: 100%;
    gap: 0.5rem;

    span {
        color: var(--primary);
        font-weight: 700;
        font-size: 1.15rem;
    }

    .input-date {
        height: 2rem;
        padding: 0.2rem 0.5rem;
        background: var(--background);
        border: 1px solid var(--input-border);
        border-radius: 4px;

        display: flex;
        align-items: center;

        svg {
            margin-right: 0.5rem;
            padding-right: 0.5rem;
            color: var(--secondary);
        }

        input {
            width: 100%;
            caret-color: var(--primary);
            background: none;

            &::placeholder {
                color: var(--secondary);
                opacity: 0.5;
                font: 1rem normal Roboto, sans-serif;
            }
        }
    }
`