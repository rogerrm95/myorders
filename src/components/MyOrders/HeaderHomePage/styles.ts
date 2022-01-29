import styled from 'styled-components'
// Continuar ... //
export const Header = styled.header`
    flex: 1;
    display: flex;
    justify-content: stretch;
    width: 100%;


    img {
        width: 250px;
        height: 120px;
    }   
    
    p {
        margin: 1rem 0.5rem;
        font-family: Roboto, sans-serif;
        font-size: 0.85rem;
        
        strong {
            font-size: 1rem;
        }
    }

    button {
        display: flex;
        margin: 1rem 0 auto auto;
        background: transparent;

        transition: 0.3s filter;

        cursor: pointer;
        color: var(--red-500);
        
        span {
            color: var(--red-500);
            font-weight: 700;
            font-size: 1.1rem;
        }

        svg {
            margin-left: 0.5rem;
            padding: 0.15rem;
        }

        &:hover {
            filter: brightness(0.85);
        }
    }
`
