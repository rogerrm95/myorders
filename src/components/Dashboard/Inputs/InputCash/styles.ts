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

    .input-cash {
        height: 2rem;
        padding: 0.2rem 0.5rem;
        background: var(--background);
        border: 1px solid var(--input-border);
        border-radius: 4px;

        display: flex;
        align-items: center;

        span {
            margin-right: 0.25rem;
            padding-right: 0.25rem;
            color: var(--green-500);
            border-right: 1px solid var(--input-border);
        }

        input {
            width: 100%;
            caret-color: var(--primary);
            background: none;

            &::placeholder {
                color: var(--placeholder);
                font: 1rem normal Roboto, sans-serif;
            }
        }
    }
`