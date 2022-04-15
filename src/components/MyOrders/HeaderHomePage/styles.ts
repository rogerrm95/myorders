import styled from 'styled-components'
// Continuar ... //
export const Header = styled.header`
    flex: 1;
    display: flex;
    width: 100%;
    gap: 1rem;

    img {
        width: 250px;
        height: 120px;
    }

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        gap: 0.5rem;
    }
    
    p {
        font-family: Roboto, sans-serif;
        font-size: 0.85rem;
        
        strong {
            font-size: 1rem;
        }
    }

    button {
        display: flex;
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

    @media(max-width: 768px){
        img {
            width: 200px;
            height: 100px;
        }
    }
`
