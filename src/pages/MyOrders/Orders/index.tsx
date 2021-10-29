// Components //
import { AllOrdersList } from "../../../components/MyOrders/AllOrdersList";
import { Input } from "../../../components/MyOrders/Inputs/General";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
// Image //
import FoodInService from '../../../assets/icons/plate-in-service.svg'
// Styles //
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useOrders } from "../../../hooks/useOrders";

type OrderData = {
    id: number,
    desk: number,
    status: 'done' | 'preparing' | 'waiting',
    initialTime?: string,
}

export default function Orders() {
    const { orders } = useOrders()
    const [list, setList] = useState<OrderData[]>([])

    useEffect(() => {
        const newList = orders.map(order => {
            return {
                id:order.id,
                desk: order.desk,
                status: order.status,
                initialTime: '12:10' // Temporario //
            }
        })
        setList(newList)
    }, [orders])

    return (
        <OrderPage title="Lista de pedidos">
            <Container>
                <Input imageSrc={FoodInService} alt='Icone' placeholder='Número do pedido. Ex: 0001-CC' />

                <h2>Pedidos</h2>

                <AllOrdersList orders={list} />
            </Container>
        </OrderPage>
    )
}