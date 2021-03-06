import styled from "styled-components";

type ContainerProps = {
    bgColor?: string,
    color?: string,
    height?: number
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: ${props => props.height ? `${props.height}rem` : `4rem`};
    width: 100%;
    border-radius: 8px;
    background-color: ${props => props.bgColor ? props.bgColor : "#000"};
    transition: filter 0.3s;

    p, span {
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.color ? props.color : "#FFF"};

        svg {
            margin: 0 0.5rem;
        }
    }

    &:hover:not(:disabled) {
        filter: brightness(0.9)
    }

    &[disabled] {
        cursor: default;
    }
`