export const ConvertCashToString = (value: string) => {
    const valueFormat = parseFloat(value.replace(',','.')) // 39,90 -> 39.9 //
    return valueFormat
}