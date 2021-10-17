import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string,
    children: ReactNode
}

export function Button({ color = '#FFF', children, ...rest }: ButtonProps) {
    return (
        <Container {...rest} color={color}>
            <span>
                {
                    children
                }
            </span>
        </Container>
    )
}