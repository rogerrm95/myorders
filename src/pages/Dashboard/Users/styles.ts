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

    /* SCROLL-BAR */
    & ::-webkit-scrollbar {
        width: 4px;
    }

    & ::-webkit-scrollbar-track {
        background: var(--placeholder);
    }
    
    & ::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 8px;
    }

    & ::-webkit-scrollbar-thumb:hover {
        background: #040404; 
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

        overflow-y: auto;

        li {
            position: relative;

            display: grid;
            grid-template-columns: 1fr 28px;
            grid-template-rows: 1fr 16px;
            grid-template-areas:
            "nome botao"
            "cargo botao";

            height: 100%;
            max-height: 48px;
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
                width: 8px;
                background-color: var(--primary);
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

            z-index: 9999;
        }

        span {
            grid-area: cargo;
            align-self: flex-end;

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
            margin: 0.5rem 1rem;
        }
    }

    .loading {
        flex: 1;
        align-self: center;
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
            flex: 1;
            display: flex;
            justify-content: space-between;

            svg, img {
                border-radius: 25px;
                border: 4px solid rgba(69, 84, 90);
                opacity: 0.25;
                padding: 1rem;
            }
        }

        .user-info {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(4, 32px);
            -webkit-column-gap: 10rem;
            column-gap: 10rem;

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
    width: 100%;  

    thead th {
        border-bottom: 0.5px solid var(--secondary);
        padding: 0.5rem;
        font-size: 0.85rem;
    }
    
    tbody td {
        padding: 0.5rem;
    }

    th, td {
        text-align: center;
    }

    tr {
        td:nth-child(1), th:nth-child(1){
            width: 10%;
        }

        td:nth-child(1) {
            font-size: 0.85rem;
        }

        td:nth-child(2), th:nth-child(2){
            width: 65%;
            text-align: left;
        }

        td:nth-child(2) {
            line-height: 1rem;
            font-size: 0.65rem;
        }

        td:nth-child(3), td:nth-child(4) {
            font-size: 0.65rem;
            width: 10%;
        }
    }
`