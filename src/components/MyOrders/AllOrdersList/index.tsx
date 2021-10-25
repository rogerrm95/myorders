import { TableHTMLAttributes } from "react";
import { Link, useHistory } from 'react-router-dom'
// Icons //
import EditIcon from '../../../assets/icons/edit.svg'
import DetailsIcon from '../../../assets/icons/eye.svg'

import { Actions, Container } from "./styles";

interface AllOrdersListProps extends TableHTMLAttributes<HTMLTableElement> {
    orders: Order[],
}

type Order = {
    id: number,
    desk: string,
    status: string,
    initialTime: string,
}

// Componente que renderiza a tabela de pedidos //
export function AllOrdersList({ orders, ...rest }: AllOrdersListProps) {
    // Capta a URL //
    const { location } = useHistory()

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
                            <Actions>
                                <Link to={`${location.pathname}/edit/${order.id}`} >
                                    <img src={EditIcon} alt="Editar" />
                                </Link>
                                <Link to={`${location.pathname}/details/${order.id}`} >
                                    <img src={DetailsIcon} alt="Visualizar" />
                                </Link>
                            </Actions>
                        </tr>
                    ))
                }
            </tbody>
        </Container>
    )
}