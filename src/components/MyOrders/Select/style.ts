import styled from "styled-components";

type ContainerProps = {
    gridAreaName?: string
}

export const Container = styled.div<ContainerProps>`
    grid-area: ${props => props.gridAreaName && props.gridAreaName};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
        
    .select-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        height: 4rem;
        width: 100%;
        margin-left: 0.75rem;
        
        color: var(--primary);
        background: var(--white);
        font: 1.5rem normal Roboto, sans-serif;
        border-bottom: 2px solid  #45545A;
        list-style: none;

        position: relative;

        p {
            display: flex;
            align-items: center;
            height: 4rem;
            margin-left: 0.75rem;
        }

        .options {
            position: absolute;
            top: 4rem;
            width: 100%;
            height: 200px;

            display: flex;
            flex-direction: column;

            background: var(--white);
            border: 1px solid #e3e3e3;
            box-shadow: 0 2px 10px 1px #00000025;

            list-style: none;
            overflow: hidden scroll;
            z-index: 1;

            li {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                width: 100%;
                height: 3rem;
                padding: 1rem;

                font-size: 1.25rem;
                transition: background-color 0.3s;

                &:hover{
                    background: var(--primary);
                    color: var(--white);

                    // Arrow right //
                    &::before {
                        content: '';
                        left: 0.5rem;
                        width: 0; 
                        height: 0; 
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                        border-left: 8px solid var(--white);
                        margin-right: 1rem;
                    }
                }
            }
        }

        .arrow-down {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.75rem;
        }

        // Animação //
        .options {
            animation: fadein 0.25s 1 ease-in;
        }

        @keyframes fadein {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
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

