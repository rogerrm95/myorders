import styled from "styled-components";

export const Container = styled.table`
    border: 1px solid var(--grey-light);
    border-collapse: collapse;
    width: 100%;

    thead {
        height: 3rem;
        background: var(--primary);
        border: 1px solid var(--primary);
        
        th {
            padding: 1rem;
            color: var(--white);
            font-weight: 500;

            &:nth-child(1){
                text-align: start;
            }
        }
    }

    td {
        
        font-weight: 500;
        font-size: 0.85rem;
        padding: 1rem;
        font-family: Saira, sans-serif;

        &:nth-child(1) {
            p{
                font-size: 1rem;
            }
            
            span {
                font-size: 0.75rem;
                text-transform: capitalize;
                color: var(--red-250);
            }
        }
        
        &:nth-child(2) {
            font-weight: 700;
            text-align: center;
            color: var(--green-500)
        }
    }
`