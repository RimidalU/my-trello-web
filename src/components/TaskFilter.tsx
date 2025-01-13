import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

const TaskFilter = () => {
    const { dispatch } = useTasks()

    const applyFilter = (filter: string): void => {
        dispatch({ type: TaskAction.apply_filter, filter: filter })
    }

    return (
        <div className="mb-4 w-1/4">
            <input
                type="text"
                placeholder="поиск..."
                onChange={(e) => applyFilter(e.target.value)}
                className="border border-white-30 hover:border-active focus:border-active outline-none focus:ring-active-50 focus:ring-4 rounded-full w-full p-2 bg-white-7"
            />
        </div>
    )
}

export default TaskFilter
