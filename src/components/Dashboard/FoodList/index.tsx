/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useFoods } from '../../../hooks/useFoods'
import { FiEdit, FiTrash2 } from 'react-icons/fi' // Icones //
import { UpdateFoodModal } from '../Modal/UpdateFood'
import { DeleteFoodModal } from '../Modal/DeleteFood'
// Types //
import { Food } from '../../../types/Food'
// Styles //
import { Container } from './styles'
import { Spinner } from '../../MyOrders/Spinner'

type FoodListProps = {
    category: string,
}

export function FoodList({ category }: FoodListProps) {
    const { getAllFoods, foods } = useFoods()

    const [activeFoodUpdating, setActiveFoodUpdating] = useState({} as any)
    const [foodList, setFoodList] = useState<Food[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // Modal //
    const [newFoodModalIsOpen, setNewModalFoodIsOpen] = useState(false)
    const [deleteFoodModalIsOpen, setDeleteModalFoodIsOpen] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        async function loadFoodList() {
            await getAllFoods().then(_ => setIsLoading(false))
        }

        loadFoodList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const listFiltered = foods.filter(food => food.category === category)
        setFoodList(listFiltered)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, foods])

    function handleUpdateListOfFoods(newItem: Food) {
        const newList = foodList.map(food => food.id === newItem.id ? newItem : food)
        setFoodList(newList)
    }

    if (isLoading) return <Spinner />

    return (
        <Container>
            <table>
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
                        foodList.map((food, index) => (
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
                                        <button className='btn-delete' onClick={() => {
                                            setDeleteModalFoodIsOpen(!deleteFoodModalIsOpen)
                                            setActiveFoodUpdating(food)
                                        }}>
                                            <FiTrash2 size={20} color='#FFF' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                newFoodModalIsOpen && (
                    <UpdateFoodModal
                        values={activeFoodUpdating}
                        onModalClose={(e) => setNewModalFoodIsOpen(e)}
                        onUpdate={(updatedList) => handleUpdateListOfFoods(updatedList)}
                    />
                )
            }

            {
                deleteFoodModalIsOpen && (
                    <DeleteFoodModal
                        id={activeFoodUpdating.id}
                        onModalClose={(e) => setDeleteModalFoodIsOpen(e)}
                        onDelete={(newList) => setFoodList(newList)}
                    />
                )
            }


        </Container>
    )
}