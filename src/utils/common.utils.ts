const timestampToDateConvertor = (timestamp: number | string) =>
    new Date(timestamp).toLocaleDateString('ru-RU')

const getStartAndEndOfDay = (date: string) => {
    const [day, month, year] = date.split('.').map(Number)
    const timeStamp = new Date(year, month - 1, day)

    const startOfDay = new Date(timeStamp.setHours(0, 0, 0, 0)).getTime()
    const endOfDay = new Date(timeStamp.setHours(23, 59, 59, 999)).getTime()

    return { startOfDay, endOfDay }
}

export { timestampToDateConvertor, getStartAndEndOfDay }
