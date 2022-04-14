import styled from "styled-components";

export const Container = styled.aside`
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background-color: #2A363B;

    header {
        padding: 0 2rem;

        img {
            width: 168px;
            margin: 0.75rem 0;
        }

        svg {
            display: none;
        }

        h2 {
            display: none;
        }

        .logo-mini {
            display: none;
        }

        hr {
            border-color: var(--red-500);
        }
    }

    nav {
        flex: 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        padding: 0 2rem;
        margin-top: 2rem;

        & > :last-child{
            margin-top: auto;
        }
    }

    footer {
        align-self: flex-end;

        flex: 1;
        display: flex;
        align-items: flex-end;

        img {
            overflow: hidden;
            height: 200px;
        }
    }

    @media(max-width: 768px){
        flex-direction: column;
        position: relative;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 1;

            img {
                width: 62px;
            }

            svg {
                display: block;
                cursor: pointer;
                transition: filter 0.3s;

                &:hover{
                    filter: brightness(0.7) ;
                }
            }

            h2 {
                display: block;
                color: var(--white);
            }

            hr {
                display: none;
            }

            .logo-full {
                display: none;
            }

            .logo-mini {
                display: block;
            }
        }

        nav {
            display: none;
        }

        .menu-open {
            display: flex;
            align-items: center;

            position: absolute;
            left: 0;
            top: 3rem;

            width: 100%;
            min-height: 22rem;

            background-color: #2A363B;
            box-shadow: 0px 5px 5px rgba(0,0,0,0.25);
            z-index: 99999;

            & > :last-child{
                margin-top: 0;
            }
        }

        footer {
            display: none;
        }
    }
`