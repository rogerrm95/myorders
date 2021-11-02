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
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 110px);
        grid-template-areas: 
        "user user"
        "desk qtdPeople"
        "waiter waiter";
    }
`