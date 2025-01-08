const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
}

const timestampToDateConvertor = (timestamp: number | string) =>
    new Date(timestamp).toLocaleString('en-En', options)

export { timestampToDateConvertor }
