import { ConvertCashToString } from './ConvertCashToString'

interface Value {
    price: string,
    amount: number
}

export const CalculateValueTotal = (values: Value[]) => {
    let total = values
        .map((item) => ConvertCashToString(item.price) * item.amount)
        .reduce((item, acc) => {
            return item + acc
        }, 0).toFixed(2).replace('.', ',')

    return total.toString()
}
