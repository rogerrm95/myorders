import styled from "styled-components";

export const List = styled.div`
    > div {
        display: grid;
        grid-template-columns: 5fr 1fr 1fr;
        gap: 5rem;
        align-items: center;
        
        height: 4rem;
        padding: 0 1rem;

        background-color: var(--primary);
        border-radius: 8px;

        h2 {
            color: var(--white);
            font-size: 1rem;

            &:not(:first-child){
                text-align: center;
            }
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        min-height: 20rem;

        list-style: none;
        border: 1px solid var(--gray-light);
        border-top: none;
        border-radius: 8px;
    }
`
export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 7fr 2fr 1fr;
    gap: 5rem;
    padding: 1.5rem 2rem 1.5rem 1rem;
    align-items: center;
    position: relative;

    background: var(--white);
    
    div {

        p {
            font-size: 1rem;
        }

        span {
            font-size: 0.75rem;
            text-transform: capitalize;
            color: var(--red-250);
        }
    }

    > p {
        color: var(--green-500);
        font-weight: 700;
        text-align: center;
    }

    button {
        background: none;
        transition: filter 0.3s;
        
        &:hover:not(:disabled) {
            filter: brightness(0.8);
        }

        &:disabled{
            cursor: default;
        }
    }

    ::before {
        content: "";
        height: 2px;
        width: 75%;
        background-color: #C4C4C4;
        position: absolute;
        bottom: 0;
        left: 10%;
    }

    &.done {    
        p, span {
            color: var(--grey-light);
        }
    }
`