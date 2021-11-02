import { ReactNode } from 'react'
import { useHistory } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'

import Logo from '../../../assets/logo-full.png'
import { Container, Header, Main } from './styles'
import { useStepper } from '../../../hooks/useStepper'

type OrderPageProps = {
    title: string,
    children: ReactNode
}

// Cria um estrutura em comum para as páginas no qual os garçons terão acesso //
export function OrderPage({ title, children }: OrderPageProps) {

    const { goBack } = useHistory()
    const { onPreviousPage, currentPage } = useStepper()

    function handleGoBack() {
        // Identifica se o usuário está no componente Stepper //
        // Se estiver, volta para a etapa anterior, senão volta uma página //
        if (currentPage > 1) {
            onPreviousPage()
        } else {
            goBack()
        }
    }

    return (
        <Container>
            <Header>
                <button onClick={handleGoBack}>
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