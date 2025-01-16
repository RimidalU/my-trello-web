import { timestampToDateConvertor } from './common.utils'

describe('timestampToDateConvertor', () => {
    it('should convert a valid timestamp (number) to a date string in Russian format', () => {
        const timestamp = 1672531199000
        const result = timestampToDateConvertor(timestamp)
        expect(result).toBe('01.01.2023')
    })

    it('should handle invalid timestamps gracefully', () => {
        const invalidTimestamp = 'invalid'
        const result = timestampToDateConvertor(invalidTimestamp)
        expect(result).toBe('Invalid Date')
    })
})
