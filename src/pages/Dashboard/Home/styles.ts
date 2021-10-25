import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 232px 1fr;
    grid-template-rows: 210px 1fr;
    grid-template-areas: 
    "menu info"
    "menu content";

    width: 100%;
    height: 100%;
    background-color: var(--background);

    aside {
        grid-area: menu;
    }

    > header, main {
        margin: 2.5rem 2rem 0 1.5rem;
    }

    > header {
        grid-area: info;

    }

    main {
        grid-area: content;
        margin: auto;
        // Adequar ao Grid //
    }
`

export const ActiveOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .top-label {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: var(--title);
        }

        svg {
            margin-left: 1rem;
        }

        a {
            color: var(--blue-500);
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: underline;
        }
    }

    .orders-container {
        display: flex;
        flex: 1;
        gap: 2rem
    }
`