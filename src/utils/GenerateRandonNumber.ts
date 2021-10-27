export default function GenerateRandonNumber(interval: number){
    const number = Math.random() * interval

    return parseInt(number.toFixed())
}