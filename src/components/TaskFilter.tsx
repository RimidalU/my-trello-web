import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

import SearchIcon from './icons/SearchIcon'

const TaskFilter = () => {
    const { dispatch } = useTasks()

    const applyFilter = (filter: string): void => {
        dispatch({ type: TaskAction.apply_filter, filter: filter })
    }

    return (
        <div className="mb-4 md:w-[calc(25%-25px)] sm:w-1/2 w-full relative">
            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2" />
            <input
                type="text"
                placeholder="поиск..."
                onChange={(e) => applyFilter(e.target.value)}
                className="border border-white-30 hover:border-active focus:border-active outline-none focus:ring-active-50 focus:ring-4 rounded-full w-full p-2 bg-white-7 pl-16"
            />
        </div>
    )
}

export default TaskFilter
