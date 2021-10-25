// Components //
import { AllOrdersList } from "../../../components/MyOrders/AllOrdersList";
import { Input } from "../../../components/MyOrders/Inputs/General";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
 // Image //
import FoodInService from '../../../assets/icons/plate-in-service.svg'
 // Styles //
import { Container } from "./styles";

export default function Orders() {
    // Temporário //
    const orders = [
        {id: 3000, desk: "01", status: 'Pronto', initialTime: '12:00'},
        {id: 3001, desk: "03", status: 'Em preparo', initialTime: '12:02'},
        {id: 3005, desk: "12", status: 'Na Fila', initialTime: '12:10'}
    ]

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