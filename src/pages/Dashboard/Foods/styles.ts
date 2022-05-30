import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 15rem 1fr;
    overflow: hidden auto;

    background-color: var(--background);

    main {
        height: 100%;
        max-width: 1260px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        margin: auto;
    }

    @media(max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 5rem 1fr;
    }
`

export const Categories = styled.section`
    align-self: flex-start;
    width: 100%;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    ul {
        width: 100% ;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
`

export const FoodList = styled.section`
    align-self: flex-start;
    width: 100%;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 2rem;
        }

        button {
            align-self: flex-end;
            color: var(--green-250);
            font-size: 0.9rem;
        }

        @media(max-width: 768px){
            button {
                font-size: 1.25rem;
            }
        }
    }
`