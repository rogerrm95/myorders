import { api } from "../services/api"
import { uid } from 'uid/secure'
import { useState } from "react"

type Food = {
    id: number | string,
    name: string,
    description: string,
    price: string,
    category: string,
    isActive: boolean,
}

export const useFoods = () => {
    const [foods, setFoods] = useState<Food[]>([])

    // GET FOODS //
    async function getAllFoods(onlyActive?: boolean) {
        await api.get('/foods')
            .then(res => {
                const data = res.data as Food[]

                if (onlyActive) {
                    const filteredList = data.filter(food => food.isActive && food)
                    setFoods(filteredList)
                } else {
                    setFoods(data)
                }
            })

        return foods
    }

    // GET FOOD BY ID //
    async function getFoodByID(id: number | string) {
        const data = await api.get(`/foods/${id}`).then(res => res.data)

        return data
    }

    // POST FOODS - NEW //
    async function createNewFood(data: Food) {
        const uniqueID = uid(5)

        const newFood: Food = await api.post(`/foods`, { ...data, id: uniqueID }).then(res => res.data)

        return newFood
    }

    // POST FOODS - UPDATE //
    async function updateFood(data: Food) {
        const response: Food[] = await api.patch(`/foods`, data).then(res => res.data)

        return response
    }

    // DELETE FOOD //
    async function deleteFood(id: number | string) {
        await api.delete(`/foods/${id}`)
    }

    return { getAllFoods, getFoodByID, createNewFood, updateFood, deleteFood, foods }
}