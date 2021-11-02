import styled from "styled-components";

type ContainerProps = {
    statusStyle: 'done' | 'preparing' | 'waiting' | 'finished'
}

// Cores para cada status dos pedidos //
const status = {
    done: '#73C273',
    preparing: '#F59B31',
    waiting: '#4C8BEA',
    finished: '#E0E0E0'
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
            font-size: 2rem;
        }

        .status {
            font-weight: 700;
            font-size: 1.5rem;

            strong {
                color: ${props => props.statusStyle ? status[props.statusStyle] : 'none'};
                margin-left: 0.5rem;
                padding: 0.5rem;
                border-radius: 0.5rem;
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