import { TaskItem, TaskType } from '../models/task.model'

import { getStartAndEndOfDay, isTimestampInRange } from './common.utils'

const getTasksByType = (tasks: TaskItem[], type: TaskType) => {
    return tasks.filter((task) => task.type === type) as TaskItem[]
}

const isTaskOverdue = (dueDateTimestamp: number | string): boolean => {
    const currentDate = Date.now()
    return Number(dueDateTimestamp) < currentDate
}

const filterTasks = (tasks: TaskItem[], filter: string) => {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(filter)

    return tasks.filter((task) => {
        const textMatch = task.text.toLowerCase().includes(filter.toLowerCase())

        const startDayMatch = isTimestampInRange(
            task.startDay,
            startOfDay,
            endOfDay
        )

        const endDayMatch = isTimestampInRange(
            task.endDay,
            startOfDay,
            endOfDay
        )

        return textMatch || startDayMatch || endDayMatch
    })
}

export { getTasksByType, isTaskOverdue, filterTasks }
