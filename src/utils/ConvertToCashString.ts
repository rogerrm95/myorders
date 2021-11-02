interface Item {
    price: string,
    amount: number
}
export const ConvertToCashString = (values: Item[]) => {
    let total = values
        .map((item) => parseFloat(item.price) * item.amount)
        .reduce((item, acc) => {
            return item + acc
        }, 0).toFixed(2).replace('.', ',')
    
    return total.toString()
}