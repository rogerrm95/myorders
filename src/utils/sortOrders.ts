

function sortOrders(list: any[]) {
    let newList = [];

    const statusDone = list.filter(order => order.status === 'Pronto' && order)
    const statusPreparing = list.filter(order => order.status === 'Preparando' && order)
    const statusWaiting = list.filter(order => order.status === 'Aguardando' && order)
    const statusFinished = list.filter(order => order.status === 'Encerrado' && order)

    newList.push(...statusDone, ...statusPreparing, ...statusWaiting, ...statusFinished)
    return newList
}

export default sortOrders;