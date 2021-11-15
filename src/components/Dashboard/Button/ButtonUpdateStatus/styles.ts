import styled from "styled-components";

type ContainerProps = {
    color?: string
}

export const Container = styled.button<ContainerProps>`
    background: ${props => props.color ? props.color : '#d3d3d3'};
    margin-top: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    padding: 1rem;
    font: 500 1.12rem 'Baloo Thambi 2', cursive;
    letter-spacing: 0.05rem;

    border-radius: 8px;
    color: var(--white);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
    transition: filter 0.3s;

    &:hover:not(:disabled) {
        filter: brightness(0.9);
    }

    :disabled{
        cursor: default;
        background: var(--grey-light);
    }
`