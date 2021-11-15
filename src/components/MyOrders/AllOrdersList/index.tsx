import { TableHTMLAttributes } from "react";
import { Link, useHistory } from 'react-router-dom'
// Icons //
import EditIcon from '../../../assets/icons/edit.svg'
import DetailsIcon from '../../../assets/icons/eye.svg'
// Styles //
import { Container, ListItem } from "./styles";

interface AllOrdersListProps extends TableHTMLAttributes<HTMLTableElement> {
    orders: Order[],
}

type Order = {
    id: number,
    desk: number,
    status: 'Pronto' | 'Preparando' | 'Aguardando' | 'Encerrado',
    initialTime?: string,
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
                        <ListItem key={order.id} status={order.status}>
                            <td>{order.id}</td>
                            <td>{order.desk}</td>
                            <td>
                                {
                                    order.status
                                }
                            </td>
                            <td>{order.initialTime}</td>
                            <td className='actionButtons'>
                                {
                                    order.status !== 'Encerrado' && (
                                        <Link to={`${location.pathname}/edit/${order.id}`} >
                                            <img src={EditIcon} alt="Editar" />
                                        </Link>
                                    )
                                }
                                <Link to={`${location.pathname}/details/${order.id}`} >
                                    <img src={DetailsIcon} alt="Visualizar" />
                                </Link>
                            </td>
                        </ListItem>
                    ))
                }
            </tbody>
        </Container>
    )
}