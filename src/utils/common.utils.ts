const timestampToDateConvertor = (timestamp: number | string) =>
    new Date(timestamp).toLocaleDateString('ru-RU')

const dateFromString = (date: string) => {
    const [day, month, year] = date.split('.').map(Number)
    return new Date(year, month - 1, day)
}

const dateToTimestampConvertor = (date: string): number => {
    return dateFromString(date).getTime()
}
const getStartAndEndOfDay = (date: string) => {
    const timeStamp = dateFromString(date)

    const startOfDay = new Date(timeStamp.setHours(0, 0, 0, 0)).getTime()
    const endOfDay = new Date(timeStamp.setHours(23, 59, 59, 999)).getTime()

    return { startOfDay, endOfDay }
}

const isTimestampInRange = (
    timestamp: number,
    start: number,
    end: number
): boolean => timestamp >= start && timestamp <= end

export {
    timestampToDateConvertor,
    getStartAndEndOfDay,
    isTimestampInRange,
    dateToTimestampConvertor,
}
