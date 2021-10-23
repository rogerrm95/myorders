// Components //
import { HeaderHomePage } from '../../components/HeaderHomePage'
import { ItemMenu } from '../../components/ItemMenu'

// Images & Icons //
import WaiterImage from './../../assets/waiter.png'
import PlateImage from './../../assets/icons/plates.png'
import NoteImage from './../../assets/icons/note.png'
import ScreenImage from './../../assets/icons/screen.png'
import HatImage from './../../assets/icons/chef-hat.png'
import PlusIcon from './../../assets/icons/plus.svg'
import RefreshIcon from './../../assets/icons/refresh.svg'
import NotificationIcon from './../../assets/icons/orders.svg'
import HatIcon from './../../assets/icons/hat.svg'

import { Container } from './styles' // Styles //
import { Link } from 'react-router-dom'
import SuccessMessage from '../SuccessMessage'

export default function Home() {
    const title = "Pedido Realizado"
    const legend = "O pedido foi devidamente encerrado"
    return (
        <Container>
            <HeaderHomePage />

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
                <ItemMenu image={PlateImage} path='/order/new' title="Nova Comanda" legend="Criar uma nova comanda" icon={PlusIcon} />
                <ItemMenu image={NoteImage}  path='/orders' title="Atualizar Comanda" legend="Atualizar um pedido ativo" icon={RefreshIcon}/>
                <ItemMenu image={HatImage} path='/dashboard' title="Cozinha" legend="Acessar o área administrativa da cozinha" icon={HatIcon}/>
            </main>
        </Container>
    )
}