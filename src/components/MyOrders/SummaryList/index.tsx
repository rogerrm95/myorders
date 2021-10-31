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

// Componente que renderiza a tabela de pedidos //
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
                    orders.map((order, index) => (
                        <tr key={index}>
                            <td>
                                <p>{`${order.food} - Qtd ${order.amount}`}</p>
                                <span>{order.note ? order.note : 'Obs: N/A'}</span>
                            </td>

                            <td>{order.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Container>
    )
}