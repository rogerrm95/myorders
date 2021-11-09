import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { CalculateValueTotal } from '../../../../utils/CalculateValueTotal'
// Hook //
import { useStepper } from '../../../../hooks/useStepper'
// Images //
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import FoodInService from '../../../../assets/icons/plate-in-service.svg'
import Note from '../../../../assets/icons/note.svg'
import Number from '../../../../assets/icons/number.svg'
// Components //
import { Button } from '../../Button'
import { Input } from '../../Inputs/General'
import { ItemList } from '../../ItemList'
// Styles //
import { Box, Summary } from './styles'
// Schema - Validação //
import { Step1Schema } from './schema'
import { AutoComplete } from '../../Inputs/AutoComplete'
import { api } from '../../../../services/api'

type Food = {
    id: number,
    name: string,
    price: string,
    category: string,
    description: string,
    isDone: boolean
}

// Etapa 1: Adicionar itens ao pedido //
export function Step1() {
    const { order, onNextPage, updateOrder } = useStepper()

    const [foods, setFoods] = useState([] as Food[]) // Lista dos itens vindo da API //
    const [food, setFood] = useState({} as Food)
    const [anotation, setAnotation] = useState('')
    const [units, setUnits] = useState(1)
    const [total, setTotal] = useState('0')
    const [hasClean, setHasClean] = useState(false)
    

    // Irá buscar todos os pratos cadastrados no sistema //
    useEffect(() => {
        async function getAPIAllFoods() {
            const data = await api.get('/foods').then(res => res.data)
            setFoods(data)
        }

        getAPIAllFoods()
    }, [])

    // Calculará o preço total do pedido //
    useEffect(() => {
        if (order.items) {
            const value = CalculateValueTotal(order.items)

            setTotal(value)
        }
    }, [order.items])

    // Adiociona um item na tabela //
    async function handleAddItem() {
        const item = {
            food: food.name,
            anotation: anotation ? anotation : '',
            amount: units,
            price: food.price,
            description: food.description,
            isDone: false
        }

        // Validação dos dados //
        await Step1Schema.validate({ ...item }, { abortEarly: false })
            .then(_ => {
                const newList = order.items ? [...order.items, item] : [item]
                updateOrder(newList)
                handleResetFields()
            })
            .catch(err => {
                err.errors.map((error: string) => (
                    toast.warning(error)
                ))
            })
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
        setFood({} as Food)
        setHasClean(!hasClean)
    }

    return (
        <Box>
            <form>
                <AutoComplete
                    gridAreaName='food'
                    imageSrc={FoodInService}
                    placeholder='Selecione os pratos ou bebidas...'
                    items={foods}
                    onSelectedChange={setFood}
                    clearData={hasClean}/>
                
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