// Components //
import { Input } from "../../../components/MyOrders/Inputs/General";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
// Icon //
import FoodInService from '../../../assets/icons/plate-in-service.svg'
// Styles //
import { Container } from "./styles";

export default function EditOrder() {

    return (
        <OrderPage title="Lista de pedidos">
            <Container>
                <Input imageSrc={FoodInService} alt='Icone' placeholder='Número do pedido. Ex: 0001-CC' />
            </Container>
        </OrderPage>
    )
}