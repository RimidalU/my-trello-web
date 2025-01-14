import { useDroppable } from '@dnd-kit/core'

import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'
import { TASK_PURGE_ID } from '../models/task.model'

import TrashIcon from './icons/TrashIcon'

const TaskPurge = () => {
    const { dispatch } = useTasks()
    const { setNodeRef, isOver } = useDroppable({
        id: TASK_PURGE_ID,
    })

    const removeDoneTasks = () => {
        dispatch({ type: TaskAction.remove_done_tasks })
    }

    return (
        <div
            ref={setNodeRef}
            className={'cursor-pointer'}
            onClick={removeDoneTasks}
        >
            <TrashIcon
                className={`${isOver ? 'text-active' : 'text-white-87'} hover:text-active`}
            />
        </div>
    )
}

export default TaskPurge
