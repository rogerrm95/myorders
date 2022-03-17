import { useEffect, useState } from 'react'
import { useFoods } from '../../../hooks/useFoods'
import { Container } from './styles'

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
    const [foods, setFoods] = useState<Foods[]>([] as Foods[])
    const { getAllFoods } = useFoods()

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
                            
                            <td>Carregando...</td>
                        </tr>
                    ))
                }
            </tbody>
        </Container>
    )
}