import styled from "styled-components";

export const Container = styled.li`
    width: 7rem;
    height: 6rem;

    background: linear-gradient(180deg, #FFFFFF 0%, rgba(236, 236, 236, 0) 100%);
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;
    transition: opacity 0.5s ;

    img {
        object-fit: contain;
        width: 45px;

        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));
    }

    p {
        text-align: center ;
        font: 700 0.7rem 'Baloo Thambi 2', cursive;
    }

    &:hover{
        opacity: 0.5;
    }

`