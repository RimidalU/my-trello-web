enum TaskType {
    Todo = 'todo',
    InProgress = 'in_progress',
    Review = 'review',
    Done = 'done',
}

interface TaskItem {
    id: number
    type: TaskType
    startDay: number
    endDay: number
    text: string
}

export type { TaskItem }
export { TaskType }
