// Components //
import { AllOrdersList } from "../../../components/MyOrders/AllOrdersList";
import { Input } from "../../../components/MyOrders/Inputs/General";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
 // Image //
import FoodInService from '../../../assets/icons/plate-in-service.svg'
 // Styles //
import { Container } from "./styles";

type OrderData = {
    id: number,
    desk: string,
    status: 'done' | 'preparing' | 'waiting',
    initialTime: string,
}

export default function Orders() {
    // Temporário //
    const orders = [
        {id: 3000, desk: "01", status: 'done', initialTime: '12:00'},
        {id: 3001, desk: "03", status: 'preparing', initialTime: '12:02'},
        {id: 3005, desk: "12", status: 'waiting', initialTime: '12:10'}
    ] as OrderData[]


    return (
        <OrderPage title="Lista de pedidos">
            <Container>
                <Input imageSrc={FoodInService} alt='Icone' placeholder='Número do pedido. Ex: 0001-CC'/>

                <h2>Pedidos</h2>

                <AllOrdersList orders={orders}/>
            </Container>
        </OrderPage>
    )
}