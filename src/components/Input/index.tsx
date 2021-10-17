import { InputHTMLAttributes, useEffect, useRef } from "react";
import { IconType } from "react-icons";

import { Container, IconBox } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    Icon: IconType,
    colorIcon?: string,
    sizeIcon?: number,
    onChange?: () => void
}

export function Input({ label, Icon, colorIcon, sizeIcon = 16, onChange, ...rest }: InputProps) {

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
                    <Icon size={sizeIcon} color={colorIcon} />
                </IconBox>
                <input ref={inputRef} {...rest} />
            </div>
        </Container>
    )
}