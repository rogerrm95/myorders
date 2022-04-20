import { Client } from 'faunadb'

export const Fauna = new Client({
    secret: process.env.FAUNA_KEY as string,
    domain: 'db.us.fauna.com',
    scheme: 'https',
    port: 443
})