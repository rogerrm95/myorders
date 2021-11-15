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
// Styles //
import { Container, ActiveOrdersContainer } from './styles' 

export default function Dashboard() {
    return (
        <Container>
            <Navbar />

            <main>
                <Information
                    title='Painel Administrativo'
                    description='Através deste painel você será capaz de visualizar a quantidade de pedidos realizados, 
                    gerenciar usuários, criar pratos e o principal.'
                    heroImage={HeroImage}
                />

                <ActiveOrdersContainer>
                    <div className='top-label'>
                        <h1>
                            Pedidos Ativos
                            <MdFastfood size='32' />
                        </h1>
                        <Link to='/admin/pedidos'>Visualizar todos os pedidos</Link>
                    </div>

                    <div className='orders-container'>
                        <ActiveOrders status='Pronto' title='Pronto' Icon={FaCheckCircle} />
                        <ActiveOrders status='Preparando' title='Prepando' Icon={GiCookingPot} />
                        <ActiveOrders status='Aguardando' title='Aguardando' Icon={FaClock} />
                    </div>
                </ActiveOrdersContainer>
            </main>
        </Container>
    )
}