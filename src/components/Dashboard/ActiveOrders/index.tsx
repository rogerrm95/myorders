import { useEffect, useState } from "react"
// Icons //
import { IconType } from "react-icons"
// Hook //
import { useOrders } from "../../../hooks/useOrders"
// Styles //
import { Container } from './styles'

type ActiveOrdersProps = {
    title: string,
    Icon: IconType,
    status: 'Pronto' | 'Preparando' | 'Aguardando'
}

type Order = {
    id: string,
    client: string,
    desk: number,
}

export function ActiveOrders({ title, status, Icon }: ActiveOrdersProps) {
    const { orders, getOrdersByStatus, getOrders } = useOrders()

    const [orderList, setOrderList] = useState([] as Order[])

    useEffect(() => {
        const data = orders.filter(order => order.status === status && order)
        setOrderList(data)

        const time = setInterval(() => { getOrders() }, 10000)

        return () => clearInterval(time)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orders, status, getOrdersByStatus])


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