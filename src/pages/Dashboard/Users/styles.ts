import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 15rem 1fr;
    overflow: hidden;

    background-color: var(--background);

    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 1.25rem;

        overflow: scroll;
    }

    section {
        width: 100%;

        display: grid;
        grid-template-columns: 192px 1fr;
        gap: 1.25rem;
    }
`

export const UserListStyled = styled.aside`
    width: 100%;
    height: 440px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    ul {
        height: inherit;

        display: flex;
        flex-direction: column;
        padding: 0.75rem;

        border-radius: 4px;
        box-shadow: -1px 1px 12px rgba(0, 0, 0, 0.1);
        background: var(--white);

        li {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 28px;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
            "nome botao"
            "cargo botao";
            gap: 0.5rem;
            height: 60px;

            cursor: pointer;
            
            transition: filter 0.2s;

            &:hover{
                filter: contrast(0.7)
            }

            &:hover::after{
                content:"";
                position: absolute;
                left: -1rem;
                height: 100%;
                width: 3px;
                background-color: var(--primary) ;
            }
        }

        p {
            grid-area: nome;
            font-size: 12px;
            font-weight: 700;
            text-align: left;
            padding-right: 0.5rem;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

        }

        span {
            grid-area: cargo;
            font-size: 10px;
            color: var(--secondary);
            opacity: 0.75;
        }

        button {
            grid-area: botao;
            align-self: center;
            justify-self: center;
            
            display: flex;
            justify-content: center;
            align-items:center;
            
            width: 28px;
            height: 28px;
            background: var(--primary);
            border-radius: 8px;

        }

        hr {
            opacity: 0.25;
            margin: 0.5rem 1.5rem;
        }
    }
`

export const UserInfoStyled = styled.div`
    width: 100%;
    height: 440px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    article {
        height: inherit;

        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;

        border-radius: 4px;
        box-shadow: -1px 1px 12px rgba(0, 0, 0, 0.1);
        background: var(--white);

        overflow-y: hidden;

        .user {
            display: flex;
            gap: 1.25rem;
            height: 172px;

            svg, img {
                border-radius: 25px;
                border: 4px solid rgba(69, 84, 90);
                opacity: 0.25;
                padding: 1rem;
            }
        }

        .user-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 5rem;

            & span {
                font-size: 0.8rem;
            }
        }

        .user-sales {
            height: 175px;

            display: flex;
            flex-direction: column;
            gap: 1rem;

            h2 {
                font-size: 1.25rem;
            }
        }
    }
` 

export const UserHistorySalesStyled = styled.table`
    border-collapse: collapse;

    th {
        border-bottom: 0.5px solid var(--secondary);
        padding-bottom: 0.5rem;
    }

    th, td {
        text-align: left;
        flex-wrap: wrap;
    }

    td:not(:first-of-type) {
        font-size: 0.75rem;
    }
`