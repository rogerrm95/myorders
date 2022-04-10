import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    p {
        font-size: 1.125rem;
        text-align: center;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: inherit;

        button {
            height: 2.25rem;
            width: 100%;
            max-width: 10rem;

            border-radius: 4px;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        .btn-delete {
            background: var(--red-750);
            color: var(--white);
        }
    }
`