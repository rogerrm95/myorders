import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
        font-size: 1.5rem;
    }
    
    div {

        display: flex;
        justify-content: center;
        align-items: center;

        button, input {
            height: 4rem;
        }

        input {
            width: 100%;
            border-bottom: 1px solid  #E0E0E0;
            color: var(--primary);
            font: 1.5rem normal Roboto, sans-serif;
            padding-left: 0.5rem;

            caret-color: var(--red-500);

            &::placeholder{
                color: var(--placeholder);
                font: 1.5rem normal Roboto, sans-serif;
            }
        }
        
    }
`

export const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 0.5rem;
    min-width: 64px;
    height: 64px;
    
    border-radius: 8px;
    background-color: var(--red-500);
`