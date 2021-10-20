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
        }
    }

    td {
        text-align: center;
        font-weight: 500;
        font-size: 0.85rem;
        padding: 1.5rem;

        &:nth-child(3) {
            font-weight: 700;
        }
    }
`