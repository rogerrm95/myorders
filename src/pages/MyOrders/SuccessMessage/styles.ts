import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 0 2rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 300px;
    }

    // Textos //
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 4rem 0;

        h1,span {
            text-align: center;
        }

        h1 {
            font-size: 3rem;
        }
    }

    // Grupo de Botões //
    div:nth-child(3){
        width: 100%;
        max-width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media(min-width: 600px) {
        img {
            width: auto;
        }

        // Textos //
        div:nth-child(2) {
            h1 {
                font-size: 4rem;
            }
        }

        // Grupo de Botões //
        div:nth-child(3){
            max-width: 90%;
        }
    }

`