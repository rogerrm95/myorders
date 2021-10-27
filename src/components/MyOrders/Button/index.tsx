import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string,
    backgroundColor?: string,
    height?: number,
    children: ReactNode
}

export function Button({ color = '#FFF', backgroundColor = '#000', height = 4, children, ...rest }: ButtonProps) {
    return (
        <Container color={color} bgColor={backgroundColor} height={height} {...rest}>
            <span>
                {
                    children
                }
            </span>
        </Container>
    )
}