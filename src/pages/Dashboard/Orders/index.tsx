import { useEffect, useState } from 'react'
import { useOrders } from '../../../hooks/useOrders'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import StatusList from '../../../utils/statusList'
// Components //
import { InformationHeader as Information } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
import { OrderItems } from '../../../components/Dashboard/OrderItems'
import { SelectStatus } from '../../../components/Dashboard/SelectStatus'
// Icons & Images //
import HeroImage from '../../../assets/orders-hero.svg'
import { MdWarningAmber } from 'react-icons/md'
// Styles //
import { Container, Items, Order, Details, NoOrders } from './styles'
import { ButtonUpdateStatus } from '../../../components/Dashboard/Button/ButtonUpdateStatus'
import { CalculateValueTotal } from '../../../utils/CalculateValueTotal'
import { FiTrash } from 'react-icons/fi'

type OrderData = {
    id: number,
    client: string,
    waiter: string,
    createdAt: string,
    desk: number,
    items: Item[] | []
}

type Item = {
    name: string,
    description: string,
    anotation?: string,
    amount: number,
    price: string,
    isDone: boolean
}

type Status = 'Pronto' | 'Preparando' | 'Aguardando'

export default function Orders() {
    const { getOrdersByStatus, getOrders, orders } = useOrders()

    const [ordersList, setOrdersList] = useState([] as OrderData[])
    const [selectOrder, setSelectOrder] = useState({} as OrderData)
    const [isOrderFinished, setIsOrderFinished] = useState(false)
    const [status, setStatus] = useState('Preparando' as Status)
    const [costTotal, setCostTotal] = useState('0,00')

    // Carrega a lista de pedidos de acordo com o status //
    useEffect(() => {
        const data = getOrdersByStatus(status)
        setOrdersList(data)
    }, [getOrdersByStatus, status, orders])

    // Se todos os items estiverem prontos, botão Finalizar ficará ativo //
    useEffect(() => {
        if (selectOrder.id && status === 'Preparando') {
            const allOrderIsDone = selectOrder.items.every(item => item.isDone)

            setIsOrderFinished(allOrderIsDone)
        } else {
            setIsOrderFinished(true)
        }
    }, [selectOrder.items])

    function handleLoadDataOfOrder(index: number) {
        const data = ordersList[index]
        setSelectOrder(data)
        setCostTotal(CalculateValueTotal(data.items))
    }

    // Funcionalidade de excluir um item da lista de pedidos //
    async function handleDeleteItemOfOrder(id: number) {
        const newListOfItems = selectOrder.items.filter((item, index) => index !== id && item)
        const newData = {
            ...selectOrder,
            items: newListOfItems
        } as OrderData

        await api.put(`orders/${selectOrder.id}`, newData).then(res => {
            getOrders()
            setSelectOrder(newData)
            toast.success('Item deletado !')
        }).catch(_ => toast.error('Não foi possível excluir o item, tente novamente!'))
    }

    async function handleFinishItem(id: number) {
        const itemsUptaded = selectOrder.items.map((item, index) => {
            let data = item
            if (index === id) {
                data = {
                    ...item,
                    isDone: true
                }
            }
            return data
        })

        await api.put(`orders/${selectOrder.id}`, { ...selectOrder, items: itemsUptaded })
            .then(res => {
                toast.success('Item Finalizado')
                setSelectOrder(res.data)
            })
            .catch(_ => toast.error('Não foi possível finalizar o item'))
    }

    async function handleFinishOrder() {
        await api.put(`orders/${selectOrder.id}`, {
            ...selectOrder,
            status: 'Pronto',
        }).then(_ => {
            getOrders()
            setSelectOrder({} as OrderData)
            toast.success("Pedido finalizado!")
        }).catch(_ => toast.error('Não foi possível finalizar o pedido'))
    }

    async function handleDeleteOrder() {
        try {
            await api.delete(`orders/${selectOrder.id}`)
                .then(_ => {
                    getOrders()
                    setSelectOrder({} as OrderData)
                    toast.success("Pedido excluído!")
                })
        } catch (_) {
            return toast.error('Erro durante o processamento!')
        }
    }

    async function handlePrepareOrder() {
        await api.put(`orders/${selectOrder.id}`, {
            ...selectOrder,
            status: 'Preparando'
        })
            .then(_ => {
                toast('Preparando...')
                setSelectOrder({} as OrderData)
                getOrders()
            })
            .catch(_ => toast.error('Erro durante o processamento'))
    }

    return (
        <Container statusStyle={status}>
            <Navbar />

            <main>
                <Information
                    title='Gerenciamento de Pedidos'
                    description='Bem-vindo ao painel de gerenciamento dos pedidos, aqui você poderá visualizar e controlar todo fluxo de entrada
                    e saída de pedidos vindo dos Garçons.'
                    heroImage={HeroImage}
                />

                <section>

                    {/* NAVBAR */}
                    <div className='orders-id'>
                        <h1>Pedidos</h1>

                        <div>
                            <h2>Comanda</h2>

                            <ul>
                                {
                                    ordersList.map((order, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleLoadDataOfOrder(index)}
                                            className={selectOrder.id === order.id ? 'selected' : ''}>
                                            {order.id}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* PEDIDO DETALHADO */}
                    <Order statusStyle={status}>
                        <header>
                            <h1>Detalhes</h1>

                            <SelectStatus options={StatusList} status={status} onSelectOption={(value) => {
                                setStatus(value)
                                setSelectOrder({} as OrderData)
                            }} />

                        </header>

                        <div className='content'>
                            {
                                selectOrder.id ? (
                                    <>
                                        <Details statusStyle={status}>
                                            <div className='details-left'>
                                                <h2>
                                                    {`Nº ${selectOrder.id}`}
                                                    <button onClick={handleDeleteOrder}>
                                                        <FiTrash size='16' />
                                                    </button>
                                                </h2>

                                                <p>Cliente: <strong>{selectOrder.client}</strong></p>
                                                <p>Atendente: <strong>{selectOrder.waiter}</strong></p>
                                                <span>Data de abertura: <strong>11/09 ás 12:01</strong></span>
                                            </div>

                                            <div className='details-right'>
                                                <p>Valor: <strong>R$ {costTotal}</strong></p>

                                                <p>Mesa: <strong>{selectOrder.desk}</strong></p>

                                                <ButtonUpdateStatus
                                                    status={status}
                                                    disabled={!isOrderFinished || status === 'Pronto'}
                                                    onClick={status === 'Aguardando' ? (handlePrepareOrder) : (handleFinishOrder)}
                                                />
                                            </div>

                                        </Details>

                                        <Items statusStyle={status}>
                                            <div className='items-head'>
                                                <h2>Pedido: </h2>
                                                <span>{`${selectOrder.items?.length} itens`}</span>
                                            </div>

                                            <ul className='items-list'>
                                                {
                                                    selectOrder.items.map((item, index) => (
                                                        <OrderItems
                                                            key={index}
                                                            amount={item.amount}
                                                            name={item.name}
                                                            description={item.description}
                                                            anotation={item?.anotation}
                                                            onDeleteClick={() => handleDeleteItemOfOrder(index)}
                                                            onFinishClick={() => handleFinishItem(index)}
                                                            isDone={item.isDone}
                                                        />
                                                    ))
                                                }
                                            </ul>
                                        </Items>
                                    </>
                                ) : (
                                    <NoOrders>
                                        <MdWarningAmber size='160' />
                                        <h1>Sem resultados</h1>
                                        <p>
                                            Para visualizar os detalhes de uma pedido,
                                            basta selecionar um dos números a esquerda.
                                        </p>
                                    </NoOrders>
                                )
                            }

                        </div>
                    </Order>
                </section>
            </main>
        </Container>
    )
}