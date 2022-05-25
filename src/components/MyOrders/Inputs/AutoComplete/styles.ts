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
        width: 24px;
        object-fit: contain;
    }
`

export const InputAutoComplete = styled.div`
    position: relative;

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

        caret-color: var(--red-500);

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

    svg {
        position: absolute;
        top: 25%;
        right: 0;
        cursor: pointer;
        
        &:hover line{
            color: var(--red-500);
        }
    }

    .suggestion-list {
        position: absolute;
        top: 4.5rem;
        right: 0;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        max-height: 20rem;
        width: calc(100% - 5.5rem);
        overflow-y: scroll;
        overflow-x: hidden;

        background-color: var(--white);
        -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.25); 
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.25);
        z-index: 1;

        // Scroll-Bar //
        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: var(--grey-light);
        }

        &::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: var(--secondary);
        }
    }
`