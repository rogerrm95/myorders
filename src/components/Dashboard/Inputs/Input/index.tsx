import { InputHTMLAttributes, useRef } from "react";
import { Container } from './styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
}

export function Input({ label, ...rest }: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    // Foca no input ao clicar no Label //
    function activeFocus() {
        inputRef?.current?.focus()
    }

    return (
        <Container>
            <span onClick={activeFocus}>
                {label}
            </span>

            <input {...rest} />
        </Container>
    )
}