import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    position: relative;

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
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            color: var(--secondary);
            opacity: 0.5;
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

    .options {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        
        position: absolute;
        right: 0;
        top: 4.5rem;
        width: 100%;
        z-index: 999;

        background-color: var(--background);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 8px 8px;

        li {
            height: 2rem;
            display: flex;
            align-items: center;
            padding-left: 0.5rem;

            cursor: pointer;

            :hover{
                color: var(--white);
                background: var(--primary);
            }
        }
    }
`