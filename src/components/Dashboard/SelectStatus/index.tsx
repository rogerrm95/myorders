import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
// Styles //
import { Container } from "./styles";

type SelectStatusProps = {
    options: Status[],
    status: string,
    onSelectOption: (option: Status) => void
}

type Status = 'Pronto' | 'Preparando' | 'Aguardando'

// Componente Select para filtrar os pedidos de acordo com os status //
export function SelectStatus({ options, status, onSelectOption }: SelectStatusProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState(status)

    useEffect(() => {
        if (isOpen) {
            const popup = setInterval(() => {
                setIsOpen(!isOpen)
            }, 5000)

            return () => {
                clearInterval(popup)
            }
        }
    }, [isOpen])

    function handleSelectOption(index: number) {
        setOption(options[index])
        onSelectOption(options[index])
    }

    return (
        <Container>
            <p>Status:</p>

            <div className='select-options' onClick={() => setIsOpen(!isOpen)}>
                <span>{option}</span>

                {
                    isOpen && (
                        <ul>
                            {
                                options.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelectOption(index)}>
                                        {option}
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
                <FiChevronDown size='16' />
            </div>
        </Container>
    )
}