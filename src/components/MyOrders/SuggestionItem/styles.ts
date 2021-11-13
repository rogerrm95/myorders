import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.div`
    flex: 1;
    min-height: 4rem;

    display: grid;
    grid-template-columns: 1fr 5.5rem;
    grid-template-rows: 1fr 1rem;
    grid-template-areas:
    'food price'
    'category price';
    align-items: center;
    padding: 0.5rem 0.75rem;
    gap: 1.5rem;

    border-bottom: 1px solid black;
    transition: background-color 0.25s;

    &:hover {
        background: ${darken(0.05, '#FFF')};
        border-radius: 4px;
        cursor: pointer;
    }

    .food {
        grid-area: food;

        max-width: 95%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5rem;

        font-weight: 700;
    }
    
    .price {
        grid-area: price;
        text-align: center;
        font-weight: 700;
        color: var(--green-500);
    }

    .category {
        grid-area: category;
        color: var(--secondary);
        font-size: 0.85rem;
    }

`