import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100%;
    height: 100%;
    background-color: #2A363B;

    header {
        padding: 0 2rem;

        img {
            width: 168px;
            margin: 0.75rem 0;
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
`