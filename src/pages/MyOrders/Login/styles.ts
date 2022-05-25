import styled from 'styled-components'
import Background from '../../../assets/restaurant-login.png'
import Blob from '../../../assets/blob.svg'

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;

    display: flex;
    overflow: hidden;

    .banner {
        flex: 3;

        display: flex;
        align-items: flex-end;

        background: transparent url(${Background}) no-repeat right;
        background-size: cover;

        article {
            display: flex;
            flex-direction: column;
            justify-content: center;

            height: 380px;
            width: 100%;
            max-width: 440px;
            padding: 0.75rem;

            background: transparent url(${Blob}) no-repeat right;
            background-size: cover; 
        }

        h2, p, span {
            font-family: Rambla, sans-serif;
            color: var(--white);
            user-select: none;
        }

        h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;

            &::first-letter{
                color: var(--red-500);
                font-size: 6rem;
            }
        }

        p, span {
            max-width: 75%;
        }

        p {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        span {
            margin-top: 2.25rem;
        }

        @media(max-width:900px){
            & {
                display: none;
            }
        }
    }

    .login {
        width: 440px;

        display: flex;
        flex-direction: column;
        overflow-y: auto;

        img {
            max-width: 220px;
        }

        article {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            padding: 1.5rem;
            user-select: none;

            h1 {
                color: var(--primary);
                font-size: 2.25rem;
                max-width: 75%;
            }
        }

        & > div {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 2.5rem;


            width: 100%;
            max-width: 320px;
            margin: auto;
            padding: 2rem;

            border-radius: 8px;
            background: var(--white);
            filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.15));

            h2 {
                align-self: center;
                font-size: 1.75rem;

                &::first-letter{
                    font-size: 2rem;
                }
            }

            form {
                align-self: stretch;
                display: flex;
                flex-direction: column;
                gap: 2rem;

            }

        }
        
        @media (min-width: 900px) {
            article {
                display: none;
            }
        }

        @media (max-width: 900px) {
            & {
                flex: 1;
            }
        }

        @media (max-width: 400px) {
            & > div {
                max-width: 240px;
            }
        }
    }
`
export const Footer = styled.footer`
    align-self: center;

    margin-top: 2rem;
    display: flex;
        
    span {
        font-size: 0.85rem;
        font-weight: 700;
        
    }

    a {
        margin-left: 0.5rem;
        color: var(--red-500);
        text-decoration: underline;
        text-align: center;
    }

    @media(max-width:768px){
        span, a {
            font-size: 1rem;
        }
    }

    // Smartphone //
    @media(max-width:600px){
        flex-direction: column;
        gap: 0.75rem;

        span, a {
            font-size: 0.9rem;
        }
    }

`