import tasks from '../assets/data/tasks.json'
const getTasksByType = (type: string) => {
    return tasks.filter((task) => task.type === type)
}

export { getTasksByType }
