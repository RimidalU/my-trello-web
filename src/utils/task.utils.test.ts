import { isTaskOverdue } from './task.utils'

describe('isTaskOverdue', () => {
    it('should return true if the due date is in the past', () => {
        const pastDate = Date.now() - 10000
        expect(isTaskOverdue(pastDate)).toBe(true)
    })

    it('should return false if the due date is in the future', () => {
        const futureDate = Date.now() + 10000
        expect(isTaskOverdue(futureDate)).toBe(false)
    })

    it('should return false if the due date is now', () => {
        const nowDate = Date.now()
        expect(isTaskOverdue(nowDate)).toBe(false)
    })
})
