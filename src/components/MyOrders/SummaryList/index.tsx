import { TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface SummaryListProps extends TableHTMLAttributes<HTMLTableElement> {
    orders: Order[],
}

type Order = {
    food: string,
    note?: string,
    amount: number,
    price: string,
}

// Componente que renderiza os itens do pedido //
export function SummaryList({ orders = [], ...rest }: SummaryListProps) {

    return (
        <Container {...rest}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.length !== 0 ? (
                        orders.map((order, index) => (
                            <tr key={index} className='items'>
                                <td>
                                    <p>{`${order.food} - Qtd ${order.amount}`}</p>
                                    <span>{order.note ? order.note : 'Obs: N/A'}</span>
                                </td>

                                <td>{order.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr className='empty-list'>
                            <td colSpan={2}>
                                <h1>Sem itens</h1>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Container>
    )
}