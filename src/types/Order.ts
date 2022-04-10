export interface OrderType {
    id: string,
    waiter: WaiterType,
    client: string,
    desk: number,
    price: string | number,
    people?: number,
    createdAt: string,
    finishedAt?: string,
    status: "Pronto" | "Preparando" | "Aguardando" | "Encerrado",
    items: ItemType[] | []
}

export interface ItemType {
    name: string,
    anotation: string,
    description: string,
    price: string,
    amount: number,
    isDone: boolean
}

export interface WaiterType {
    id: number,
    name: string
}