import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow: auto;
    
    table {
        width: 100%;
        border-collapse: collapse;
    }

    td, th {
        padding: 1rem 0;
        border-bottom: 1px solid var(--primary) ;
        text-align: left;
        line-height: 1.25rem;
    }

    th {
        height: 32px;
        font-size: 0.9rem;

        &:nth-child(4), &:nth-child(5){
            text-align: center;
        }
    }

    td {
        font-size: 0.8rem;
        
        /* Nome */
        &:nth-child(1){
            width: 15%;
        }

        /* Descrição */
        &:nth-child(2){
            width: 40%;
            font-size: 0.7rem;

            span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 1.12rem;
            }
        }

        /* Preço */
        &:nth-child(3){
            width: 15%;
        }

        /* Status */
        &:nth-child(4){
            width: 20%;
            font-size: 0.75rem;
            text-align: center;
        }

        /* Ações */
        &:nth-child(5){
            width: 10%;
        }

        /* Preço */
        &.not-available {
            color: var(--red-500);
        }
    }

    .button-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        button {
            padding: 0.5rem;
            border-radius: 4px;
            transition: filter 0.3s ;

            &.btn-edit{
                background-color: var(--blue-500);
            }

            &.btn-delete{
                background-color: var(--red-500);
            }

            &:hover{
                filter: brightness(0.85) ;
            }
        }
    }
`