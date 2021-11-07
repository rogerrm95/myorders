import { useEffect, useState } from "react"
import { IconType } from "react-icons"
import { useOrders } from "../../../hooks/useOrders"
import { Container } from './styles'

type ActiveOrdersProps = {
    title: string,
    Icon: IconType,
    status: 'done' | 'preparing' | 'waiting'
}

type Order = {
    id: number,
    client: string,
    desk: number
}

export function ActiveOrders({ title, status, Icon }: ActiveOrdersProps) {
    const { getOrdersByStatus, orders } = useOrders()

    const [orderList, setOrderList] = useState([] as Order[])

    useEffect(() => {
        const data = getOrdersByStatus(status)
        const newOrderList = data.map(order => {
            return {
                id: order.id,
                client: order.client,
                desk: order.desk
            }
        })

        setOrderList(newOrderList)
    }, [status, getOrdersByStatus, orders])

    return (
        <Container status={status}>
            <h2>
                {title}
                <Icon size='24' />
            </h2>

            <div className='orders-list'>
                <ul>
                    {
                        orderList.map(order => (
                            <li key={order.id}>
                                <span>Pedido: <strong>{order.id}</strong></span>
                                <span>Mesa: <strong>{order.desk}</strong></span>
                                <span>Cliente: <strong>{order.client}</strong></span>
                            </li>
                        ))
                    }
                </ul>

                <Icon size='200' />
            </div>
        </Container>
    )
}