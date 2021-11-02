import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { createBrowserHistory } from 'history'
import { toast } from "react-toastify";
import { api } from "../../../services/api";
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
// Utils //
import { CalculateValueTotal } from "../../../utils/CalculateValueTotal";
// Styles //
import { Container } from "./styles";

type OrdersData = {
    id: string,
    status: 'done' | 'preparing' | 'waiting' | 'finished',
    client: string,
    desk: number,
    people: number,
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
    const { push } = useHistory()

    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState({} as OrdersData)
    const [total, setTotal] = useState('')

    useEffect(() => {
        async function getOrderById() {
            setIsLoading(true)
            const data = await api.get<OrdersData>(`orders/${id}`)
                .then(res => res.data)

            // Soma todos os valores de cada item pedido //
            // Converte o valor pra PT-BR //
            const amountAtToPay = CalculateValueTotal(data.items)

            setTotal(amountAtToPay)
            setOrder(data)
            setIsLoading(false)
        }
        getOrderById()
    }, [id])

    // Finaliza um pedido - Apenas os marcados como "Prontos" //
    async function handleFinishOrder() {
        try {
            if (order.status === 'done') {
                await api.put(`orders/${id}`, {
                    ...order,
                    status: 'finished',
                    finishedAt: new Date()
                })
                    .then(_ => {
                        toast.success('Pedido encerrado!')
                        createBrowserHistory()
                        push('/home')
                    })
            }
        } catch {
            toast.error('Ops, ocorreu um erro durante o processamento!')
        }
    }

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
                            <Input label='Quantidade' imageSrc={NumberIcon} readOnly value={order.people} gridAreaName='qtdPeople' />
                            <Input label='Atendente' imageSrc={WaiterIcon} readOnly value={order.waiter} gridAreaName='waiter' />
                        </form>

                        <div>
                            <SummaryList orders={order.items} />
                        </div>

                        <div className="cost">
                            <h1>{`Total: R$ ${total}`}</h1>
                        </div>

                        <div className='finishButton'>
                            <Button
                                backgroundColor={order.status === 'finished' ? '#E0E0E0' : "#E84A5F"}
                                disabled={order.status === 'finished'}
                                onClick={handleFinishOrder}>

                                {
                                    order.status === 'finished' ? "Encerrado" : (
                                        <>
                                            Encerrar pedido
                                            <FiCheck size='24' color='#FFF' />
                                        </>
                                    )
                                }

                            </Button>
                        </div>

                    </Container>
                )
            }
        </OrderPage>
    )
}