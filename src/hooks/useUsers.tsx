import { Fauna } from "../services/fauna"
import { query as q } from "faunadb"

type usersData = {
    data: User[]
}

type User = {
    data: {
        name: string,
        lastname: string,
        birthday: string,
        phone: string,
        email: string,
        job: string,
        genre: string,
        amountSales: number,
    },
    ref: {
        value: {
            id: number
        }
    }
}

export const useUsers = () => {

    // GET USER //
    async function getAllUsers() {

        const usersDB = await Fauna.query<usersData>(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('all_users')
                    )
                ),
                q.Lambda('userRef',
                    q.Get(
                        q.Var('userRef')
                    )
                )
            )
        )

        const users = usersDB.data.map(user => {
            return {
                ...user.data,
                id: user.ref.value.id
            }
        })

        return users
    }

    return { getAllUsers }
}

/* CREATE USER 
        const data = await Fauna.query(
        q.Create(
            q.Collection('users'),
            {
                data: { ...user }
            }
        )
    ).then(res => console.log(res))
*/