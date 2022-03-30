import { api } from "../services/api"
import { uid } from 'uid/secure'

type Food = {
    id: number | string,
    name: string,
    description: string,
    price: string,
    category: string,
    isActive: boolean,
}

export const useFoods = () => {

    // GET FOODS //
    async function getAllFoods(onlyActive?: boolean) {

        const response: Food[] = await api.get('/foods')
            .then(res => res.data)

        return onlyActive ? response.filter(food => food.isActive && food) : response
    }

    // GET FOOD BY ID //
    async function getFoodByID(id: number | string) {
        const data = await api.get(`/foods/${id}`).then(res => res.data)

        return data
    }

    // POST FOODS - NEW //
    async function createNewFood(data: Food) {
        const uniqueID = uid(5)

        const response: Food[] = await api.post(`/foods`, { ...data, id: uniqueID })

        return response
    }

    // POST FOODS - UPDATE //
    async function updateFood(data: Food) {

        const response: Food[] = await api.patch(`/foods`, data)

        return response
    }

    // DELETE FOOD //
    async function deleteFood(id: number | string) {
        await api.delete(`/foods/${id}`)
    }

    return { getAllFoods, getFoodByID, createNewFood, updateFood, deleteFood }
}