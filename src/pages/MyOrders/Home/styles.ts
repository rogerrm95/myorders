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

    // Menu - Opções //
    main {
        flex:5;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 0 1.5rem;
        padding: 2rem 1.5rem 1.5rem 1.5rem;
        gap: 2rem;

        background-color: var(--white);
        border-radius: 25px 25px 0 0;
        filter: drop-shadow(0px -1px 25px rgba(0, 0, 0, 0.1));
    }
`

export const NotificationBox = styled.div`
    //background: var(--placeholder);
    position: relative;


    flex: 1;
    display: flex;
    flex-direction: column;
    
    
    hr {
        height: 2px;
        background: var(--red-500);
        border: none;
    }

    // Indicador //
    &::after{
        content: '';
        position: absolute;
        right: 50%;
        top: 0px;
        width: 0;
        height: 0;

        border-style: solid;
        border-width: 16px 16px 0 16px;
        border-color:var(--red-500) transparent transparent transparent;
    }

    .info {
        height: 9rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;

        p {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;

            span {
                font-size: 4rem;
                font-weight: bold;
            }

            img {
                margin-top: -0.5rem;
            }
        }
    }

    .warning {
        display: flex;
        justify-content: center;
        align-items: center;

        padding-bottom: 1rem;
        
        svg {
            margin-right: 1rem;
        }
    }
`