import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 15rem 1fr;

    background-color: var(--background);
    overflow: hidden;
    
    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        margin: auto;

        @media(max-width: 1100px){
            overflow: scroll;

            /* SCROLL-BAR */
            ::-webkit-scrollbar {
                width: 0.75rem;
            }

            ::-webkit-scrollbar-track {
                background: #f1f1f1; 
            }
            
            ::-webkit-scrollbar-thumb {
                background: var(--primary);
                border-radius: 16px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #040404; 
            }
        }
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
        flex-direction: row;
        flex-wrap: nowrap;
        flex: 1;
        gap: 2rem;
    }

    // Media Queries //
    @media(max-width: 1100px){

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