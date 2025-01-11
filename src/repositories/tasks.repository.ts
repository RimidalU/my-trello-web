import { TaskItem } from '../models/task.model'
const LOCAl_STORAGE_KEY = 'tasks'

const getTasks = (): TaskItem[] => {
    const tasksJson = localStorage.getItem(LOCAl_STORAGE_KEY)
    const tasks: TaskItem[] = tasksJson ? JSON.parse(tasksJson) : []
    return tasks
}
const saveTasks = (tasks: TaskItem[]): void =>
    localStorage.setItem(LOCAl_STORAGE_KEY, JSON.stringify(tasks))

export { getTasks, saveTasks }
