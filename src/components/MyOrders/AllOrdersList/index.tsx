import { TableHTMLAttributes, useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
// Icons //
import EditIcon from '../../../assets/icons/edit.svg'
import DetailsIcon from '../../../assets/icons/eye.svg'
import { Spinner } from "../Spinner";
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
    const [list, setList] = useState([] as Order[])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const data = orders.map(order => order)
        setList(data)

        return () => {
            setIsLoading(false)
        }
    }, [orders])

    if (isLoading) return <Spinner size={24} speed={0.5} />

    return (
        <Container {...rest}>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Mesa</th>
                    <th className="status-column">Status</th>
                    <th className="time-column">Horário</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(order => (
                        <ListItem key={order.id} status={order.status}>
                            <td>{order.id}</td>
                            <td>{order.desk}</td>
                            <td className="status-column">
                                {
                                    order.status
                                }
                            </td>
                            <td className="time-column">{order.initialTime}</td>
                            <td className='actions-column'>
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