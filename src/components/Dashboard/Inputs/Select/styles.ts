import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    & > span {
        color: var(--primary);
        font-weight: 700;
        font-size: 1.15rem;
    }

    .select-field {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 2rem;
        padding: 0.2rem 0.5rem;
        background: var(--background);
        border: 1px solid var(--input-border);
        border-radius: 4px;

        display: flex;
        align-items: center;

        transition: filter 0.2s ;

        span {
            font: 1rem 500 'Roboto', sans-serif;
            color: var(--secondary);
            opacity: 0.75;
        }

        svg {
            transition: color 0.2s ;
        }

        &:hover svg {
            color: var(--red-500);
        }

        &:hover {
            filter: brightness(0.95) ;
        }
    }
`