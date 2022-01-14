import { Fauna } from "../services/fauna"
import { query as q } from "faunadb"

type foodsData = {
    data: Food[]
}

type Food = {
    data: {
        name: string,
        description: string,
        price: string,
        category: string,
        isActive: boolean,
    },
    ref: {
        value: {
            id: number
        }
    }
}

export const useFoods = () => {

    // GET FOODS //
    async function getAllFoods(onlyActive?: boolean) {

        const foodsDB = await Fauna.query<foodsData>(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('all_foods')
                    )
                ),
                q.Lambda('foodsRef',
                    q.Get(
                        q.Var('foodsRef')
                    )
                )
            )
        )

        const foods = foodsDB.data.map(food => {
            return {
                ...food.data,
                id: food.ref.value.id
            }
        })

        return onlyActive ? foods.filter(food => food.isActive && food) : foods
    }

    return { getAllFoods }
}