import { Container, Footer } from './styles'

// Images & Icons //
import ChefImage from './../../assets/chef.png'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { Input } from '../../components/Input'
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
                    <Input
                        label='E-mail'
                        Icon={FiMail}
                        colorIcon="#FFF"
                        sizeIcon={24}
                        type='email'
                        placeholder="nome_usuario@example.com.br" />
                    <Input
                        label='Senha'
                        Icon={FiLock}
                        colorIcon="#FFF"
                        sizeIcon={24}
                        type='password'
                        placeholder="**************" />

                    <Button type="submit">
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