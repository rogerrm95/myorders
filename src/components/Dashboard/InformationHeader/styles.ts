import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.5rem 1rem 1rem;
    border-radius: 8px;
    box-shadow: -1px 1px 25px rgba(0, 0, 0, 0.1);
    background-color: var(--white);

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 75%;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 2rem;
    }
    p, span {
        line-height: 1.5rem;
        color: var(--secondary);
    }

    img {
        width: 375px;
        height: 175px;
        align-self: flex-end;
        margin-bottom: -0.5rem;
    }

`