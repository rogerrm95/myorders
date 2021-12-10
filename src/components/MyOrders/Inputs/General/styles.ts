import styled from 'styled-components'

type ContainerProps = {
    gridAreaName?: string
}

export const Container = styled.div<ContainerProps>`
    grid-area: ${props => props.gridAreaName && props.gridAreaName};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;


    span {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    div {

        display: flex;
        align-items: center;
        
        input {
            height: 4rem;
            width: 100%;
            padding-left: 1rem;
            margin-left: 0.75rem;
            
            color: var(--primary);
            font: 1.5rem normal Roboto, sans-serif;
            border-bottom: 2px solid  #45545A;

            caret-color: var(--primary);

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
    min-width: 69px;
    min-height: 64px;

    background-color: var(--primary);

    img {
        max-width: 35px;
    }
`