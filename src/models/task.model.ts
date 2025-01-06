enum TaskType {
    Done = 'done',
    Todo = 'todo',
    InProgress = 'in_progress',
    Review = 'review',
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
