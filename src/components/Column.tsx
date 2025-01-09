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
        <article
            className={clsx('py-8 px-4 bg-columnBackground rounded', className)}
        >
            <h2 className="text-foregroundBold text-2xl font-bold mb-4">
                {ColumnNameType[taskType]}
            </h2>
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
