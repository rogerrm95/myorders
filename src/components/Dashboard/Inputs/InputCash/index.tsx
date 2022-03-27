import { InputHTMLAttributes, useRef } from "react";
import { Container } from './styles'


interface InputCashProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
}

export function InputCash({ label, ...rest }: InputCashProps) {

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

            <div className="input-cash">
                <span>R$</span>
                <input ref={inputRef} {...rest} />
            </div>
        </Container>
    )
}