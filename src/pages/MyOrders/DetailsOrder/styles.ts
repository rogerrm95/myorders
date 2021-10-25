import styled from "styled-components";

export const Container = styled.div`
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

        span {
            font-weight: 700;
            font-size: 1.5rem;

            strong {
                color: #F37807;
                background-color: #f378071a;
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
    
    .timeOfOrder{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "start end";
        gap: 1.5rem;
        margin: 0 auto;
        
        input {
            min-width: 100px;
            font-size: 1.25rem;
        }
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