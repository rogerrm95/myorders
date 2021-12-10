import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    
    max-width: 800px;
    width: 100%;
    height: 100%;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;

    height: 4rem;

    button {
        background-color: var(--primary);
        height: 3rem;
        width: 3rem;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.85);
        }
    }

    h2 {
        color: var(--primary);
    }

    img {
        width: 8rem;
        height: auto;
    }
`

export const Main = styled.main`
    flex: 1;
    display: flex;
    margin: 1rem 1rem;
    padding: 2rem 1rem;
    
    border-radius: 8px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    
`