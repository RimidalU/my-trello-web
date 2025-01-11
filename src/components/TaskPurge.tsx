import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

import TrashIcon from './icons/TrashIcon'

const TaskPurge = () => {
    const { dispatch } = useTasks()

    const removeDoneTasks = () => {
        dispatch({ type: TaskAction.remove_done_tasks })
    }

    return (
        <div className="cursor-pointer" onClick={removeDoneTasks}>
            <TrashIcon />
        </div>
    )
}

export default TaskPurge
