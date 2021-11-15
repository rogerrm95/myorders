import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    width: 22rem;
    height: 300px;

    background: #FCFCFC;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    overflow: hidden;

    .box {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0.5rem 1rem;

        h2 {
            text-align: center;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }
        
        p {
            font-size: 0.85rem;
            text-align: justify;
            line-height: 1.5rem;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }

        span {
            font-size: 0.75rem;
            font-weight: 700;
            align-self: flex-end;
            margin-top: auto;
        }
    }

    .buttons-group {
        height: 48px;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        width: 100%;        

        button {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            font: 700 1.25rem 'Baloo Thambi 2', cursive;
            color: var(--white);
            transition: filter 0.3s;

            :first-child{
                background-color: var(--red-500);
            }
            :last-child{
                background-color: var(--blue-500);
            }

            :not(:disabled):hover{
                filter: brightness(0.85);
            }
        }
    }

    // ITEM MARCADO COMO FINALIZADO //
    &.finished {
        background: var(--background);
        
        p, span, h2 {
            opacity: 0.5;
        }

        .buttons-group {
            button {
                background: var(--primary);
                opacity: 0.5;
                cursor: default;
            }
            svg {
                margin-left: 0.5rem;
            }
        }
    }
`;
