import { TaskType } from '../models/task.model'
import { testsTasks } from '../models/tests.model'

import { filterTasks, getTasksByType, isTaskOverdue } from './task.utils'

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
        expect(result).toEqual(
            testsTasks.filter((task) => task.type === TaskType.Done)
        )
    })

    it('should return an empty array if no tasks match the specified type', () => {
        const result = getTasksByType(testsTasks, TaskType.InProgress)
        expect(result).toEqual([])
    })
})

describe('filterTasks', () => {
    it('should return array of tasks if input text matches description task', () => {
        const result = filterTasks(testsTasks, testsTasks[0].text)
        expect(result).toEqual([testsTasks[0]])
    })

    it('should return an empty array if no tasks match the specified filter', () => {
        const result = filterTasks(testsTasks, 'invalid')
        expect(result).toEqual([])
    })

    it('should return array of tasks if input date matches start of tasks', () => {
        const result = filterTasks(testsTasks, '31.12.2025')
        expect(result).toEqual([testsTasks[1]])
    })

    it('should return array of tasks if input date matches end of tasks', () => {
        const result = filterTasks(testsTasks, '02.01.2026')
        expect(result).toEqual([testsTasks[2]])
    })
})
