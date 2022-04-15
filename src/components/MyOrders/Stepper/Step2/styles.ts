import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: 2rem;
        }
    }

    form {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas: 
        "user"
        "desk"
        "qtdPeople"
        "waiter";
        gap: 1.5rem;
    }

    button svg {
        stroke-width: 4;
    }

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 110px);
        grid-template-areas: 
        "user user"
        "desk qtdPeople"
        "waiter waiter";
        gap: 1.5rem 2rem;
    }
`