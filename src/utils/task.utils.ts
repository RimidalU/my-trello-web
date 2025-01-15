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

const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000
const getTaskTemplate = () => {
    const dateNow = new Date(Date.now()).getTime()

    return {
        id: dateNow,
        type: TaskType.Todo,
        startDay: dateNow,
        endDay: dateNow + ONE_DAY_IN_MILLISECONDS,
        text: "Please don't forget to add the task!",
    }
}

export { getTasksByType, isTaskOverdue, filterTasks, getTaskTemplate }
