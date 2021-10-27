// Components //
import { Input } from "../../../components/MyOrders/Inputs/General";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
import { Button } from "../../../components/MyOrders/Button";
import { SummaryList } from "../../../components/MyOrders/SummaryList";

// Icons //
import { FiCheck } from "react-icons/fi";
import UserIcon from '../../../assets/icons/person.svg'
import DeskIcon from '../../../assets/icons/desk.svg'
import NumberIcon from '../../../assets/icons/number.svg'
import WaiterIcon from '../../../assets/icons/waiter.svg'
import CalendarIcon from '../../../assets/icons/calendary.svg'

import { Container } from "./styles";

export default function DetailsOrder() {
    // Temporario //
    const orderDetails = [
        {
            id: 1,
            food: 'Porção de batata fritas - Grande',
            note: 'Obs: sem sal',
            cost: 'R$ 12,00'
        },
        {
            id: 2,
            food: 'Macarronada com queijo e presunto',
            note: 'Obs: com molho de tomate',
            cost: 'R$ 22,00'
        },
        {
            id: 3,
            food: 'Suco de uva - Natural - 750ml',
            cost: 'R$ 10,00'
        }
    ]
    const orderInfo = {
        id: 3000,
        status: 'Pronto',
        client: 'Rogério Marques',
        desk: '10',
        qtdPeople: 2,
        waiter: 'José de Alencar',
        total: '44,00',
        orders: orderDetails
    }
    return (
        <OrderPage title="Detalhes">
            <Container>

                <header>
                    <h2>{`Pedido Nº ${orderInfo.id}`}</h2>
                    <span>Status - <strong>{orderInfo.status}</strong></span>
                </header>
                <form>
                    <Input label='Nome' imageSrc={UserIcon} readOnly value={orderInfo.client} gridAreaName='user' />
                    <Input label='Mesa' imageSrc={DeskIcon} readOnly value={orderInfo.desk} gridAreaName='desk' />
                    <Input label='Quantidade' imageSrc={NumberIcon} readOnly value={orderInfo.qtdPeople} gridAreaName='qtdPeople' />
                    <Input label='Atendente' imageSrc={WaiterIcon} readOnly value={orderInfo.waiter} gridAreaName='waiter' />
                </form>

                <div>
                    <SummaryList orders={orderInfo.orders} />
                </div>

                <div className='timeOfOrder'>
                    <Input
                        label='Início'
                        imageSrc={CalendarIcon}
                        type='text'
                        defaultValue={'20/01/1990'}
                        gridAreaName='start' />

                    <Input
                        label='Fim'
                        imageSrc={CalendarIcon}
                        type='text'
                        placeholder='__ / __ / __'
                        gridAreaName='end'
                    />
                </div>

                <div className="cost">
                    <h1>{`Total: R$${orderInfo.total}`}</h1>
                </div>

                <div className='finishButton'>
                    <Button backgroundColor="#E84A5F">
                        Encerrar pedido
                        <FiCheck size='24' color='#FFF' />
                    </Button>
                </div>

            </Container>
        </OrderPage>
    )
}