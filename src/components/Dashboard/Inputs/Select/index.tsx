import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container } from './styles'


interface SelectProps {
    label: string,
    placeholder?: string,
    options: string[],
    onSelectChange: (value: string) => void
}

export function Select({ label, options, placeholder = 'Selecionar...', onSelectChange }: SelectProps) {

    const [isSelectedOption, setIsSelectedOption] = useState(false)
    const [value, setValue] = useState('')

    // Foca no input ao clicar no Label e abre as opções //
    function activeFocus() {
        setIsSelectedOption(true)
    }

    function closeSelect() {
        setIsSelectedOption(!isSelectedOption)
    }

    return (
        <Container onClick={closeSelect}>
            <span onClick={activeFocus}>
                {label}
            </span>

            <div className="select-field">
                <span>
                    {value ? value : placeholder}
                </span>

                <FiChevronDown size={24} />
            </div>

            {
                isSelectedOption && (
                    <ul className="options">
                        {
                            options.map((option, index) => (
                                <li key={index} onClick={() => {
                                    onSelectChange(option)
                                    setValue(option)
                                }}>
                                    {
                                        option
                                    }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </Container>
    )
}