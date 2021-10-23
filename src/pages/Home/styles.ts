import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;

    section {
        flex: 2;

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1.5rem;

        h1, p {
            font-family: Rambla, sans-serif;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1.5rem;
            line-height: 2rem;
            color: var(--secondary);
        }
    }

    main {
        flex:5;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        margin: 0 1.5rem;
        padding: 2rem 1.5rem 1.5rem 1.5rem;

        background-color: var(--white);
        border-radius: 25px 25px 0 0;
        filter: drop-shadow(0px -1px 25px rgba(0, 0, 0, 0.1));

        a:not(:first-child){
            margin-top: 1rem;
        }
    }
`