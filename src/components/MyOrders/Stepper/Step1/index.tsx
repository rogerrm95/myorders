import { useEffect, useState } from 'react'
import GenerateRandonNumber from '../../../../utils/GenerateRandonNumber'
// Images //
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import FoodInService from '../../../../assets/icons/plate-in-service.svg'
import Note from '../../../../assets/icons/note.svg'
import Number from '../../../../assets/icons/number.svg'
// Components //
import { Button } from '../../Button'
import { Input } from '../../Inputs/General'
import { ItemList } from '../../ItemList'

import { Box, Summary } from './styles'
import { useStepper } from '../../../../hooks/useStepper'
import { CalculateValueTotal } from '../../../../utils/CalculateValueTotal'

type Item = {
    food: string,
    anotation?: string,
    price: string,
    amount: number
}

// Etapa 1: Adicionar itens ao pedido //
export function Step1() {
    const { order, onNextPage, updateOrder } = useStepper()

    const price = GenerateRandonNumber(100).toString() // Temporario //
    const [food, setFood] = useState('')
    const [anotation, setAnotation] = useState('')
    const [units, setUnits] = useState(1)

    const [total, setTotal] = useState('0')

    // Calculará o preço total do pedido //
    useEffect(() => {
        if (order.items) {
            const value = CalculateValueTotal(order.items)

            setTotal(value)
        }
    }, [order.items])

    // Adiociona um item na tabela //
    function handleAddItem() {
        const item = {
            food,
            anotation: anotation ? anotation : '',
            amount: units,
            price,
        } as Item

        const newList = order.items ? [...order.items, item] : [item]

        updateOrder(newList)
        handleResetFields()
    }
    // Remove um item da tabela //
    function handleRemoveItem(id: number) {
        const newList = order.items.filter((item, index) => {
            return index !== id && item
        })

        updateOrder(newList)
    }
    // Reseta os inputs e/ou tabela //
    function handleResetFields() {
        setAnotation('')
        setUnits(1)
        setFood('') // Temporário //
    }

    return (
        <Box>
            <form>
                <Input
                    gridAreaName="food"
                    imageSrc={FoodInService}
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    placeholder="Selecione os pratos ou bebidas..." />

                <Input
                    gridAreaName="obs"
                    imageSrc={Note}
                    label="Observação"
                    type='text'
                    value={anotation}
                    onChange={(e) => setAnotation(e.target.value)}
                    placeholder="Ex: Retirar cebolha, sem sal e etc... " />

                <Input
                    imageSrc={Number}
                    gridAreaName="unit"
                    label="Quantidade"
                    type='number'
                    min='1'
                    value={units}
                    onChange={(e) => setUnits(parseInt(e.target.value))} />

                <Button backgroundColor="#10A610" height={3.5} onClick={handleAddItem} type='button'>
                    Adicionar <FiPlus size={16} color="#FFF" />
                </Button>
            </form>

            <Summary>
                <h2>Pedido</h2>
                <h2>Total: R$ {total}</h2>
            </Summary>

            <ItemList items={order.items} onRemoveItem={handleRemoveItem} />

            <div>
                <Button backgroundColor='#4C8BEA' onClick={onNextPage}>
                    Próximo
                    <FiChevronRight size={24} />
                </Button>
            </div>
        </Box>
    )
}