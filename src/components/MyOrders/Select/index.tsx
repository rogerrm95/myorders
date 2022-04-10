/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaAngleDown } from 'react-icons/fa'
// Types //
import User from "../../../types/User";
// Styles //
import { Container, ImageBox } from "./style";

interface SelectProps {
    options: User[],
    value: {
        id: number,
        name: string
    },
    imageSrc?: string,
    gridAreaName?: string,
    onSelectChange: (value: {id: number, name: string}) => void
}

// Select personalizado //
export function Select({ gridAreaName, imageSrc, value, options, onSelectChange, ...rest }: SelectProps) {
    const [selectedWaiter, setSelectedWaiter] = useState(value)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        onSelectChange(selectedWaiter)
    }, [selectedWaiter])

    // Armazena no state o valor correspondente ao que o usuário clicou //
    function handleSelectOption(index: number) {
        setSelectedWaiter({
            id: options[index].id,
            name: `${options[index].name} ${options[index].lastname}`
        })
    }

    return (
        <Container gridAreaName={gridAreaName} onClick={() => setIsVisible(!isVisible)}>
            <ImageBox>
                <img src={imageSrc} alt={"Icone"} />
            </ImageBox>

            <button className='select-button' type='button' >
                <p>
                    {
                        selectedWaiter ? selectedWaiter.name : "Selecionar atendente..."
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
