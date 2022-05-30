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
    const [foods, setFoods] = useState<Food[]>([] as Food[])

    // GET FOODS //
    async function getAllFoods(onlyActive?: boolean) {
        const response = await api.get('/foods')
            .then(res => {
                const data = res.data as Food[]

                if (onlyActive) {
                    const filteredList = data.filter(food => food.isActive && food)
                    setFoods(filteredList)
                    return filteredList
                } else {
                    setFoods(data)
                    return data
                }
            })

        return response
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
        const newListOfFood = [...foods, newFood]
        setFoods(newListOfFood)

        return newFood
    }

    // POST FOODS - UPDATE //
    async function updateFood(data: Food) {
        const response = await api.patch(`/foods`, data).then(res => {
            return res.data.data
        })

        return response as Food
    }

    // DELETE FOOD //
    async function deleteFood(id: number | string) {
        const response = await api.delete(`/foods/${id}`)

        return response
    }

    return { getAllFoods, getFoodByID, createNewFood, updateFood, deleteFood, foods }
}