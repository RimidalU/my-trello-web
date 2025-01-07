import tasks from '../assets/data/tasks.json'
import { TaskItem, TaskType } from '../models/task.model'

const getTasksByType = (type: TaskType) => {
    return tasks.filter((task) => task.type === type) as TaskItem[]
}

export { getTasksByType }
