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
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
    }
`

export const ActiveOrdersContainer = styled.div`
    align-self: stretch;
    
    display: flex;
    flex-direction: column;

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

    // Media Queries //

    @media(max-width: 1200px){

        margin-bottom: 1.5rem;

        .orders-container {
            flex-direction: column;
            align-items: center;
        }
    }

    @media(max-width: 800px){

        a {
            display: none;
        }
    }
`