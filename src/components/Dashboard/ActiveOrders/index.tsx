import { IconType } from "react-icons"
import { Container } from './styles'

type ActiveOrdersProps = {
    title: string,
    Icon: IconType,
    status: 'done' | 'preparing' | 'waiting'
    orders: Order[]
}

type Order = {
    id: number,
    client: string,
    desk: string
}

export function ActiveOrders({ title, status, Icon, orders }: ActiveOrdersProps) {
    return (
        <Container status={status}>
            <h2>
                {title}
                <Icon size='24' />
            </h2>

            <div className='orders-list'>
                <ul>
                    {
                        orders.map(order => (
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