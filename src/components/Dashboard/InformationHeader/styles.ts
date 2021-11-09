import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr 300px;
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
        bottom: 1rem;
        right: -1rem;
        place-items: center;


        width: 300px;
        height: 150px;
    }

    @media(max-width: 1200px){
        grid-template-columns: 1fr 275px;

        h1 {
            font-size: 1.5rem;
        }

        img {
            width: 250px;
            height: 125px;
        }
    }

    @media(max-width: 900px){
        grid-template-columns: 1fr;

        img {
            display: none;
        }
    }

`