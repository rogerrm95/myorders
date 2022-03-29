import styled from "styled-components";

export const Container = styled.div`
    flex: 1;

    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-color: var(--background);

    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        margin: auto;

        max-width: 1160px; /*Temporario*/
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
        gap: 1rem;
        flex-wrap: wrap;
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
    }
`