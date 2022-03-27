/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container } from './styles'


interface SelectProps {
    label: string,
    placeholder?: string,
    options: string[],
    value: string,
    onSelectChange: (value: string) => void
}

export function Select({ label, options, placeholder = 'Selecionar...', value, onSelectChange }: SelectProps) {

    const [isSelectedOption, setIsSelectedOption] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    // Verifica se há valor selecionado - senão reseta o field //
    useEffect(() => {
        !options.includes(value) && setSelectedOption(value)
    }, [value])

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
                    {selectedOption ? selectedOption : placeholder}
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
                                    setSelectedOption(option)
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