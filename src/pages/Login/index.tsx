import { Container, Footer } from './styles'

// Images & Icons //
import ChefImage from './../../assets/chef.png'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
// Components //
import { InputLogin } from '../../components/Inputs/Login'
import { Button } from '../../components/Button'
import { HeaderHomePage } from '../../components/HeaderHomePage'

export default function Login() {
    return (
        <Container>

            <HeaderHomePage/>

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

                <form>
                    <InputLogin
                        label='E-mail'
                        Icon={FiMail}
                        colorIcon="#FFF"
                        sizeIcon={24}
                        type='email'
                        placeholder="nome_usuario@example.com.br" />
                    <InputLogin
                        label='Senha'
                        Icon={FiLock}
                        colorIcon="#FFF"
                        sizeIcon={24}
                        type='password'
                        placeholder="**************" />

                    <Button type="submit" color='#FFF' backgroundColor="#E84A5F" >
                        Entrar
                        <FiLogIn size='24' color='#FFF' />
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