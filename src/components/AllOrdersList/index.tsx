import { TableHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import { Container } from "./styles";

interface AllOrdersListProps extends TableHTMLAttributes<HTMLTableElement> {
    orders: Order[],
    IconName: IconType,
    colorIcon?: string
}

type Order = {
    id: number,
    desk: string,
    status: string,
    initialTime: string,
}

// Componente que renderiza a tabela de pedidos //
export function AllOrdersList({ orders, IconName, colorIcon = "#FFF", ...rest }: AllOrdersListProps) {

    const { pathname } = useLocation() // Capta a URL atual //

    return (
        <Container {...rest}>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Mesa</th>
                    <th>Status</th>
                    <th>Horário</th>
                    <th>Ação</th>
                </tr>
            </thead>

            <tbody>
                {
                    orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.desk}</td>
                            <td>{order.status}</td>
                            <td>{order.initialTime}</td>
                            <td>
                                <Link to={`${pathname}/${order.id}`} >
                                    <IconName size='20' color={colorIcon} />
                                </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Container>
    )
}