import styled from 'styled-components'
// Continuar ... //
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    img {
        width: 160px;
        object-fit: cover;
        margin-right: -0.75rem;
    }
    
    .wrap-shadow {
        filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.5));
    }

    .wrap {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.25rem;

        padding: 0.5rem;
        height: 3.75rem;
        width: 12rem;
        
        background: #2A363B;

        clip-path: 
            polygon(
                0% 0%,
                calc(100% - 32px) 0%,
                100% 100%,
                0% 100%
            );
    }

    p, span {    
        max-width: 75%;
    }
    
    p {
        color: var(--white);
        font-weight: 400;
    }

    span {        
        font-size: 0.75rem;
        color: var(--red-500);
    }

    // Mobile //
        @media (max-width: 400px) {
            img {
                width: 120px;
                object-fit: contain;
                margin-right: -1rem;
                margin-top: -0.5rem;
        }
        
        .wrap {
            width: 8rem;
        }

        p {
            font-size: 0.85rem;
        }
    }
`
