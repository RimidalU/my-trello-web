enum TaskType {
    Todo = 'todo',
    InProgress = 'in_progress',
    Review = 'review',
    Done = 'done',
}

enum ColumnNameType {
    todo = 'To Do',
    in_progress = 'In Progress',
    review = 'Review',
    done = 'Done',
}
interface TaskItem {
    id: number
    type: TaskType
    startDay: number
    endDay: number
    text: string
}

export type { TaskItem }
export { TaskType, ColumnNameType }
