const timestampToDateConvertor = (timestamp: number | string) =>
    new Date(timestamp).toLocaleDateString('ru-RU')

const dateToTimestampConvertor = (date: string): number => {
    const [day, month, year] = date.split('.').map(Number)
    return new Date(year, month - 1, day).getTime()
}
const getStartAndEndOfDay = (date: string) => {
    const [day, month, year] = date.split('.').map(Number)
    const timeStamp = new Date(year, month - 1, day)

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
