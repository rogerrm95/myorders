import { MouseEvent, useEffect, useState } from 'react'
import { useOrders } from '../../../hooks/useOrders'
import { useAuth } from '../../../hooks/useAuth'
// Components //
import { Header } from './components/Header'
import { ItemMenu } from '../../../components/MyOrders/ItemMenu'
// Images & Icons //
import WaiterImage from '../../../assets/waiter.png'
import PlusIcon from '../../../assets/icons/plus.svg'
import RefreshIcon from '../../../assets/icons/refresh.svg'
import HatIcon from '../../../assets/icons/hat.svg'
import { FiAlertTriangle } from 'react-icons/fi'
// Styles //
import { Container, NotificationBox } from './styles'
import { useHistory } from 'react-router'

export default function Home() {
    const { getOrdersByStatus, orders } = useOrders()
    const { signOut } = useAuth()
    const { push } = useHistory()
    const [amountOrdersToService, setAmountOrdersToService] = useState(0)

    // Exibe o número total de pedidos Prontos //
    useEffect(() => {
        async function loadFinishedOrders() {
            const qtdOrdersToFinished = await getOrdersByStatus('Pronto').then(res => res.length)
            setAmountOrdersToService(qtdOrdersToFinished)
        }

        loadFinishedOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orders])

    function handleLogout(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()

        localStorage.removeItem('@my-orders')
        signOut()
        push('/login')
    }

    return (
        <Container>
            
            <Header />

            <section>
                <article>
                    <h1>
                        Página inicial
                    </h1>

                    <p>
                        Selecione um dos menus e mão na massa.
                    </p>
                </article>

                <img src={WaiterImage} alt="Garçom" />
            </section>

            <main>
                <NotificationBox hasOrders={!!amountOrdersToService}>
                    {
                        amountOrdersToService < 1 ?
                            (
                                <>
                                    <FiAlertTriangle color='#95A3A9' size={20} />
                                    <span>Não há pedidos a serem retirados</span>
                                </>
                            ) :
                            (
                                <>
                                    <FiAlertTriangle color='#FFF' size={20} />
                                    <span>Você possui {amountOrdersToService} prato(s) para retirada</span>
                                </>
                            )
                    }
                </NotificationBox>

                <div className='menu-group'>
                    <ItemMenu path='/order/new' title="Nova Comanda" legend="Criar um novo pedido" icon={PlusIcon} />
                    <ItemMenu path='/orders' title="Gerenciar pedidos" legend="Gerenciar os pedidos de hoje" icon={RefreshIcon} />
                    <ItemMenu path='/dashboard' title="Cozinha" legend="Acessar área administrativa" icon={HatIcon} />
                    <ItemMenu title="Cozinha" legend="Acessar área administrativa" icon={HatIcon} onClick={(e) => handleLogout(e)} />
                </div>
            </main >
        </Container >
    )
}