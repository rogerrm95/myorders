/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useFoods } from '../../../hooks/useFoods' // Hook //
import { FiEdit, FiTrash2 } from 'react-icons/fi' // Icones //
import { Container } from './styles' // Styles //
import { NewFoodModal } from '../Modal/NewFood'

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
    const [newFoodModalIsOpen, setNewModalFoodIsOpen] = useState(false)

    const [activeFoodUpdating, setActiveFoodUpdating] = useState({} as any)

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
                                    <button className='btn-edit' onClick={() => {
                                        setActiveFoodUpdating(food)
                                        setNewModalFoodIsOpen(!newFoodModalIsOpen)
                                    }}>
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
                    <NewFoodModal onModalClose={(e) => setNewModalFoodIsOpen(e)} values={activeFoodUpdating} />
                )
            }


        </Container>
    )
}