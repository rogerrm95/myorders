type DateProps = {
    dateFormated: string,
    hourFormated: string
}

export default function formartHours(date: Date) {
    const year = date.getUTCFullYear()
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
    const day = date.getDay().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const hour = date.getHours().toString().padStart(2, "0")

    const dateFormated = `${day}/${month}/${year}`
    const hourFormated = `${hour}:${minutes}`

    return {
        dateFormated,
        hourFormated
    } as DateProps
}