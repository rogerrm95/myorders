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
        gap: 2rem;
        padding: 2rem;
    }

    section {
        height: 100%;
        display: flex;
        margin-bottom: 2rem;
        gap: 2rem;
    }

    .orders-id {
        width: 10rem;
        max-width: 125px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            
            padding: 1rem 0;
            border-radius: 4px;

            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            background: var(--white);
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        li {
            font-weight: 700;
            padding: 1rem 1.5rem;
            border-radius: 25%;
            
            cursor: pointer;
            transition: background-color 0.25s;

            &:hover {
                background-color: aliceblue; // Temporário
            }
        }
    }

    .order {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p { 
                font-size: 0.75rem;
                align-self: flex-end;
            }
        }

        h1 {
            font-size: 2rem;
        }

        .order-details {
            flex: 1;
            display: flex;
            
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            border-left: 8px solid orange; // Temporário //
            background: var(--white);
        }
    }
`