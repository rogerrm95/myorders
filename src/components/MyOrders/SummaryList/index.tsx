import { TableHTMLAttributes } from "react";

import { Container } from "./styles";

interface SummaryListProps extends TableHTMLAttributes<HTMLTableElement> {
    orders: Order[],
}

type Order = {
    id: number,
    food: string,
    note?: string,
    cost: string,
}

// Componente que renderiza a tabela de pedidos //
export function SummaryList({ orders, ...rest }: SummaryListProps) {
    
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
                    orders.map(order => (
                        <tr key={order.id}>
                            <td>
                                <p>{order.food}</p>
                                <span>{order.note ? order.note : 'Obs: N/A'}</span>
                            </td>

                            <td>{order.cost}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Container>
    )
}