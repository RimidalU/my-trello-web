import clsx from 'clsx'

import { ColumnNameType, TaskItem, TaskType } from '../models/task.model'
import { getTasksByType } from '../utils/task.utils'

import TaskCard from './TaskCard'

interface ColumnProps {
    taskType: TaskType
    className?: string
}
function Column({ taskType, className }: ColumnProps) {
    const tasks: TaskItem[] = getTasksByType(taskType)
    return (
        <article>
            <h2 className="text-foregroundBold text-2xl font-bold">
                {ColumnNameType[taskType]}
            </h2>
            <ul
                className={clsx(
                    'flex flex-col gap-4 px-5 py-4 bg-columnBackground',
                    className
                )}
            >
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
