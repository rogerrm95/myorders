// Components //
import { InformationHeader as Information } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
// Icons & Images //
import HeroImage from '../../../assets/orders-hero.svg'
// Styles //
import { Container } from './styles'
import { useEffect, useState } from 'react'
import { useOrders } from '../../../hooks/useOrders'

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

                    <div className='order'>
                        <header>
                            <h1>Detalhes</h1>
                            <p>Status: Aguardando</p>
                        </header>

                        <div className='order-details'>

                        </div>
                    </div>


                </section>
            </main>
        </Container>
    )
}