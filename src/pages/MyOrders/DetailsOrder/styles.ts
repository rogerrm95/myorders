import styled from "styled-components";
import statusColors from '../../../utils/ColorsOfTypeStatus' // Utils //

type ContainerProps = {
    statusStyle: 'Pronto' | 'Preparando' | 'Aguardando' | 'Encerrado'
}

export const Container = styled.div<ContainerProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: 1.75rem;
        }

        .status {
            font-weight: 700;
            font-size: 1.5rem;

            strong {
                color: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
                margin-left: 0.5rem;
                border-radius: 0.5rem;
            }
        
            @media (max-width: 500px) {
                & {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.15rem;
                }
            }        
        }
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 110px);
        grid-template-areas: 
        "user user"
        "desk qtdPeople"
        "waiter waiter";
        gap: 1rem;
    }
    
    .cost {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        
        & h1 {
            color: var(--green-500);
            font: 700 2rem Saira, sans-serif;
        }
    }

    .finishButton {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`