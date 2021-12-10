import styled from 'styled-components'

export const Container = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;

    section {
        flex: 2;

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1.5rem;

        h1, p {
            font-family: Rambla, sans-serif;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1.5rem;
            line-height: 2rem;
            color: var(--secondary);
        }
    }
    // Login //
    main {
        flex: 5;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 0 1.5rem;
        padding: 2rem 5.5rem;

        background-color: var(--white);
        border-radius: 50px 50px 0 0;
        filter: drop-shadow(0px -1px 25px rgba(0, 0, 0, 0.1));

        h1 {
            color: var(--primary);
            font-size: 2.5rem;
        }

        form {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }        
    }
`

export const Footer = styled.footer`
    margin-top: 1rem;

    span {
        font-size: 0.75rem;
        font-weight: 700;

        a {
            margin-left: 0.5rem;
            color: var(--red-500);
            text-decoration: underline;
        }
    }
`