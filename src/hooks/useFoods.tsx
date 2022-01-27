import { api } from "../services/api"

type Food = {
    name: string,
    description: string,
    price: string,
    category: string,
    isActive: boolean,
    id: number
}

export const useFoods = () => {

    // GET FOODS //
    async function getAllFoods(onlyActive?: boolean) {

        const response: Food[] = await api.get('/foods')
            .then(res => res.data)

        return onlyActive ? response.filter(food => food.isActive && food) : response
    }

    return { getAllFoods }
}