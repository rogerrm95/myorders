import React, { useEffect, useState } from "react";
import { FaAngleDown } from 'react-icons/fa'
// Styles //
import { Container, ImageBox } from "./style";

interface SelectProps {
    options: UsersData[],
    value: string,
    imageSrc?: string,
    gridAreaName?: string,
    setWaiter: (value: string) => void,
}

type UsersData = {
    id: number,
    name: string,
    lastname: string
}

// Select personalizado //
export function Select({ gridAreaName, imageSrc, value, options, setWaiter, ...rest }: SelectProps) {
    const [selected, setSelected] = useState(value)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setWaiter(selected)
    }, [selected])

    // Armazena no state o valor correspondente ao que o usuário clicou //
    function handleSelectOption(index: number) {
        setSelected(`${options[index].name} ${options[index].lastname}`)
    }

    return (
        <Container gridAreaName={gridAreaName} onClick={() => setIsVisible(!isVisible)}>
            <ImageBox>
                <img src={imageSrc} alt={"Icone"} />
            </ImageBox>

            <button className='select-button' type='button' >
                <p>
                    {
                        selected ? selected : "Selecionar atendente..."
                    }
                </p>

                {
                    isVisible && (
                        <ul className='options'>
                            {
                                options.map((option, index) => (
                                    <li key={index} onClick={() => handleSelectOption(index)}>
                                        {`${options[index].name} ${options[index].lastname}`}
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }

                <div className='arrow-down'>
                    <FaAngleDown size={24} color='#45545A' />
                </div>
            </button>
        </Container >
    )
}
