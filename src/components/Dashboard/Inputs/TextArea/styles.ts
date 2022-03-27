import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    gap: 0.5rem;

    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        color: var(--primary);
        font-weight: 700;
        font-size: 1.15rem;

        & :last-child {
            color: var(--red-500);
            font-size: 0.75rem;
            text-align: right;
            align-self: flex-end;
        }
    }

    textarea {
        height: 10rem;
        padding: 0.5rem;
        resize: none;
        
        caret-color: var(--primary);
        background: var(--background);
        border: 1px solid var(--input-border);
        border-radius: 4px;
        line-height: 1.5rem;
        font-size: 0.9rem;

        &::placeholder{
            color: var(--secondary);
            opacity: 0.5;
        }
    }
`