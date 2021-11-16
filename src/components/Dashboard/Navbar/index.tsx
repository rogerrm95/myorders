import { MdFastfood, MdHome, MdNoteAlt, MdHistory } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'

import { NavMenuItem } from '../NavMenuItem' // Component //
// Images //
import Logo from '../../../assets/logo-full.png'
import FooterImage from '../../../assets/footer.png'

import { Container } from './styles' // Styles //

export function Navbar() {
    return (
        <Container>
            <header>
                <img src={Logo} alt="Logo" />
                <hr />
            </header>

            <nav>
                <NavMenuItem name='Dashboard' href="/admin/home" Icon={MdHome} />
                <NavMenuItem name='Pedidos' href="/admin/pedidos" Icon={MdNoteAlt} />
                <NavMenuItem name='Usuários' href="/admin/usuarios" Icon={FaUsers} />
                <NavMenuItem name='Pratos' href="/admin/pratos" Icon={MdFastfood} />
                <NavMenuItem name='MyOrders' href="/home" Icon={MdHistory} />
            </nav>

            <footer>
                <img src={FooterImage} alt="Curvas" />
            </footer>
        </Container>
    )
}