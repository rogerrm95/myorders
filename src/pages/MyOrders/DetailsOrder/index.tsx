// Hook //
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useOrders } from "../../../hooks/useOrders";
// Utils //
import { CalculateValueTotal } from "../../../utils/CalculateValueTotal";
import { createBrowserHistory } from 'history'
import { OrderType } from '../../../types/Order'
import { toast } from "react-toastify";
// Components //
import { Input } from "../../../components/MyOrders/Inputs/General";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
import { Button } from "../../../components/MyOrders/Button";
import { SummaryList } from "../../../components/MyOrders/SummaryList";
import { Spinner } from "../../../components/MyOrders/Spinner";
// Icons //
import { FiCheck } from "react-icons/fi";
import UserIcon from '../../../assets/icons/person.svg'
import DeskIcon from '../../../assets/icons/desk.svg'
import NumberIcon from '../../../assets/icons/number.svg'
import WaiterIcon from '../../../assets/icons/waiter.svg'
// Styles //
import { Container } from "./styles";

interface Order extends OrderType { }

export default function DetailsOrder() {
    const { id }: any = useParams()
    const { push } = useHistory()
    const { getOrderById, updateOrder } = useOrders()

    const [order, setOrder] = useState({} as Order)
    const [total, setTotal] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function getOrderInfo() {
            try {
                setIsLoading(true)
                const data = await getOrderById(id) as Order

                // Soma todos os valores de cada item pedido //
                // Converte o valor pra PT-BR //
                const amountToPay = CalculateValueTotal(data.items)

                setTotal(amountToPay)
                setOrder(data)
                setIsLoading(false)
            } catch {
                push('/')
            }
        }

        getOrderInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, getOrderById])

    // Finaliza um pedido - Apenas os marcados como "Prontos" //
    async function handleFinishOrder() {
        try {
            if (order.status === 'Pronto') {

                await updateOrder({ ...order, status: "Encerrado", finishedAt: new Date() }, order.id)
                    .then(_ => {
                        toast.success('Pedido encerrado!')
                        createBrowserHistory()
                        push('/')
                    })
            } else {
                toast.warning('Existem pratos para serem entregues!')
            }
        } catch {
            toast.error('Ops, ocorreu um erro durante o processamento!')
        }
    }

    return (
        <OrderPage title="Detalhes">
            {
                isLoading ? (
                    <Spinner size={32} speed={0.75} text='Carregando...' />
                ) : (
                    <Container statusStyle={`${order.status}`}>

                        <header>
                            <h2>{`Pedido Nº ${order.id}`}</h2>
                            <span className='status'>Status
                                <strong>
                                    {order.status}
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
                                backgroundColor={order.status === 'Encerrado' ? '#E0E0E0' : "#E84A5F"}
                                disabled={order.status === 'Encerrado'}
                                onClick={handleFinishOrder}>

                                {
                                    order.status === 'Encerrado' ? "Encerrado" : (
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