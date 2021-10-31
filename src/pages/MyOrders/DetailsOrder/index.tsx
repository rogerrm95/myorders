import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { api } from "../../../services/api";

type OrdersData = {
    id: string,
    status: 'done' | 'preparing' | 'waiting',
    client: string,
    desk: number,
    qtdPeople: number,
    waiter: string,
    price: string,
    items: Order[]
}

type Order = {
    food: string,
    note?: string,
    amount: number,
    price: string
}

export default function DetailsOrder() {
    const { id }: any = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState({} as OrdersData)
    const [total, setTotal] = useState('')

    useEffect(() => {
        async function getOrderById() {
            setIsLoading(true)
            const data = await api.get<OrdersData>(`orders/${id}`)
                .then(res => res.data)

            // Soma todos os valores de cada item pedido //
            const amountAtToPay = data.items
                .map((item: Order) => parseFloat(item.price) * item.amount)
                .reduce((item, acc) => {
                    return item + acc
                }, 0).toFixed(2).replace('.', ',')

            setTotal(amountAtToPay)
            setOrder(data)
            setIsLoading(false)
        }
        getOrderById()
    }, [id])

    return (
        <OrderPage title="Detalhes">
            {
                isLoading ? (
                    <div>Carregando...</div>
                ) : (
                    <Container statusStyle={`${order.status}`}>

                        <header>
                            <h2>{`Pedido Nº ${order.id}`}</h2>
                            <span className='status'>Status
                                <strong>
                                    {
                                        order.status === 'done' ? 'Pronto' : (
                                            order.status === 'preparing' ? 'Preparando' : 'Aguardando'
                                        )
                                    }
                                </strong>
                            </span>
                        </header>
                        <form>
                            <Input label='Nome' imageSrc={UserIcon} readOnly value={order.client} gridAreaName='user' />
                            <Input label='Mesa' imageSrc={DeskIcon} readOnly value={order.desk} gridAreaName='desk' />
                            <Input label='Quantidade' imageSrc={NumberIcon} readOnly value={order.qtdPeople} gridAreaName='qtdPeople' />
                            <Input label='Atendente' imageSrc={WaiterIcon} readOnly value={order.waiter} gridAreaName='waiter' />
                        </form>

                        <div>
                            <SummaryList orders={order.items} />
                        </div>

                        <div className='timeOfOrder'>
                            <Input
                                label='Início'
                                imageSrc={CalendarIcon}
                                type='text'
                                defaultValue={'20/01/1990' /*Arrumar*/}
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
                            <h1>{`Total: R$ ${total}`}</h1>
                        </div>

                        <div className='finishButton'>
                            <Button backgroundColor="#E84A5F">
                                Encerrar pedido
                                <FiCheck size='24' color='#FFF' />
                            </Button>
                        </div>

                    </Container>
                )
            }
        </OrderPage>
    )
}