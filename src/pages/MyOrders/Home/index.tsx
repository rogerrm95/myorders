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
import HandIcon from '../../../assets/icons/hand.png'
import {FiAlertCircle} from 'react-icons/fi'
// Styles //
import { Container, NotificationBox } from './styles'

// VERIFICAR SE O USUÁRIO ESTÁ AUTENTICADO //
// SENÃO ESTIVER, O REDIRECIONAR PARA A PÁGINA DE LOGIN //

export default function Home() {
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
                <ItemMenu image={PlateImage} path='/order/new' title="Nova Comanda" legend="Criar um novo pedido" icon={PlusIcon} />
                <ItemMenu image={ScreenIcon}  path='/orders' title="Gerenciar pedidos" legend="Gerenciar os pedidos de hoje" icon={RefreshIcon}/>
                <ItemMenu image={HatImage} path='/admin/home' title="Cozinha" legend="Acessar área administrativa" icon={HatIcon}/>

                <NotificationBox>
                    <hr />

                    <div className='info'>
                        <p>Pedidos <br /> Finalizados</p>

                        <div className='orders-done'>
                            <span>05</span>
                            <img src={HandIcon} alt="Mão servindo" />
                        </div>
                    </div>

                    <div className='warning'>
                        <FiAlertCircle size={20} color='#6E787C'/>
                        <span>
                            Há pedidos aguardando para serem entregue na cozinha
                        </span>
                    </div>
                </NotificationBox>
            </main>
        </Container>
    )
}