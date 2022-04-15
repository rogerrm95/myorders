// Hooks //
import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
// Icons & Image //
import { FiLogOut } from 'react-icons/fi'
import Logo from '../../../assets/logo-full.png'
// Styles //
import { Header } from './styles'

export function HeaderHomePage() {
    const { signOut } = useAuth()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [username, setUsername] = useState<string | null>(() => {
        const storageJSON = localStorage.getItem('@my-orders')

        if (storageJSON) {
            const storage = JSON.parse(storageJSON)

            return `${storage.name} ${storage.lastname}`
        }

        return null
    })

    function handleLogout() {
        setUsername(null)
        signOut()
    }

    return (
        <Header>
            <img src={Logo} alt="My orders" />

            {
                !!username && (
                    <div>
                        <p>
                            Bem-vindo, <br />
                            <strong>{username}</strong>
                        </p>

                        <button onClick={handleLogout}>
                            <span>Sair</span>
                            <FiLogOut size='16' />
                        </button>
                    </div>
                )
            }

        </Header>
    )
}
