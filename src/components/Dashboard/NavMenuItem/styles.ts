import { Link } from "react-router-dom";
import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    transition: background-color, padding, 0.2s;
    
    &:hover{
        background: ${darken(0.05, "#2A363B")};
        padding: 0.25rem;
        border-radius: 8px 25px 25px 8px;
        width: 100%;
    }
    
    svg, p {
        color: var(--white);
    }

    p {
        font-family: 'Baloo Thambi 2', cursive;
        font-size: 1.25rem;
    }

    &.active > * {
        color: var(--red-500);
    }

    @media(max-width: 768px){

        flex-direction: row-reverse;

        p {
            font-size: 1.5rem;
        }

        &:hover{
            background: ${darken(0.05, "#2A363B")};
            padding: 0.5rem;
            width: initial;
            border-radius: 4px;

            box-shadow: inset 1px 1px 20px var(--secondary);
        }
    }
`