import { EventHandler, FormEvent, useEffect, useState } from 'react'
import { useFoods } from '../../../hooks/useFoods' // Hook //
import { FiEdit, FiTrash2 } from 'react-icons/fi' // Icones //
import { Container } from './styles' // Styles //
import { category as categoryList } from '../../../utils/categoryList'
// Componentes //
import { Modal } from '../Modal'
import { Input } from '../Inputs/Input'
import { InputCash } from '../Inputs/InputCash'
import { Select } from '../Inputs/Select'
import { TextArea } from '../Inputs/TextArea'

type FoodListProps = {
    category: string,
}

type Foods = {
    name: string,
    description: string,
    price: string,
    isActive: boolean
}

export function FoodList({ category }: FoodListProps) {
    const { getAllFoods } = useFoods()
    const [foods, setFoods] = useState<Foods[]>([] as Foods[])
    const [newFoodModalIsOpen, setNewModalFoodIsOpen] = useState(true)

    // Novo Item de Menu //
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [categorySelected, setCategorySelected] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getFoodsByCategory()
    }, [category])

    async function getFoodsByCategory() {
        const data = (await getAllFoods()).filter(foods => foods.category === category)

        setFoods(data)
    }

    return (
        <Container>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {
                    foods.map((food, index) => (
                        <tr key={index}>
                            <td>{food.name}</td>
                            <td>
                                <span>
                                    {food.description}
                                </span>
                            </td>
                            <td>R$ {food.price}</td>
                            <td className={!food.isActive ? 'not-available' : ''}>
                                {food.isActive ? 'Ativo' : 'Indisponível'}
                            </td>
                            <td>
                                <div className='button-actions'>
                                    <button className='btn-edit'>
                                        <FiEdit size={20} color='#FFF' />
                                    </button>
                                    <button className='btn-delete'>
                                        <FiTrash2 size={20} color='#FFF' />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

            {
                newFoodModalIsOpen && (
                    <Modal title='Cadastrar novo item'>
                        <form action="submit">
                            <Input label='Nome' onChange={(e) => setName(e.target.value)}/>
                            <InputCash label='Preço' onChange={(e) => setPrice(e.target.value)}/>
                            <Select label='Categorias' options={categoryList} onSelectChange={(e) => setCategorySelected(e)}/>
                            <TextArea
                                label='Descrição'
                                hasMaxCaracters
                                maxLength={500}
                                placeholder='Descrição do item...'
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            {
                                // Radio Group //
                                // Botões //
                                // Separar o Modal //
                                // Modal Excluir pedido //
                            }

                        </form>
                    </Modal>
                )
            }


        </Container>
    )
}