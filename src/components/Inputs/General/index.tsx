import { InputHTMLAttributes, useRef } from "react";

import { Container, ImageBox } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    imageSrc?: string,
    gridAreaName?: string
}

export function Input({ label = '', imageSrc, gridAreaName, ...rest }: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    // Foca no input ao clicar no ícone //
    function activeFocus() {
        inputRef?.current?.focus()
    }

    return (
        <Container gridAreaName={gridAreaName}>
            {
                label && <span>{label}</span>
            }

            <div>
                <ImageBox onClick={activeFocus}>
                    <img src={imageSrc} alt={label} />
                </ImageBox>
                <input ref={inputRef} {...rest} />
            </div>
        </Container>
    )
}