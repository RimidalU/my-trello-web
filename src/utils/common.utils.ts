const timestampToDateConvertor = (timestamp: number | string) =>
    new Date(timestamp).toLocaleDateString('ru-RU')

export { timestampToDateConvertor }
