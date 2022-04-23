import styled from "styled-components";
import statusColors from '../../../utils/ColorsOfTypeStatus'

type StatusProps = {
    statusStyle: 'Pronto' | 'Preparando' | 'Aguardando' | 'Encerrado'
}

export const Container = styled.div<StatusProps>`
    height: 100vh;

    display: grid;
    grid-template-columns: 15rem 1fr;
    overflow: hidden;

    background-color: var(--background);

    main {
        height: 100%;
        max-width: 1260px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        margin: auto;

        overflow: auto;

        /* SCROLL-BAR */
        ::-webkit-scrollbar {
            width: 0.5rem;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--secondary);
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #040404; 
        }
    }

    section {
        height: 100%;
        display: flex;
        margin-bottom: 2rem;
        gap: 2rem;
    }

    .orders-id {
        width: 10rem;
        max-width: 125px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            
            padding: 1rem 0;
            border-radius: 4px;

            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            background: var(--white);
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.25rem;
            color: var(--secondary);
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        li {
            padding: 1rem 1.5rem;
            border-radius: 25%;
            
            cursor: pointer;
        }
        
        .selected {
            background-color: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
            color: var(--white);

            transition: filter 0.3s;
    
            &:hover {
                filter: brightness(0.95);
            }
        }
    }

    @media(max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 5rem 1fr;

        section {
            flex-direction: column;
            flex: 1;

            .orders-id {
                width: 100%;
                max-width: 100%;
                min-height: 12rem;

                div {
                    ul {
                        align-self: flex-start;

                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 1rem;
                        padding: 0 1rem;
                    }

                    li {
                        font-size: 1.25rem;
                        padding: 1rem 1.25rem;
                        transition: border 0.1s ease-in-out;
                        
                        :hover{
                            border-width: 2px;
                            border-style: solid;
                            border-color: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
                            color: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
                        }
                    }

                    .selected:hover{
                        color: var(--white);
                        padding: 1rem;
                    }
                }
            }
        }
    }
`

export const Order = styled.div<StatusProps>`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        h1 {
            font-size: 2rem;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border-left: 8px solid ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
        background: var(--white);
    }    
`

export const Details = styled.div<StatusProps>`
    flex: 1;
    display: flex;
    justify-content: space-between;

    padding: 1rem;
    border-bottom: 1px solid ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};   
    
    .details-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            display: flex;
            align-items: center;
            font-size: 2rem;
            color: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};

            button {
                display: flex;
                align-items: center;
                margin-left: 0.75rem;
                background: transparent;
            }
        }

        p {
            width: 90%;
            font-size: 1.25rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        span {
            margin-top: auto;
            font-size: 0.85rem;
        }
    }
    .details-right {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            font-size: 1.25rem;
            text-align: right;

            &:first-of-type {
                color: var(--green-500);
            }
        }
    }
`

export const Items = styled.div<StatusProps>`
    flex: 1;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .items-head {
        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 1.5rem;
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.25rem 1rem;

            font-size: 0.75rem;
            border-radius: 50px;
            color: var(--white);
            background: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
        }
    }

    .items-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem 1rem;
        flex-wrap: wrap;

        max-height: 300px;
        overflow-y: scroll;

        padding: 0.5rem 1rem;

        /* SCROLL-BAR */
        ::-webkit-scrollbar {
            width: 0.5rem;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        
        ::-webkit-scrollbar-thumb {
            background: ${props => props.statusStyle ? statusColors[props.statusStyle] : 'none'};
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #040404; 
        }
    }
`

export const NoOrders = styled.article`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    opacity: 0.75;

    svg, p, h1 {
        color: var(--secondary);
    }

    p {
        width: 50%;
        text-align: center;
        font-weight: 500;
        line-height: 1.5rem;
    }

    
`