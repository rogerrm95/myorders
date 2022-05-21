// Hooks //
import { useState } from 'react'
import Logo from '../../../../../assets/logo-full.png'
// Styles //
import { Container } from './styles'

type UserLocalStorage = {
    username: string,
    job: string
}

export function Header() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser] = useState<UserLocalStorage | null>(() => {
        const storageJSON = localStorage.getItem('@my-orders')

        if (storageJSON) {
            const storage = JSON.parse(storageJSON)

            return {
                username: `${storage.name} ${storage.lastname}`,
                job: storage.job
            }
        }

        return null
    })

    return (
        <Container>
            {
                !!user && (
                    <div className='wrap-shadow'>
                        <div className='wrap'>
                            <p>{user.username}</p>
                            <span>{user.job}</span>
                        </div>
                    </div>
                )
            }

            <img src={Logo} alt="My orders" />

        </Container>
    )
}
