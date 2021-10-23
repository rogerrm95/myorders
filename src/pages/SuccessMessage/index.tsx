import { Redirect, useHistory,  } from 'react-router'
import {createBrowserHistory} from 'history'

import { FiHome, FiLayers } from 'react-icons/fi'
import SuccessImage from './../../assets/success.png'

import { Button } from '../../components/Button'

import { Container } from './styles'

type SuccessMessageProps = {
    title: string,
    legend: string
}

export default function SuccessMessage({ title, legend }: SuccessMessageProps) {
    const { push } = useHistory()

    if (!title && !legend) {
       return  <Redirect to='/home'/>
    }

    return (
        <Container>
            <img src={SuccessImage} alt="Imagem de Sucesso" />

            <div>
                <h1>{title}</h1>
                <span>{legend}</span>
            </div>

            <div>
                <Button backgroundColor="#50595C" height={4.5} onClick={() => push('/orders/all')}>
                    Visualizar pedidos
                    <FiLayers size="24" style={{ marginLeft: '24px' }} />
                </Button>
                <Button backgroundColor="#4C8BEA" height={4.5} onClick={() => createBrowserHistory().replace('/')}>
                    Página inicial
                    <FiHome size="24" style={{ marginLeft: '24px' }} />
                </Button>
            </div>
        </Container>
    )
}