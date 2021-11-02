import styled from "styled-components";

export const Container = styled.table`
    border: 1px solid var(--grey-light);
    border-collapse: collapse;
    width: 100%;
    min-height: 20rem;

    thead {
        height: 3rem;
        background: var(--primary);
        border: 1px solid var(--primary);

        tr {
            display: flex;
            justify-content: space-between;
            padding: 0 1rem;
        }
        th {
            padding: 1rem;
            color: var(--white);
            font-weight: 500;
    
            &:nth-child(1){
                text-align: start;
            }

            &:nth-child(2){
                text-align: center;
            }
        }
    }

    tbody {
        .items {
            display: flex;
            justify-content: space-between;
            padding: 0 1rem;
        }

        td {
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
                font-size: 1rem;
                color: var(--green-500)
            }
        }
    }

    .empty-list {
        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.25;
            font-weight: 500;
        }
    }
`