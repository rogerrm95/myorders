import { useEffect, useState } from 'react'
import { useOrders } from '../../../hooks/useOrders'
// Components //
import { InformationHeader as Information } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
// Icons & Images //
import HeroImage from '../../../assets/orders-hero.svg'
import {MdOutlineNoteAlt} from 'react-icons/md'
// Styles //
import { Container, Items, Order, Details } from './styles'

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

export default function Orders() {
    const { getOrdersByStatus } = useOrders()

    const [ordersList, setOrdersList] = useState([] as OrderData[])
    const [status, setStatus] = useState('waiting')

    useEffect(() => {
        const data = getOrdersByStatus(status)
        setOrdersList(data)
    }, [getOrdersByStatus])

    return (
        <Container>
            <Navbar />

            <main>
                <Information
                    title='Gerenciamento de Pedidos'
                    description='Bem-vindo ao painel de gerenciamento dos pedidos, aqui você poderá visualizar e controlar todo fluxo de entrada
                    e saída de pedidos vindo dos Garçons.'
                    heroImage={HeroImage}
                />

                <section>
                    <div className='orders-id'>
                        <h1>Pedidos</h1>

                        <div>
                            <h2>Comanda</h2>

                            <ul>
                                {
                                    ordersList.map(order => <li>{order.id}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                    <Order className='order'>
                        <header>
                            <h1>Detalhes</h1>
                            <p>Status: Aguardando</p>
                        </header>

                        <div>
                            <Details>

                                <div className='details-left'>
                                    <h2>
                                        Nº 3000
                                        <button>
                                            ...
                                        </button>
                                    </h2>
                                    
                                    <p>Cliente: <strong>NOME</strong></p>
                                    <p>Atendente: <strong>NOME_ATENDENTE</strong></p>
                                    <span>Data de abertura: <strong>11/09 ás 12:01</strong></span>
                                </div>

                                <div className='details-right'>
                                    <p>Valor: <strong>R$ 0,00</strong></p>
                                    <p>Mesa: <strong>00</strong></p>
                                    <button className='button-finish'>
                                        Finalizar
                                        <MdOutlineNoteAlt size='24'/>
                                    </button>
                                </div>

                            </Details>

                            <Items>
                                <div className='items-head'>
                                    <h2>Pedido: </h2>
                                    <span>05 Itens</span>
                                </div>

                                <ul className='items-list'>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </Items>
                        </div>
                    </Order>
                </section>
            </main>
        </Container>
    )
}