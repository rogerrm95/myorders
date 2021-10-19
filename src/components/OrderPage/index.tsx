import { ReactNode } from 'react'
import { useHistory } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'

import Logo from './../../assets/logo-full.png'
import { Container, Header, Main } from './styles'

type OrderPageProps = {
    title: string,
    children: ReactNode
}

// Cria um estrutura em comum para as páginas no qual os garçons terão acesso //
export function OrderPage({ title, children }: OrderPageProps) {

    const { goBack } = useHistory()

    return (
        <Container>
            <Header>
                <button onClick={goBack}>
                    <FiArrowLeft size='24' color='#FFF' />
                </button>

                <h2>{title}</h2>

                <img src={Logo} alt="Logo" />
            </Header>

            <Main>
                {
                    children
                }
            </Main>
        </Container>
    )
}