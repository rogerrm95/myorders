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
    isActive: boolean
}