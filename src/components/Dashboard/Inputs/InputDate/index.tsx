import { InputHTMLAttributes, useRef } from "react";
import { FaCalendar } from "react-icons/fa";
import { Container } from './styles'


interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
}

export function InputDate({ label, ...rest }: InputDateProps) {

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

            <div className="input-date">
                <FaCalendar size={24}/>
                <input ref={inputRef} {...rest} />
            </div>
        </Container>
    )
}