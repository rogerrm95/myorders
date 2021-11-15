import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { Container } from './styles'

interface ButtonUpdateStatusProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    status: 'Pronto' | 'Preparando' | 'Aguardando',
}

export function ButtonUpdateStatus({ status, ...rest }: ButtonUpdateStatusProps) {
    const [label, setLabel] = useState('')
    const [color, setColor] = useState('#d3d3d3')

    useEffect(() => {
        switch (status) {
            case 'Pronto':
                setLabel('Finalizado')
                break;

            case 'Preparando':
                setLabel('Finalizar')
                setColor('#73C273')
                break;
            default:
                setLabel('Preparar')
                setColor('#4C8BEA')
        }
    }, [status])

    return (
        <Container color={color} {...rest}>
            {
                label
            }
        </Container>
    )
}