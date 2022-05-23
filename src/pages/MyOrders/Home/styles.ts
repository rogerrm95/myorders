import styled from "styled-components";
import Background from '../../../assets/restaurant-home.png'
import Blob from '../../../assets/blob.svg'

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;

    display: flex;
    overflow: hidden;


    .banner {
        flex: 1;

        display: flex;
        align-items: flex-end;

        background: transparent url(${Background}) no-repeat right;
        background-size: cover;

        article {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            height: 380px;
            width: 100%;
            max-width: 440px;
            padding: 0.75rem;

            background: transparent url(${Blob}) no-repeat right;
            background-size: cover; 
        }

        h2, span {
            font-family: Rambla, sans-serif;
            color: var(--white);
            user-select: none;
        }

        h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;

            &::first-letter{
                color: var(--red-500);
                font-size: 6rem;
            }

            svg {
                margin-bottom: -2px;
                margin-left: 1rem;
            }
        }

        span {
            max-width: 75%;
            margin-top: 2.25rem;
            font-size: 1.25rem;
        }

        @media(max-width:900px){
            & {
                display: none;
            }
        }
    }

    .home {
        width: 520px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        article {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 1rem;
            height: 6rem;

            padding: 1.5rem;
            user-select: none;

            h1 {
                color: var(--primary);
                font-size: 2.25rem;
                max-width: 75%;
            }

            @media (min-width: 900px) {
                h1 {
                  display: none;
                }

                p {
                    font-size: 1.25rem;
                    font-weight: 700;
                }
            }

            @media (max-width: 900px) {
                p br {
                        display: none;    
                }
            }
        }

        & > div {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin: auto;
            width: 440px;

            background-color: var(--white);
            border-radius: 25px 25px 0 0;
            filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.15));
        }

        .menu-group {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 2rem;

            padding: 1rem 1.5rem 1.5rem 1.5rem;
        }

        @media (max-width: 900px) {
            & {
                flex: 1;
            }
        }
    }

/*     section {
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

        @media (max-width: 768px){
            align-items: flex-start;

            & > img {
                display: none;
            }
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 0 1.5rem;

        background-color: var(--white);
        border-radius: 25px 25px 0 0;
        filter: drop-shadow(0px -1px 25px rgba(0, 0, 0, 0.1));
    }

    .menu-group {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2rem;

        padding: 1rem 1.5rem 1.5rem 1.5rem;
    }

    @media(max-width:768px){
        .menu-group {
            margin: auto 0;
        }
    } */
`

type NotificationBoxProps = {
    hasOrders: boolean
}

export const NotificationBox = styled.div<NotificationBoxProps>`
    background-color: ${props => props.hasOrders ? "var(--red-500)" : "var(--primary)"};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: inherit;

    span {
        color: ${props => props.hasOrders ? "#FFF" : "#95A3A9"};
        font-weight: ${props => props.hasOrders ? "700" : "500"};
        font-size: 0.85rem;
        margin-left: 1rem;
    }
`