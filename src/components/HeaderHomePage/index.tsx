// Icons & Image //
import { FiLogOut } from 'react-icons/fi'
import Logo from './../../assets/logo-full.png'

import { Header } from './styles' // Styles //

export function HeaderHomePage() {

    const isVisible = false // Temporário //

    return (
        <Header>
            <img src={Logo} alt="My orders" />

            {
                isVisible && (
                    <div>
                        <p>
                            Olá, <br />Roger Marques
                        </p>

                        <a href='/'>
                            Sair
                            <FiLogOut size='16' />
                        </a>
                    </div>
                )
            }
        </Header>
    )
}
