export default function CalculateAgeOfAnything(birthday: string) {
    const dateNow = new Date() // Data Atual //

    const day = +birthday.split('/')[0]
    const month = +birthday.split('/')[1]
    const year = +birthday.split('/')[2]

    let age = dateNow.getFullYear() - year

    if (month > dateNow.getMonth() && (month === dateNow.getMonth() + 1 && day > dateNow.getDate())) {
        age = --age
    }

    return age
};