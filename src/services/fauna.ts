import { Client } from 'faunadb'

export const Fauna = new Client({
    secret: process.env.REACT_APP_FAUNADB_KEY as string,
    domain: 'db.fauna.com'
})