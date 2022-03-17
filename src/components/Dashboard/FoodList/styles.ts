import styled from "styled-components";

export const Container = styled.table`
    width: 100%;
    border-collapse: collapse;

    td, th {
        padding: 1rem 0;
        width: 160px;
        border-bottom: 1px solid var(--primary) ;
        text-align: left;

        /* Preço, Status e Ações */
        &:nth-child(3), :nth-child(4), :nth-child(5){
            text-align: center;
        }

        /* Nome */
        &:nth-child(1) {
            width: 260px;
            padding: 1rem 0;
        }

        /* Descrição */
        &:nth-child(2) {
            width: 500px;
            padding: 1rem 0;
        }
    }

    th {
        height: 32px;
        font-size: 0.9rem;
    }

    td {
        max-width: 200px ;
        font-size: 0.8rem;
        padding: 1rem 1rem;
        
        /* Descrição */
        &:nth-child(2){
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

        /* Status */
        &:nth-child(4){
            font-size: 0.75rem;
        }

        /* Preço */
        &.not-available {
            color: var(--red-500);
        }
    }
`