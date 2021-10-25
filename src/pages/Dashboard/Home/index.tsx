import { Link } from 'react-router-dom'
// Components //
import { InformationHeader as Information } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
import { ActiveOrders } from '../../../components/Dashboard/ActiveOrders'
// Icons & Images //
import { MdFastfood } from 'react-icons/md'
import { FaCheckCircle, FaClock } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'
import HeroImage from '../../../assets/dashboard-hero.svg'

import { Container, ActiveOrdersContainer } from './styles' // Styles //

// temporario //
const activeList = [
    {
        id: 3001,
        client: 'Rogério Marques',
        desk: '04'
    },
    {
        id: 3002,
        client: 'Alberto de Souza',
        desk: '12'
    },
]

export default function Dashboard() {
    return (
        <Container>
            <Navbar />

            <Information title='Painel Administrativo' heroImage={HeroImage}>
                <p>
                    Gerencie todo o fluxo do seu restaurante por aqui, de maneira fácil e amigavél.<br />
                    Através deste painel você será capaz de visualizar a quantidade de pedidos realizados, gerenciar usuários, criar pratos e o principal
                </p>
            </Information>

            <main>
                <ActiveOrdersContainer>
                    <div className='top-label'>
                        <h1>
                            Pedidos Ativos
                            <MdFastfood size='32' />
                        </h1>
                        <Link to='/admin/pedidos'>Visualizar todos os pedidos</Link>
                    </div>

                    <div className='orders-container'>
                        <ActiveOrders orders={activeList} status='done' title='Pronto' Icon={FaCheckCircle} />
                        <ActiveOrders orders={activeList} status='preparing' title='Prepando' Icon={GiCookingPot} />
                        <ActiveOrders orders={activeList} status='waiting' title='Aguardando' Icon={FaClock} />
                    </div>
                </ActiveOrdersContainer>
            </main>
        </Container>
    )
}