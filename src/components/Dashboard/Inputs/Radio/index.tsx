/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container } from './styles'

interface SelectProps {
    label: string,
    placeholder?: string,
    options: string[],
    value: string,
    onSelectChange: (value: string) => void
}

export function Radio({ label, options, value, onSelectChange }: SelectProps) {

    const [indexActive, setIndexActive] = useState(0)

    // Verifica se há valor selecionado - senão reseta o radio //
    useEffect(() => {
        !options.includes(value) && setIndexActive(0)
    }, [value])


    function handleSelectRadio(value: string, index: number) {
        setIndexActive(index)
        onSelectChange(value)
    }

    return (
        <Container>
            <span>
                {label}
            </span>

            <ul className="radio-group">
                {
                    options.map((option, index) => (
                        <li
                            key={index}
                            className={indexActive === index ? 'active' : 'disable'}
                            onClick={() => handleSelectRadio(option, index)}>
                            {option}
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}