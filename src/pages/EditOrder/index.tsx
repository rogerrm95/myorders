import { Input } from "../../components/Inputs/General";
import { OrderPage } from "../../components/OrderPage";

import FoodInService from './../../assets/icons/plate-in-service.svg'

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