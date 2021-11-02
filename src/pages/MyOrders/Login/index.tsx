import { FormEvent, useState } from 'react'
// Components //
import { InputLogin } from '../../../components/MyOrders/Inputs/Login'
import { Button } from '../../../components/MyOrders/Button'
import { HeaderHomePage as Header } from '../../../components/MyOrders/HeaderHomePage'
// Images & Icons //
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import ChefImage from '../../../assets/chef.png'
// Styles //
import { Container, Footer } from './styles'
import { LoginSchema } from './schema'
import { toast } from 'react-toastify'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Realiza o Login do usuário //
    async function handleLogin(e: FormEvent){
        e.preventDefault()
        const user = {email, password}

        await LoginSchema.validate({...user}, {abortEarly: false})
            .then(_ => {
                // Função de Logar o usuário //
                // api.get('/autenticate', user)
                toast.success('Login Aceito')
            })
            .catch(err => {
                err.errors.map((error: string) => (
                    toast.warning(error)
                ))
            })
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
                    <InputLogin
                        label='E-mail'
                        Icon={FiMail}
                        colorIcon="#FFF"
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome_usuario@example.com.br" />
                    <InputLogin
                        label='Senha'
                        Icon={FiLock}
                        colorIcon="#FFF"
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="**************" />

                    <Button type="submit" color='#FFF' backgroundColor="#E84A5F">
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