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
`

export const Order = styled.div`
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

    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border-left: 8px solid orange; // Temporário //
        background: var(--white);
    }    
`

export const Details = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;

    padding: 1rem;
    border-bottom: 1px solid orange;   
    
    .details-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            font-size: 2rem;
            color: orange; // Temporário //
            position: relative;

            button {
                background: transparent;
                margin-left: 0.5rem;
                position: absolute;
                top: 20%;
            }
        }

        p {
            font-size: 1.25rem;
        }

        span {
            margin-top: auto;
            font-size: 0.85rem;
        }
    }
    .details-right {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            font-size: 1.25rem;
            text-align: right;

            &:first-of-type {
                color: var(--green-500);
            }
        }

        button {
            margin-top: auto;

            display: flex;
            justify-content: center;
            align-items: center;

            height: 3rem;
            padding: 1rem;
            font: 700 1.25rem 'Baloo Thambi 2', cursive;
            letter-spacing: 0.05rem;

            border-radius: 8px;
            color: var(--white);
            background: var(--green-250);
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.9);
            }

            svg {
                margin-left: 0.5rem;
            }
        }
    }
`

export const Items = styled.div`
    flex: 1;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    
    .items-head {
        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 1.5rem;
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.25rem 1rem;

            font-size: 0.75rem;
            border-radius: 50px;
            color: var(--white);
            background: orange; // Temporário //
        }
    }

    .items-list {
        padding: 0.5rem 1rem;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        li {
            background: #FCFCFC;
            box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
        }
    }
`