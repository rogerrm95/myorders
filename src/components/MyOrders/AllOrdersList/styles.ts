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

type ListItemData = {
    status: 'done' | 'preparing' | 'waiting'
}

// Cores para cada status dos pedidos //
const statusStyle = {
    'done': '#73C273',
    'preparing': '#F59B31',
    'waiting': '#4C8BEA'
}

export const ListItem = styled.tr<ListItemData>`
    td {
        text-align: center;
        font-weight: 500;
        font-size: 0.85rem;
        padding: 1.5rem;
        color: ${props => statusStyle[props.status]};

        &:nth-child(3) {
            font-weight: 700;
        }
    }

    .actionButtons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`