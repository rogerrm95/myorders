import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    section {
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

    /* Menu */
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
    }
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