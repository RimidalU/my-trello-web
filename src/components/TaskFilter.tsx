import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

const TaskFilter = () => {
    const { dispatch } = useTasks()

    const applyFilter = (filter: string): void => {
        dispatch({ type: TaskAction.apply_filter, filter: filter })
    }

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="поиск..."
                onChange={(e) => applyFilter(e.target.value)}
                className="border rounded p-2 w-full bg-transparent"
            />
        </div>
    )
}

export default TaskFilter
