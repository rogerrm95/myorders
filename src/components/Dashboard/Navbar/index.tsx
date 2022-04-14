import { MdFastfood, MdHome, MdNoteAlt, MdTabletAndroid } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

import { NavMenuItem } from '../NavMenuItem' // Component //
// Images //
import Logo from '../../../assets/logo-full.png'
import LogoMini from '../../../assets/logo-tiny.png'
import FooterImage from '../../../assets/footer.png'

import { Container } from './styles' // Styles //
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

export function Navbar() {
    const { location } = useHistory()
    const navRef = useRef<HTMLElement>(null)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [headerTitle, setHeaderTitle] = useState('') // Disponível apenas no mobile //

    // Exibe o nome da página atual //
    useEffect(() => {
        const path = location.pathname.split('/').pop()

        if (path) {
            const pageTitle = path[0].toUpperCase() + path.substring(1)

            document.title = `MyOrders | ${pageTitle}`
            setHeaderTitle(pageTitle)
        }
    }, [])

    // Fecha o menu ao clicar fora dele //
    useEffect(() => {
        const checkIfMouseClickedOutside = (e:any) => {
          // Se o menu estiver aberto e o evento de clique não for no menu //
          // Então o menu é fechado //
          if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
            setIsMenuOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfMouseClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfMouseClickedOutside)
        }
      }, [isMenuOpen])

    return (
        <Container>
            <header>
                <img src={Logo} alt="Logo" className='logo-full' />
                <img src={LogoMini} alt="Logo" className='logo-mini' />
                <h2>{headerTitle}</h2>
                <FiMenu size={32} color="#FFF" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <hr />
            </header>

            <nav className={isMenuOpen ? 'menu-open' : ''} ref={navRef}>
                <NavMenuItem name='Dashboard' href="/dashboard" Icon={MdHome} />
                <NavMenuItem name='Pedidos' href="/dashboard/pedidos" Icon={MdNoteAlt} />
                <NavMenuItem name='Usuários' href="/dashboard/usuarios" Icon={FaUsers} />
                <NavMenuItem name='Pratos' href="/dashboard/pratos" Icon={MdFastfood} />
                <NavMenuItem name='MyOrders' href="/" Icon={MdTabletAndroid} />
            </nav>

            <footer>
                <img src={FooterImage} alt="Curvas" />
            </footer>
        </Container>
    )
}