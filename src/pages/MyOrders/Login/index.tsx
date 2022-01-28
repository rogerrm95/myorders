import { FormEvent, useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
// Utils //
import { toast } from 'react-toastify'
import { LoginSchema } from './schema'
// Components //
import { Input } from '../../../components/MyOrders/Inputs/General'
import { Button } from '../../../components/MyOrders/Button'
import { HeaderHomePage as Header } from '../../../components/MyOrders/HeaderHomePage'
// Images & Icons //
import { FiLogIn } from 'react-icons/fi'
import ChefImage from '../../../assets/chef.png'
import EmailIcon from '../../../assets/icons/mail.svg'
import PasswordIcon from '../../../assets/icons/lock.svg'
// Styles //
import { Container, Footer } from './styles'

export default function Login() {
    const { signIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Realiza o Login do usuário //
    async function handleLogin(e: FormEvent) {
        e.preventDefault()

        try {
            const user = { email, password }

            await LoginSchema.validate({ ...user }, { abortEarly: false })
                .then(_ => {
                    signIn(user)
                })
                .catch(err => {
                    err.errors.map((error: string) => (
                        toast.error(error)
                    ))
                })
        } catch {
            return toast.error('Erro durante o processamento')
        }
    }

    return (
        <Container>
            <Header />

            <section>
                <article>
                    <h1>
                        Bem-vindo, ao MyOrders
                    </h1>

                    <p>
                        Aqui você terá praticidade e agilidade nos seus pedidos.
                    </p>
                </article>

                <img src={ChefImage} alt="Cozinheiro" />
            </section>

            <main>
                <h1>
                    Login
                </h1>

                <form onSubmit={handleLogin}>
                    <Input
                        label='E-mail'
                        imageSrc={EmailIcon}
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome_usuario@example.com.br" />
                    <Input
                        label='Senha'
                        imageSrc={PasswordIcon}
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="**************" />

                    <Button type="submit" color='#FFF' backgroundColor="#45545A">
                        <span>
                            Entrar
                            <FiLogIn size='24' color='#FFF' />
                        </span>
                    </Button>
                </form>

                <Footer>
                    <span>
                        Problemas com seu acesso ?
                        <a href={'/'}>Clique aqui</a>
                    </span>
                </Footer>
            </main>
        </Container>
    )
}