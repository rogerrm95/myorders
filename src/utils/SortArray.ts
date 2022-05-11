// Função para ordenar um array de objetos com propriedade específica //
// Aceita ser ordenado por string ou number //
export function SortArrayOfObjects(array: any, prop: string, asc: boolean = true){
    const newArray = array.sort((x: any, y: any) => {
        const typeOfProp = typeof x[prop]

        if (typeOfProp === 'string') {
            let a = x[prop].toUpperCase(),
                b = y[prop].toUpperCase()

            return (a === b ? 0 : a > b ? 1 : -1);
        }
        else if (typeOfProp === 'number') {
            return x[prop] - y[prop]
        } else {
            return []
        }
    })

    return asc ? newArray : newArray.reverse()
}