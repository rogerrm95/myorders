import styled from 'styled-components'

type ContainerProps = {
    gridAreaName?: string
}

export const Container = styled.div<ContainerProps>`
    grid-area: ${props => props.gridAreaName && props.gridAreaName};
    gap: 0.25rem;
    width: 100%;

    span {
        font-size: 1.5rem;
    }
    
    div {

        display: flex;
        justify-content: center;
        align-items: center;
        
        input {
            height: 4rem;
            width: 100%;
            border-bottom: 1px solid  #E0E0E0;
            color: var(--primary);
            font: 1.5rem normal Roboto, sans-serif;
            padding-left: 1rem;

            caret-color: var(--red-500);

            &::placeholder{
                color: var(--placeholder);
                font: 1rem normal Roboto, sans-serif;
            }
        }
        
    }
`

export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 3rem;
    width: 4rem;

    background-color: var(--primary);
    padding: 0.5rem;
    margin-right: 0.75rem;

    img {
        max-width: 35px;
    }
`