import styled from "styled-components";

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;

    form {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 5rem 1fr 1fr;
        grid-template-areas:
        "food food"
        "obs unit"
        "button button";
        gap: 1.5rem 2rem;

        button {
            grid-area: button;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            grid-template-areas:
            "food"
            "unit"
            "obs"
            "button";
            gap: 2rem;
        }
    }

    // Botões //
    > div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
    }
`

export const Summary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0 0.5rem 0;

    h2:last-child{
        color:var(--blue-500);
    }
`
