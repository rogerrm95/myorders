import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    'title image'
    'description image';
    align-items: center;

    height: 150px;


    padding: 1rem 1.5rem 1rem 1rem;
    position: relative;

    border-radius: 8px;
    box-shadow: -1px 1px 25px rgba(0, 0, 0, 0.1);
    background-color: var(--white);

    h1 {
        grid-area: title;
        font-size: 2rem;
    }

    p {
        grid-area: description;
        color: var(--secondary);
        font-size: 0.85rem;
        text-align: justify;
        line-height: 1.5rem;
    }

    img {
        grid-area: image;
        position: absolute;
        bottom: 0.5rem;
        right: 0;


        width: 300px;
        height: 150px;
        align-self: flex-end;
        margin-bottom: -0.5rem;
    }

    @media(max-width: 1000px){
        grid-template-columns: 1fr 275px;

        img {
            width: 275px;
            height: 125px;
        }
    }

    @media(max-width: 800px){
        grid-template-columns: 1fr;
        img {
            display: none;
        }
    }

`