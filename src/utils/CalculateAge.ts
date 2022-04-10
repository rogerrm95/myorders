export default function CalculateAgeOfAnything(birthday: string) {
    const dateNow = new Date() // Data Atual //

    const day = +birthday.split('/')[0]
    const month = +birthday.split('/')[1]
    const year = +birthday.split('/')[2]

    let age = dateNow.getFullYear() - year
    
    // Verifica se o usuário já fez aniversário, se não fez diminui -1 a idade //
    if (month > dateNow.getMonth() && (month === dateNow.getMonth() + 1 && day > dateNow.getDate())) {
        age = --age
    }

    return age
};