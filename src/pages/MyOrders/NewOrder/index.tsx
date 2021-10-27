import { useEffect, useState } from 'react'
// Utils //
import GenerateRandonNumber from '../../../utils/GenerateRandonNumber'
// Components //
import { Button } from '../../../components/MyOrders/Button'
import { Input } from '../../../components/MyOrders/Inputs/General'
import { ItemList } from '../../../components/MyOrders/ItemList'
import { OrderPage } from '../../../components/MyOrders/OrderPage'
// Images //
import { FiChevronRight, FiPlus, FiTrash2 } from 'react-icons/fi'
import FoodInService from '../../../assets/icons/plate-in-service.svg'
import Note from '../../../assets/icons/note.svg'
import Number from '../../../assets/icons/number.svg'
// Styles //
import { Box, Summary } from './styles'

type Item = {
    item: string,
    anotation?: string,
    price: number,
    unit: number
}

// CRIAR STEP //
// STEP DE 2 PASSOS //

export default function NewOrder() {
    const price = GenerateRandonNumber(100)// Temporario //
    const [food, setFood] = useState('')
    const [anotation, setAnotation] = useState('')
    const [units, setUnits] = useState(1)
    const [items, setItems] = useState<Item[]>([])

    const [total, setTotal] = useState(0)

    // Atualiza o valor total do pedido //
    useEffect(()=> {
        const value = items.map(item => 
            item.price * item.unit
            ).reduce((acc, price) => acc + price, 0)

        setTotal(value)
    }, [items])

    // Adiociona um item na tabela //
    function addItem(){
        const item = {
            item: food,
            anotation: anotation ? anotation : '',
            unit: units,
            price: price,
        }
        
        setItems([...items, item])
        resetFields()
    }
    // Remove um item da tabela //
    function removeItem(id: number){
        const newList = items.filter((item, index) => {
            return index !== id ? item : null
        })

        setItems(newList)
    }
    // Reseta os inputs e/ou tabela //
    function resetFields(includeTable: boolean = false){
        setAnotation('')
        setUnits(1)
        setFood('') // Temporário //

        if (includeTable) setItems([])
    }

    return (
        <OrderPage title='Nova comanda'>
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
                        onChange={(e) => setUnits(parseInt(e.target.value))}/>

                    <Button backgroundColor="#10A610" height={3.5} onClick={addItem} type='button'>
                        Adicionar <FiPlus size={16} color="#FFF" />
                    </Button>
                </form>

                <Summary>
                    <h2>Pedido</h2>
                    <h2>Total: R$ {total}</h2>
                </Summary>

                <ItemList items={items} onRemoveItem={removeItem}/>

                <div>
                    <Button backgroundColor='#C4C4C4' onClick={() => resetFields(true)}>
                        <FiTrash2 size={20} />
                        Limpar
                    </Button>
                    <Button backgroundColor='#4C8BEA'>
                        Próximo
                        <FiChevronRight size={24} />
                    </Button>
                </div>
            </Box>
        </OrderPage>
    )
}