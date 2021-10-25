import styled from 'styled-components'

export const Header = styled.header`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    img {
        width: 250px;
        height: 120px;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 1rem 1.5rem;

        p, a {
            font-family: Roboto, sans-serif;
            font-weight: 700;
        }

        a {
            display: flex;
            color: var(--red-500);

            svg {
                margin-left: 0.5rem;
            }
        }
    }
`
