import { InputHTMLAttributes, useRef } from "react";
import { IconType } from "react-icons";

import { Container, IconBox } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    Icon: IconType,
    Image?: string,
    colorIcon?: string,
}

export function InputLogin({ label, Icon, Image, colorIcon, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    // Foca no input ao clicar no ícone //
    function activeFocus(){
        inputRef?.current?.focus()
    }

    return (
        <Container>
            <span>{label}</span>

            <div>
                <IconBox onClick={activeFocus}>
                    <Icon size="24" color={colorIcon} />
                </IconBox>
                <input ref={inputRef} {...rest} />
            </div>
        </Container>
    )
}