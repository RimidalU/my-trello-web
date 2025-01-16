import { TaskType } from '../models/task.model'
import { testsTasks } from '../models/tests.model'

import { getTasksByType, isTaskOverdue } from './task.utils'

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
describe('getTasksByType', () => {
    it('should return tasks of the specified type', () => {
        const result = getTasksByType(testsTasks, TaskType.Done)
        expect(result).toEqual([
            {
                id: 1,
                type: TaskType.Done,
                startDay: 1700000000000,
                endDay: 1703740800000,
                text: 'Task 1',
            },
            {
                id: 5,
                type: TaskType.Done,
                startDay: 1700000030000,
                endDay: 1703740804000,
                text: 'Task 3',
            },
        ])
    })

    it('should return an empty array if no tasks match the specified type', () => {
        const result = getTasksByType(testsTasks, TaskType.InProgress)
        expect(result).toEqual([])
    })
})
