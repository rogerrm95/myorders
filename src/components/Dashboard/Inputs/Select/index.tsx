import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container } from './styles'


interface SelectProps {
    label: string,
    placeholder?: string,
    options: string[]
}

export function Select({ label, options, placeholder = 'Selecionar...' }: SelectProps) {

    const [isSelectedOption, setIsSelectedOption] = useState(false)

    // Foca no input ao clicar no Label e abre as opções //
    function activeFocus() {
        setIsSelectedOption(!isSelectedOption)
    }

    return (
        <Container>
            <span onClick={activeFocus}>
                {label}
            </span>

            <div className="select-field">
                <span>
                    {placeholder}
                </span>

                <FiChevronDown size={24} />
            </div>
        </Container>
    )
}