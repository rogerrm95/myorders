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
        font-size: 1.25rem;
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
            font: 1rem normal Roboto, sans-serif;
            border-bottom: 2px solid  #45545A;

            caret-color: var(--primary);
            
            &::placeholder{
                color: var(--placeholder);
                font: 0.85rem normal Roboto, sans-serif;
            }

            @media (max-width: 900px) {
                & {
                    font: 1.25rem normal Roboto, sans-serif;
                }
            }
        }
        
    }
`

export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    min-width: 48px;
    min-height: 48px;

    cursor: pointer;
    background-color: var(--primary);

    & > img {
        width: 20px;
        object-fit: contain;
    }
`