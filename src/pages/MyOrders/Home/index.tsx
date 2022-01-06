// Components //
import { HeaderHomePage as Header } from '../../../components/MyOrders/HeaderHomePage'
import { ItemMenu } from '../../../components/MyOrders/ItemMenu'
// Images & Icons //
import WaiterImage from '../../../assets/waiter.png'
import PlateImage from '../../../assets/icons/plates.png'
import ScreenIcon from '../../../assets/icons/screen.png'
import HatImage from '../../../assets/icons/chef-hat.png'
import PlusIcon from '../../../assets/icons/plus.svg'
import RefreshIcon from '../../../assets/icons/refresh.svg'
import HatIcon from '../../../assets/icons/hat.svg'
import { FiAlertTriangle } from 'react-icons/fi'
// Styles //
import { Container, NotificationBox } from './styles'
import { useEffect, useState } from 'react'
import { useOrders } from '../../../hooks/useOrders'

// VERIFICAR SE O USUÁRIO ESTÁ AUTENTICADO //
// SENÃO ESTIVER, O REDIRECIONAR PARA A PÁGINA DE LOGIN //

export default function Home() {

    const { getOrdersByStatus } = useOrders()
    const [amountOrdersToService, setAmountOrdersToService] = useState(0)

    // Exibe para o usuário a quantidade de pedidos que se encontram prontos para serem servidos //
    useEffect(() => {
        const orders = getOrdersByStatus('Pronto')

        setAmountOrdersToService(orders.length)
    }, [getOrdersByStatus])

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
                    <ItemMenu image={PlateImage} path='/order/new' title="Nova Comanda" legend="Criar um novo pedido" icon={PlusIcon} />
                    <ItemMenu image={ScreenIcon} path='/orders' title="Gerenciar pedidos" legend="Gerenciar os pedidos de hoje" icon={RefreshIcon} />
                    <ItemMenu image={HatImage} path='/admin/home' title="Cozinha" legend="Acessar área administrativa" icon={HatIcon} />
                </div>
            </main >
        </Container >
    )
}