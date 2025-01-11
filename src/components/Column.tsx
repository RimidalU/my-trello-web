import clsx from 'clsx'
import { useDroppable } from '@dnd-kit/core'

import { TaskItem, TaskType } from '../models/task.model'
import { getTasksByType } from '../utils/task.utils'
import { useTasks } from '../contexts/TaskProvider'

import TaskCard from './TaskCard'
import ColumnHeader from './ColumnHeader'

interface ColumnProps {
    taskType: TaskType
    className?: string
}
function Column({ taskType, className }: ColumnProps) {
    const { setNodeRef } = useDroppable({
        id: taskType,
    })

    const { state } = useTasks()

    const tasks: TaskItem[] = getTasksByType(state.tasks, taskType)
    return (
        <article
            ref={setNodeRef}
            className={clsx('py-8 px-4 bg-columnBackground rounded', className)}
        >
            <ColumnHeader taskType={taskType} />
            <ul className={'flex flex-col gap-4'}>
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
