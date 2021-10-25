import styled from "styled-components";

export const Box = styled.div`
    width: inherit;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;

    form {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 5rem 1fr 1fr;
        gap: 1.5rem;
        grid-template-areas:
        "food food"
        "obs unit"
        "button button";

        button {
            grid-area: button;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
        }
    }

    // Botões //
    > div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
    }
`

export const Summary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0 0.5rem 0;

    h2:last-child{
        color:var(--blue-500);
    }
`

export const List = styled.div`
    > div {
        display: grid;
        grid-template-columns: 5fr 1fr 1fr;
        gap: 5rem;
        align-items: center;
        
        height: 4rem;
        padding: 0 2rem;

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

        margin-top: -0.3rem;
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
    padding: 1.5rem 2rem;
    align-items: center;
    position: relative;

    background: var(--white);
    
    div {

        p {
            font-size: 1rem;
            font-weight: 700;
        }

        span {
            font-size: 0.75rem;
        }
    }

    > p {
        color: var(--green-750);
        font-weight: 700;
        text-align: center;
    }

    button {
        background: none;
    }

    :hover{
        filter: brightness(0.95)
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


`