import { transparentize } from "polished";
import styled from "styled-components";
import statusColors from '../../../utils/ColorsOfTypeStatus'

type ContainerProps = {
    status: 'Pronto' | 'Preparando' | 'Aguardando'
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    max-width: 320px;
    padding: 1rem 1.5rem 1rem 1rem;
    gap: 1.25rem;

    h2 {
        display: flex;
        align-items: center;

        svg {
            margin-left: 1rem;
        }
    }

    h2, span {
        font-family: "Baloo Thambi 2", cursive;
    }

    // Cor de acordo com o status //
    h2, li, svg {
        color: ${props => statusColors[props.status]}
    }

    // Lista de pedidos //
    .orders-list {
        display: flex;
        flex-direction: column;
        position: relative;
        
        width: 100%;
        height: 440px;
        padding: 1rem;
        background-color: var(--white);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        // Pedido //
        li {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: 
            "id desk"
            "client client";
            
            padding: 0.5rem;
            gap: 1rem;

            border: 2px solid ${props => transparentize(0.75, statusColors[props.status])};
            border-radius: 8px;

            span:nth-child(1) {
                grid-area: id;
            }

            span:nth-child(2) {
                grid-area: desk;
                text-align: right;
            }

            span:nth-child(3) {
                grid-area: client;
            }
        }

        li + li {
            margin-top: 1rem;
        }

        svg:last-of-type{
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            top: 0;
            margin: auto;
            opacity: 0.1;
        }
    }
`