// Components //
import { AllOrdersList } from "../../components/AllOrdersList";
import { Input } from "../../components/Inputs/General";
import { OrderPage } from "../../components/OrderPage";
// Icons & Images //
import { FiEye } from "react-icons/fi";
import FoodInService from './../../assets/icons/plate-in-service.svg'

import { Container } from "./styles"; // Styles //

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

                <AllOrdersList orders={orders} IconName={FiEye} colorIcon="#6E787C"/>
            </Container>
        </OrderPage>
    )
}