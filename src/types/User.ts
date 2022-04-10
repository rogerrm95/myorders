export default interface User {
    id: number | string,
    name: string,
    lastname: string,
    birthday: string,
    email: string,
    phone?: string,
    job: string,
    genre: string,
    amountSales: number,
    isActive: boolean,
}

export interface UserUpdateProps {
    id: number | string | null,
    name: string,
    lastname: string,
    birthday: string,
    email: string,
    phone: string | null,
    job: string,
    genre: string,
    password: string | null
}
