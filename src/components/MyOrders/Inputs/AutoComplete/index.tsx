/* eslint-disable react-hooks/exhaustive-deps */
import { InputHTMLAttributes, useEffect, useRef, useState } from "react"
// Component //
import { SuggestionItem } from '../../SuggestionItem';
// Icons //
import { FiX } from 'react-icons/fi'
// Styles //
import { Container, ImageBox, InputAutoComplete } from './styles'

interface AutoCompleteProps extends InputHTMLAttributes<HTMLInputElement> {
    items: Content[],
    imageSrc: string,
    label?: string,
    gridAreaName?: string,
    clearData: boolean,
    onSelectedChange: (suggestion: Content) => void
}

type Content = {
    id: number,
    name: string,
    price: string,
    category: string,
    description: string,
}

export function AutoComplete({
    items,
    label,
    imageSrc,
    gridAreaName,
    clearData,
    onSelectedChange,
    ...rest
}: AutoCompleteProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    const [suggestions, setSuggestions] = useState(items) // Lista de Sugestões //
    const [value, setValue] = useState('') // valor do input //
    const [selectedFood, setSelectedFood] = useState({
        id: 0, name: '', price: '', category: ''
    } as Content) // Dados do item selecionado //

    // Repassa sempre que houver uma seleção, o item selecionado para o componente Pai //
    useEffect(() => {
        onSelectedChange(selectedFood)
    }, [selectedFood])

    // Limpará o campo do Input sempre que for adicionado um item á lista de pedidos //
    useEffect(() => {
        handleClearSelection()
    }, [clearData])

    // Foca no input ao clicar no ícone //
    function activeFocus() {
        inputRef?.current?.focus()
    }

    // Função responsável por fechar a lista de sugestões ao selecionar um item //
    function handleClearSelection() {
        setSelectedFood({} as Content)
        setSuggestions([])
        setValue('')
    }

    // Função responsável por salvar no state o Item selecionado //
    function handleSelectSuggestion(suggestion: Content) {
        const selected = {
            id: suggestion.id,
            name: suggestion.name,
            price: suggestion.price,
            category: suggestion.category,
            description: suggestion.description,
        }

        setSelectedFood(selected)
        setSuggestions([])
    }

    //Função responsável por realizar a busca por correspondências //
    function onChangeFood(text: string) {
        const value = text.trim().toLocaleLowerCase()

        if (value.length > 0) {
            const listOfFoods = items.filter(item => (
                item.name.toLocaleLowerCase().includes(value) && item
            ))

            setSuggestions(listOfFoods)
        } else {
            setSuggestions([])
        }

        setValue(text)
    }

    return (
        <Container gridAreaName={gridAreaName}>

            {
                label && <span>{label}</span>
            }

            <InputAutoComplete>
                <ImageBox onClick={activeFocus}>
                    <img src={imageSrc} alt={label} />
                </ImageBox>

                {
                    selectedFood.name ?
                        (
                            <>
                                <input type='text' value={selectedFood.name} />
                                <FiX onClick={handleClearSelection} size='24' />
                            </>
                        ) :
                        (
                            <input
                                value={value}
                                ref={inputRef}
                                onChange={(e) => onChangeFood(e.target.value)}
                                {...rest} />
                        )
                }
                <div className='suggestion-list'>
                    {
                        suggestions.map((suggestion, index) => (
                            <SuggestionItem suggestion={suggestion} key={index} onClick={() => handleSelectSuggestion(suggestion)} />)
                        )
                    }
                </div>
            </InputAutoComplete>
        </Container>
    )
}