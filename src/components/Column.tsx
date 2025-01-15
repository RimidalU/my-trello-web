import clsx from 'clsx'
import { useDroppable } from '@dnd-kit/core'

import { TaskItem, TaskType } from '../models/task.model'
import { getTasksByType } from '../utils/task.utils'
import { useTasks } from '../contexts/TaskProvider'

import TaskCard from './TaskCard'
import ColumnHeader from './ColumnHeader'
import TaskEdit from './TaskEdit'

interface ColumnProps {
    taskType: TaskType
    className?: string
}
function Column({ taskType, className }: ColumnProps) {
    const { setNodeRef, over } = useDroppable({
        id: taskType,
    })

    const { state } = useTasks()

    const isCurrentColumn = over?.id === taskType

    const tasks: TaskItem[] = getTasksByType(
        state.filteredTasks.length ? state.filteredTasks : state.tasks,
        taskType
    )
    return (
        <article
            className={clsx(
                'py-4 xl:py-8 px-2 xl:px-4 bg-black-70 rounded',
                isCurrentColumn ? 'border-2 border-active' : '',
                className
            )}
        >
            <ColumnHeader taskType={taskType} />
            <ul
                ref={setNodeRef}
                className={'flex flex-col gap-2 xl:gap-4 pt-2 xl:pt-4'}
            >
                {state.newTask && taskType === TaskType.Todo && (
                    <TaskEdit key="edited-task" className="" />
                )}
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskCard task={task} />
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default Column
