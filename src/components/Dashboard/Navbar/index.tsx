import { MdFastfood, MdHome, MdNoteAlt, MdTabletAndroid } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

import { NavMenuItem } from '../NavMenuItem' // Component //
// Images //
import Logo from '../../../assets/logo-full.png'
import LogoMini from '../../../assets/logo-tiny.png'
import FooterImage from '../../../assets/footer.png'

import { Container } from './styles' // Styles //
import { useState } from 'react'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Container>
            <header>
                <img src={Logo} alt="Logo" className='logo-full'/>
                <img src={LogoMini} alt="Logo" className='logo-mini'/>
                <FiMenu size={32} color="#FFF" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                <hr />
            </header>

            <nav className={isMenuOpen ? 'menu-open' : ''}>
                <NavMenuItem name='Dashboard' href="/admin/home" Icon={MdHome} />
                <NavMenuItem name='Pedidos' href="/admin/pedidos" Icon={MdNoteAlt} />
                <NavMenuItem name='Usuários' href="/admin/usuarios" Icon={FaUsers} />
                <NavMenuItem name='Pratos' href="/admin/pratos" Icon={MdFastfood} />
                <NavMenuItem name='MyOrders' href="/" Icon={MdTabletAndroid}/>
            </nav>

            <footer>
                <img src={FooterImage} alt="Curvas" />
            </footer>
        </Container>
    )
}